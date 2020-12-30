import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from '@bit/mui-org.material-ui.button'
// @ts-ignore
import StatusIndicator from '@bit/ronbraha.codebyron.status-indicator.status-indicator'

export const ApiButton = ({
  text,
  color,
  handleClick,
}: {
  text: string
  color?: string
  handleClick: () => Promise<void>
}) => {
  const [isShow, setIsShow] = useState<boolean>(false)
  const [status, setStatus] = useState<string>('n/a')
  let progress = 0
  const _handleClick = async () => {
    progress++
    setStatus('n/a')
    setIsShow(true)
    const response = await handleClick()
      .then((res) => {
        setStatus('online')
        return res
      })
      .catch(() => {
        setStatus('offline')
      })
    progress--
    setTimeout(() => {
      if (progress === 0) setIsShow(false)
    }, 2000)
    return response
  }
  return (
    <ButtonLayout>
      <Button variant="contained" color={color} onClick={_handleClick}>
        {text}
      </Button>
      <Status isShow={isShow}>
        <StatusIndicator status={status} />
      </Status>
    </ButtonLayout>
  )
}

export const ButtonLayout = styled.div`
  display: flex;
`

const Status = styled.div<{ isShow: boolean }>`
  transition: all 0.3s;
  transition-property: opacity;
  transition-duration: 0.2s;
  opacity: ${(props) => (props.isShow ? '1' : '0')};
`
