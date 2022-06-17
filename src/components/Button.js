import React, { useState } from 'react'

function Button() {
    const [showAnotherBtn, setShowAnotherBtn] = useState(false);

  return (
    <div>
        <button data-testid="button" onClick={() => {
            setShowAnotherBtn(true)
        }}>
            Click
        </button>
        { showAnotherBtn && (
            <button data-testid="button">Click again</button>
        )}
    </div>
  )
}

export default Button