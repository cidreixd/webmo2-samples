import React, { FC, useEffect, useState } from 'react'
import { CodeBlock } from '../atoms/CodeBlock'
import { getSamplePage } from '../../constants/samples'
import { Layout } from '../atoms/Layout'
import { SubText, Text, Title } from '../atoms/Text'
import { Section } from '../atoms/Section'
import { WebmoStatus } from '../molecules/WebmoStatus'
import { ApiButton, ButtonLayout } from '../atoms/ApiButton'
import { SampleList } from '../molecules/SampleList'
import webmo from 'webmo2-library-javascript'

const RotateContainer: FC = () => {
  const sample = getSamplePage('UDP')

  let target = ''

  const gravityCode = `
    webmo.socketClient.events.on('UDP', (data) => {
      if (!data.sensordata.gravity) return
      const { x, y, z } = data.sensordata.gravity
      webmo.motor.rotate({ speed: x * 800 }, { speed: y * 800 })
    })
  `

  useEffect(() => {
    const onUDP = async (data: any) => {
      console.log(data)
      if (data?.sensordata?.gravity) {
        onGravity(data.sensordata.gravity)
      }
    }
    webmo.socketClient.events.on('UDP', onUDP)
  }, [])

  const gravity = () => {
    target = 'gravity'
    return new Promise<void>((resolve) => resolve(void 0))
  }

  const onGravity = (gravity: any) => {
    if (target !== 'gravity') return
    const { x, y, z } = gravity
    webmo.motor.rotate({ speed: x * 800 }, { speed: y * 800 })
  }

  const stop = () => {
    target = ''
    return webmo.motor.stop()
  }

  return (
    <>
      <Layout>
        <Title>{sample?.displayName}</Title>
        <WebmoStatus />
        <Section>
          <Text>説明ページへのリンク</Text>
          {/* <Link></Link> */}
        </Section>
        <Section>
          <Text>重力加速度</Text>
          <SubText></SubText>
          <CodeBlock code={gravityCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="開始する"
              handleClick={gravity}
            ></ApiButton>
          </ButtonLayout>
        </Section>
        <Section>
          <Text>インタラクションの停止</Text>
          <SubText></SubText>
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="停止する"
              handleClick={stop}
            ></ApiButton>
          </ButtonLayout>
        </Section>
        <SampleList />
      </Layout>
    </>
  )
}

export default RotateContainer
