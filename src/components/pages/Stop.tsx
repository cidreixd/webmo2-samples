import React, { FC } from 'react'
import { CodeBlock } from '../atoms/CodeBlock'
import { getSamplePage } from '../../constants/samples'
import { Layout } from '../atoms/Layout'
import { SubText, Text, Title } from '../atoms/Text'
import { Section } from '../atoms/Section'
import { WebmoStatus } from '../molecules/WebmoStatus'
import { ApiButton, ButtonLayout } from '../atoms/ApiButton'
import { SampleList } from '../molecules/SampleList'
import webmo from 'webmo2-js'

const StopContainer: FC = () => {
  const sample = getSamplePage('stop')

  const stopSmoothCode = `
    await webmo.motor.rotate({ speed: 360 })
    await webmo.wait(1000)
    await webmo.motor.stop()
  `

  const stopCode = `
    await webmo.motor.rotate({ speed: 360 })
    await webmo.wait(1000)
    await webmo.motor.stop({ smooth: false })
  `

  const lockSmoothCode = `
    await webmo.motor.rotate({ speed: 360 })
    await webmo.wait(1000)
    await webmo.motor.lock()
  `

  const lockCode = `
    await webmo.motor.rotate({ speed: 360 })
    await webmo.wait(1000)
    await webmo.motor.lock({ smooth: false })
  `

  const stopSmooth = async () => {
    await webmo.motor.rotate({ speed: 360 })
    await webmo.wait(1000)
    return webmo.motor.stop()
  }

  const stop = async () => {
    await webmo.motor.rotate({ speed: 360 })
    await webmo.wait(1000)
    return webmo.motor.stop({ smooth: false })
  }

  const lockSmooth = async () => {
    await webmo.motor.rotate({ speed: 360 })
    await webmo.wait(1000)
    return webmo.motor.lock()
  }

  const lock = async () => {
    await webmo.motor.rotate({ speed: 360 })
    await webmo.wait(1000)
    return webmo.motor.lock({ smooth: false })
  }

  return (
    <>
      <Layout>
        <Title>{sample?.displayName}</Title>
        <WebmoStatus />
        <Section>
          <Text>停止する（スムーズ）</Text>
          <SubText></SubText>
          <CodeBlock code={stopSmoothCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={stopSmooth}
            />
          </ButtonLayout>
        </Section>
        <Section>
          <Text>停止する（すぐに停める）</Text>
          <SubText></SubText>
          <CodeBlock code={stopCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={stop}
            />
          </ButtonLayout>
        </Section>
        <Section>
          <Text>ロックする（スムーズに停止する）</Text>
          <SubText>力を加えて停止状態を維持します。長時間ロックするとモータが熱くなる可能性があります。</SubText>
          <CodeBlock code={lockSmoothCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={lockSmooth}
            />
          </ButtonLayout>
        </Section>
        <Section>
          <Text>ロックする（すぐに停める）</Text>
          <SubText>力を加えて停止状態を維持します。長時間ロックするとモータが熱くなる可能性があります。</SubText>
          <CodeBlock code={lockCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={lock}
            />
          </ButtonLayout>
        </Section>
        <SampleList />
      </Layout>
    </>
  )
}

export default StopContainer
