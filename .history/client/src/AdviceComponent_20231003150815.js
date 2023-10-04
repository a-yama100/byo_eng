// E:\programming\Project\byo_eng\client\src\AdviceComponent.js

import React, { useState } from 'react';

function AdviceComponent() {
  const [userInput, setUserInput] = useState('This is a pen.');
  const [advice, setAdvice] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3000/advice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: userInput }),
    });

    const data = await response.json();
    setAdvice(data.advice);
  };

  return (
    <div>
      <textarea value={userInput} onChange={handleInputChange} />
      <button onClick={handleSubmit}>アドバイス</button>
      <textarea value={advice} readOnly />
    </div>
  );
}

export default AdviceComponent;
