// E:\programming\Project\byo_eng\client\src\component\AdviceComponent.js

import React, { useState } from 'react';

function AdviceComponent() {
  const [userInput, setUserInput] = useState('This is a pen.');
  const [advice, setAdvice] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    // ... (以前のコードを保持)
  };

  return (
    <div>
      <textarea className="form-control mb-3" value={userInput} onChange={handleInputChange} />
      <button className="btn btn-primary mb-3" onClick={handleSubmit}>アドバイス</button>
      <textarea className="form-control" value={advice} readOnly />
    </div>
  );
}

export default AdviceComponent;
