import React, { FC, useState } from 'react'
import { CodeBlock } from '../atoms/CodeBlock'
import { getSamplePage } from '../../constants/samples'
import { Layout } from '../atoms/Layout'
import { SubText, Text, Title } from '../atoms/Text'
import { Section } from '../atoms/Section'
import { WebmoStatus } from '../molecules/WebmoStatus'
import { ApiButton, ButtonLayout } from '../atoms/ApiButton'
import { SampleList } from '../molecules/SampleList'
import webmo from 'webmo2-js'

const RotateToContainer: FC = () => {
  const sample = getSamplePage('rotate_to')
  const [rotationText, setRotationText] = useState('モータ1:　モータ2: ')

  const getRotationCode = `
    webmo.motor.getRotation()
  `

  const rotateTo360Code = `
    webmo.motor.rotateTo({ degree: 360, speed: 90 })
  `

  const rotateTo0Code = `
    webmo.motor.rotateTo({ degree: 360, speed: 90 })
  `

  const resetRotationCode = `
    webmo.motor.resetRotation()
  `

  const resetRotationOffsetCode = `
    webmo.motor.resetRotation({ offset: 720 })
  `

  const getRotation = async () => {
    const data = await webmo.motor.getRotation()
    setRotationText(`モータ1: ${data[0].degree}, モータ2: ${data[1].degree}`)
    return
  }

  const rotateTo0 = () => {
    return webmo.motor.rotateTo({ degree: 0, speed: 90 })
  }

  const rotateTo360 = () => {
    return webmo.motor.rotateTo({ degree: 360, speed: 90 })
  }

  const resetRotation = () => {
    return webmo.motor.resetRotation()
  }

  const resetRotationOffset = () => {
    return webmo.motor.resetRotation({ offset: 720 })
  }

  return (
    <>
      <Layout>
        <Title>{sample?.displayName}</Title>
        <WebmoStatus />
        <Section>
          <Text>現在の内部角度を取得する</Text>
          <SubText>{rotationText}</SubText>
          <CodeBlock code={getRotationCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={getRotation}
            />
          </ButtonLayout>
        </Section>
        <Section>
          <Text>0度まで回転する</Text>
          <SubText>内部角度が0度になるまで回転します</SubText>
          <CodeBlock code={rotateTo0Code} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={rotateTo0}
            />
          </ButtonLayout>
        </Section>
        <Section>
          <Text>360度まで回転する</Text>
          <SubText>内部角度が360度になるまで回転します</SubText>
          <CodeBlock code={rotateTo360Code} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={rotateTo360}
            />
          </ButtonLayout>
        </Section>
        <Section>
          <Text>内部角度をリセットする</Text>
          <SubText>現在の位置を内部角度0度にします</SubText>
          <CodeBlock code={resetRotationCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={resetRotation}
            />
          </ButtonLayout>
        </Section>
        <Section>
          <Text>内部角度をリセットする（オフセットあり）</Text>
          <SubText>現在の位置を内部角度720度にします</SubText>
          <CodeBlock code={resetRotationOffsetCode} />
          <ButtonLayout>
            <ApiButton
              color="primary"
              text="実行する"
              handleClick={resetRotationOffset}
            />
          </ButtonLayout>
        </Section>
        <SampleList />
      </Layout>
    </>
  )
}

export default RotateToContainer
