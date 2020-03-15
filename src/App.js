import React, {useState} from 'react';
import './App.scss';

function App() {

  const [text, setText] = useState("");


  return (
    <div className="App">
      <div className="editor-wrapper">
        <h1>Markdown Editor</h1>
        <textarea name="" id="editor" cols="30" rows="10" autoFocus={true} placeholder="Please enter something here..." onChange={event => setText(event.target.value)}></textarea>
      </div>
      <div className="preview-wrapper">
        <h1>Markdown Previwer</h1>
        <div id="preview">{text}</div>
      </div>
    </div>
  );
}

export default App;
