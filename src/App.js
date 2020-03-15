import React, {useState} from 'react';
import './App.scss';
import marked from 'marked';

function App() {

  const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
  return multiLineCode;
}
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
   - With different indentation levels.
      - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

  const [text, setText] = useState("");

  const createMarkup = () => {
    let markedText = marked(text,
                      {sanitize: true,
                       gfm: true,
                       breaks: true,
                      }
                     )
    return {__html: markedText}
  }

  return (
    <div className="App">
      <div className="editor-wrapper">
        <h1>Markdown Editor</h1>
        <textarea name="" id="editor" autoFocus={true} placeholder="" onChange={event => setText(event.target.value)}>{defaultText}</textarea>
      </div>
      <div className="preview-wrapper">
        <h1>Markdown Previwer</h1>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}

export default App;
