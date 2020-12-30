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

  const rotateCode = `
    webmo.motor.rotate({ speed: 90 })
  `

  const slowRotateCode = `
    webmo.motor.rotate({ speed: 10 })
  `

  const fastRotateCode = `
    webmo.motor.rotate({ speed: 720 })
  `

  const reverseRotateCode = `
    webmo.motor.rotate({ speed: -90 })
  `

  const singleRotateCode = `
    await webmo.motor.stop()

    await webmo.motor1.rotate({ speed: 90 })
    await webmo.wait(3000) // 3秒待つ

    await webmo.motor2.rotate({ speed: -180 })
    await webmo.wait(3000) // 3秒待つ

    await webmo.motor.stop()
  `

  const syncRotateCode = `
    webmo.motor.rotate({ speed: 180 }, { speed: -90 })

    // 配列を使った書き方でも上記のコードと同様の結果になります
    // webmo.motor.rotate([{ speed: 180 }, { speed: -90 }])
  `

  const stopCode = `
    webmo.motor.stop()
  `

  const rotate = () => {
    return webmo.motor.rotate({ speed: 90 })
  }

  const slowRotate = () => {
    return webmo.motor.rotate({ speed: 10 })
  }

  const fastRotate = () => {
    return webmo.motor.rotate({ speed: 720 })
  }

  const reverseRotate = () => {
    return webmo.motor.rotate({ speed: -90 })
  }

  const singleRotate = async () => {
    await webmo.motor.stop()

    await webmo.motor1.rotate({ speed: 90 })
    await webmo.wait(3000) // 3秒待つ

    await webmo.motor2.rotate({ speed: -180 })
    await webmo.wait(3000) // 3秒待つ

    await webmo.motor.stop()
  }

  const syncRotate = async () => {
    return webmo.motor.rotate({ speed: 180 }, { speed: -90 })
  }

  const stop = () => {
    return webmo.motor.stop()
  }

  return (
    <>
      <Layout>
        <Title>{sample?.displayName}</Title>
        <WebmoStatus />
        <Section>
          <Text>回転する</Text>
          <SubText>すべてのモータが90度/秒で回転し続けます</SubText>
          <CodeBlock code={rotateCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={rotate}
            ></ApiButton>
          </ButtonLayout>
        </Section>
        <Section>
          <Text>ゆっくり回転する</Text>
          <SubText>すべてのモータが10度/秒で回転し続けます</SubText>
          <CodeBlock code={slowRotateCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={slowRotate}
            ></ApiButton>
          </ButtonLayout>
        </Section>
        <Section>
          <Text>素早く回転する</Text>
          <SubText>すべてのモータが720度/秒で回転し続けます</SubText>
          <CodeBlock code={fastRotateCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={fastRotate}
            ></ApiButton>
          </ButtonLayout>
        </Section>
        <Section>
          <Text>回転方向を変える</Text>
          <SubText>speedをマイナスにすると逆回転になります</SubText>
          <CodeBlock code={reverseRotateCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={reverseRotate}
            ></ApiButton>
          </ButtonLayout>
        </Section>
        <Section>
          <Text>モータを別々に回転させる</Text>
          <SubText>モータ1が回転し始めた3秒後にモータ2が回転し始めます</SubText>
          <CodeBlock code={singleRotateCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={singleRotate}
            ></ApiButton>
          </ButtonLayout>
        </Section>
        <Section>
          <Text>別々の速度で同時に回転させる</Text>
          <SubText>
            モータ1は180度/秒で、モータ2は-90度/秒で同時に回転し始めます
          </SubText>
          <CodeBlock code={syncRotateCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={syncRotate}
            ></ApiButton>
          </ButtonLayout>
        </Section>
        <Section>
          <Text>停止</Text>
          <CodeBlock code={stopCode} />
          <ApiButton color="primary" text="実行する" handleClick={stop}></ApiButton>
        </Section>
        <SampleList />
      </Layout>
    </>
  )
}

export default RotateContainer
