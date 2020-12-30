import React, { FC } from 'react'
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
  const sample = getSamplePage('rotate')
  const initializeCode = `
    webmo.init()
    webmo.motor.stop()
  `

  const rotateCode = `
    webmo.motor.rotate({ speed: 90 })
  `

  const stopCode = `
    webmo.motor.stop()
  `

  const rotate = () => {
    return webmo.motor.rotate({ speed: 90 })
  }

  const stop = () => {
    return webmo.motor.stop()
  }

  return (
    <>
      <Layout>
        <WebmoStatus />
        <Title>{sample?.displayName}</Title>
        <Section>
          <Text>初期化</Text>
          <CodeBlock code={initializeCode} />
        </Section>
        <Section>
          <Text>回転</Text>
          <SubText>すべてのモータが100度/秒で回転し続けます</SubText>
          <CodeBlock code={rotateCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行"
              handleClick={rotate}
            ></ApiButton>
          </ButtonLayout>
        </Section>
        <Section>
          <Text>停止</Text>
          <CodeBlock code={stopCode} />
          <ApiButton color="primary" text="実行" handleClick={stop}></ApiButton>
        </Section>
        <SampleList />
      </Layout>
    </>
  )
}

export default RotateContainer
