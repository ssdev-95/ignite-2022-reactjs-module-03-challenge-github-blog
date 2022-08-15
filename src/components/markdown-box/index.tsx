import ReactMarkdown from 'react-markdown'

type MarkdownBoxProps = {
  markdown: string
}

export function MarkdownBox({ markdown }: MarkdownBoxProps) {
  return (
    <ReactMarkdown>
      {markdown}
    </ReactMarkdown>
  )
}
