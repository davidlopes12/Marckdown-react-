import { useState, useEffect, useRef } from 'react'
import Toolbar from './components/Toolbar'

import { marked } from 'marked';

function App() {
  const [text, setText] = useState(localStorage.getItem('markdownText') || '')
  const textAreaRef = useRef(null);

  const renderText = () => {
    return {__html: marked(text) };
  }

  useEffect(() => {
    localStorage.setItem('markdownText', text);
  },[text])

  const inserText =(before, after) => {
    const textArea = textAreaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const previousText = textArea.value;
    const beforeText = previousText.substring(0, start);
    const selectText = previousText.substring(start, end);
    const afterText = previousText.substring(end);

    const newText = `${beforeText}${before}${selectText}${after}${afterText}`

    setText(newText)

    textArea.focus();
  }

  return (
    <div className='app-container'>
      <Toolbar  inserText={inserText}/>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
      </textarea>
      <div dangerouslySetInnerHTML={renderText()}/>
    </div >
  )
}

export default App
