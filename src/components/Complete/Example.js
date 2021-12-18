import React from 'react'
import theme from 'prism-react-renderer/themes/dracula'
import Highlight, { defaultProps } from 'prism-react-renderer'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);  
})();

return () => <App />;
`
const Example = props => {
  const className = props.children.props.className
  const language = className.replace(/language-/, '')

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Example
