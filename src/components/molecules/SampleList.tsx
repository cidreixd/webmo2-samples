import React from 'react'
import { Link } from 'react-router-dom'
import { getSamplePage, samplePages } from '../../constants/samples'
import { Section } from '../atoms/Section'
import { Title } from '../atoms/Text'

export const SampleList = () => {
  return (
    <Section>
      <Title>サンプル集</Title>
      {samplePages.map((sample) => {
        return (
          <p>
            <Link to={sample.key} key={sample.key}>
              {getSamplePage(sample.key)?.displayName}
            </Link>
          </p>
        )
      })}
    </Section>
  )
}
