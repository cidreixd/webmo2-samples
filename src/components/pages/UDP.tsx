import React, { FC, useEffect, useState } from 'react'
import { CodeBlock } from '../atoms/CodeBlock'
import { getSamplePage } from '../../constants/samples'
import { Layout } from '../atoms/Layout'
import { SubText, Text, Title } from '../atoms/Text'
import { Section } from '../atoms/Section'
import { WebmoStatus } from '../molecules/WebmoStatus'
import { SampleList } from '../molecules/SampleList'
import webmo from 'webmo2-js'
import { ApiButton } from '../atoms/ApiButton'

const RotateContainer: FC = () => {
  const sample = getSamplePage('UDP')
  const [data, setData] = useState('')

  const gravityCode = `
    webmo.socketClient.events.on('UDP', (data) => {
      if (!data.sensordata.gravity) return
      const { x, y, z } = data.sensordata.gravity
      webmo.motor.rotate({ speed: x * 800 }, { speed: y * 800 })
    })
  `

  useEffect(() => {
    const onUDP = async (data: any) => {
      setData(JSON.stringify(data, null, '　'))
      if (data?.sensordata?.gravity) {
        const { x, y } = data.sensordata.gravity
        webmo.motor.rotate({ speed: x * 800 }, { speed: y * 800 })
      }
    }
    webmo.socketClient.events.on('UDP', onUDP)
  }, [])

  const stop = () => {
    return webmo.motor.stop()
  }

  return (
    <>
      <Layout>
        <Title>{sample?.displayName}</Title>
        <WebmoStatus />
        <Section>
          <Text>
            <a href="https://zig-project.com/" target="_black" rel="noopener">
              ZIG Simulatorアプリ
            </a>
            を使うと簡単にスマホセンサとの連携ができます
          </Text>
          <SubText>
          ZIG Simulatorの設定値
            <ul>
              <li>IP ADDRESS: WebmoのIPアドレスを入力</li>
              <li>PORT NUNBER: 5555を入力</li>
            </ul>
          </SubText>
        </Section>
        <Section>
          <Text>スマホの傾きに応じて速度が変化します</Text>
          <SubText>ZIG Simulatorアプリを起動し、GRAVITYデータを送ると開始します。</SubText>
          <CodeBlock code={gravityCode} />
        </Section>
        <Section>
          <Text>受け取ったデータの表示</Text>
          <SubText>{data}</SubText>
        </Section>
        <Section>
          <Text>モータの停止</Text>
          <ApiButton
            color="primary"
            text="実行する"
            handleClick={stop}
          />
        </Section>
        <SampleList />
      </Layout>
    </>
  )
}

export default RotateContainer
