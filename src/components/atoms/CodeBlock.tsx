import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.css'
hljs.registerLanguage('javascript', javascript)

export const CodeBlock = ({ code }: { code: string }) => {
  useEffect(() => {
    hljs.initHighlighting()
    // @ts-ignore
    hljs.initHighlighting.called = false;
  }, [])

  return (
    <pre>
      <code className="lang-javascript">{code}</code>
    </pre>
  )
}
