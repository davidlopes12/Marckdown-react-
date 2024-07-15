import React from 'react'

function Toolbar({ inserText }) {
  return (
    <div className='toobar'>
      <button onClick={() => inserText('# ', '')}>h1</button>
      <button onClick={() => inserText('## ', '')}>h2</button>
      <button onClick={() => inserText('** ', '**')}>Bold</button>
      <button onClick={() => inserText('* ', '*')}>Italíco</button>
      <button onClick={() => inserText('[ ', '](https://)')}>Link</button>
      <button onClick={() => inserText('``` ', '```')}>Code Block</button>
      <button onClick={() => inserText('- ', '')}>List Item</button>
      <button onClick={() => inserText('\n---\n ', '')}>Horizontal Line</button>
    </div>
  )
}

export default Toolbar