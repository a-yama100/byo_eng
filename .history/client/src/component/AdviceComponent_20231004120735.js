// E:\programming\Project\byo_eng\client\src\component\AdviceComponent.js

import React, { useState } from 'react';

function AdviceComponent() {
  const [userInput, setUserInput] = useState('This is a pen.');
  const [advice, setAdvice] = useState('');
  const [language, setLanguage] = useState('en'); // 追加: デフォルトは英語

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3000/advice', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: userInput, language: language }), // 言語選択も一緒に送る
    });

        if (!response.ok) {
            console.error(`Error: ${response.status} ${response.statusText}`);
            throw new Error('Network response was not ok');
        }

    const data = await response.json();

    // APIの応答を使用してadviceステートを更新
    setAdvice(data.advice);

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
