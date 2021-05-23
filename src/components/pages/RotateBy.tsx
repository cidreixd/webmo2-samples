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

const RotateByContainer: FC = () => {
  const sample = getSamplePage('rotate_by')

  const rotateByCode = `
    webmo.motor.rotateBy({ degree: 360, speed: 180 })
  `

  const reverseRotateByCode = `
    webmo.motor.rotateBy({ degree: -360, speed: 180 })
  `

  const singleRotateByCode = `
    await webmo.motor1.rotateBy({ degree: 360, speed: 90 })
    await webmo.wait(2000)
    await webmo.motor2.rotateBy({ degree: 360, speed: 180 })
  `

  const syncRotateByCode = `
    webmo.motor.rotateBy(
      { degree: 360 * 5, speed: 180 },
      { degree: -360 * 3, speed: 180 }
    )

    // 配列を使った書き方でも上記のコードと同様の結果になります
    webmo.motor.rotateBy(
      [
        { degree: 360 * 5, speed: 300 },
        { degree: -360 * 3, speed: 300 }
      ]
    )
  `

  const rotateBy = () => {
    return webmo.motor.rotateBy({ degree: 360, speed: 180 })
  }

  const reverseRotateBy = () => {
    return webmo.motor.rotateBy({ degree: -360, speed: 180 })
  }

  const singleRotateBy = async () => {
    await webmo.motor1.rotateBy({ degree: 360, speed: 90 })
    await webmo.wait(2000)
    await webmo.motor2.rotateBy({ degree: 360, speed: 180 })
  }

  const syncRotateBy = () => {
    return webmo.motor.rotateBy(
      { degree: 360 * 5, speed: 300 },
      { degree: -360 * 3, speed: 300 }
    )
  }

  return (
    <>
      <Layout>
        <Title>{sample?.displayName}</Title>
        <WebmoStatus />
        <Section>
          <Text>1回転する</Text>
          <SubText>相対角度を360度に指定しています</SubText>
          <CodeBlock code={rotateByCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={rotateBy}
            />
          </ButtonLayout>
        </Section>
        <Section>
          <Text>反時計回りに1回転する</Text>
          <SubText>相対角度を-360度に指定しています</SubText>
          <CodeBlock code={reverseRotateByCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={reverseRotateBy}
            />
          </ButtonLayout>
        </Section>
        <Section>
          <Text>モータ別に相対角度を指定する</Text>
          <SubText>どちらも1回転しますが、モータ2は2秒後に回転し始めます</SubText>
          <CodeBlock code={singleRotateByCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={singleRotateBy}
            />
          </ButtonLayout>
        </Section>
        <Section>
          <Text>別々の相対角度を指定する</Text>
          <SubText>モータ1は5回転, モータ2は逆方向に3回転します</SubText>
          <CodeBlock code={syncRotateByCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={syncRotateBy}
            />
          </ButtonLayout>
        </Section>
        <SampleList />
      </Layout>
    </>
  )
}

export default RotateByContainer
