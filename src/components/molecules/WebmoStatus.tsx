import React, { FC, useCallback, useEffect } from 'react'
import { useState } from 'react'
import webmo from 'webmo2-library-javascript'
import { Text, Title } from '../atoms/Text'
import styled from 'styled-components/macro'
import { Section } from '../atoms/Section'
import { Input } from '../atoms/Input'

// @ts-ignore
import StatusIndicator from '@bit/ronbraha.codebyron.status-indicator.status-indicator'
import Button from '@bit/mui-org.material-ui.button'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux'
import equal from 'fast-deep-equal'
import { actions } from '../../redux/webmo'

export const WebmoStatus: FC = () => {
  const dispatch = useDispatch()
  const { isInitialized, ping, websocket } = useSelector(
    (state: AppState) => state.webmo,
    equal
  )

  const [inputValue, setInputValue] = useState<string>('webmo.local')
  const [intervalId, setIntervalId] = useState<number | null>(null)

  useEffect(() => {
    if (isInitialized) return

    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
    }

    dispatch(actions.init())

    webmo.socketClient.events.on('open', () => dispatch(actions.websocketIsOpen()))
    webmo.socketClient.events.on('close', () => dispatch(actions.websocketIsClose()))

    const pingCheck = () => {
      const time = Date.now()
      dispatch(actions.pingPending(time))
      webmo.httpClient
        .ping()
        .then(() => {
          dispatch(actions.pingOK(time))
        })
        .catch(() => {
          dispatch(actions.pingNG(time))
        })
    }

    pingCheck()
    setIntervalId(setInterval(pingCheck, 30000))

    return () => {
      if (!intervalId) return
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }, [isInitialized, dispatch, intervalId])

  const handleHost = useCallback(() => {
    dispatch(actions.setHost(inputValue))
  }, [inputValue, dispatch])

  return (
    <>
      <Section>
        <Title>通信状況</Title>
        <Flex>
          <Text>HTTP: Ping {ping.state}</Text>
          <StatusIndicator status={ping.indicator} />
        </Flex>
        <Flex>
          <Text>Websocket: {websocket.state}</Text>
          <StatusIndicator status={websocket.indicator} />
        </Flex>
        <Flex>
          <Input placeholder="webmo.local" onChange={setInputValue} />
          <Button variant="outlined" onClick={handleHost}>
            {'設定する'}
          </Button>
        </Flex>
      </Section>
    </>
  )
}

const Flex = styled.div`
  display: flex;
`
