import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="editor-wrapper">
        <h1>Markdown Editor</h1>
        <textarea name="" id="editor" cols="30" rows="10" autoFocus={true} placeholder="Please enter something here..."></textarea>
      </div>
      <div className="preview-wrapper">
        <h1>Markdown Previwer</h1>
        <div id="preview"></div>
      </div>
    </div>
  );
}

export default App;
