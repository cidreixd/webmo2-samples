import React from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.css'
import { SampleList } from './components/molecules/SampleList'
import { Layout } from './components/atoms/Layout'

hljs.registerLanguage('javascript', javascript)

function App() {
  return (
    <Layout>
      <SampleList />
    </Layout>
  )
}

export default App
