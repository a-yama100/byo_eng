// E:\programming\Project\byo_eng\client\src\component\AdviceComponent.js

import React, { useState } from 'react';

function AdviceComponent() {
    const [userInput, setUserInput] = useState('');  // 初期値を空に変更
    const [advice, setAdvice] = useState('');  // 初期値を空に変更
    const [translatedAdvice, setTranslatedAdvice] = useState('');  // 初期値を空に変更

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

        if (!response.ok) {
            console.error(`Error: ${response.status} ${response.statusText}`);
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        setAdvice(data.advice);
        setTranslatedAdvice(data.translatedAdvice);
    };

    return (
        <div>
            <textarea className="form-control mb-3" value={userInput} onChange={handleInputChange} />
            <button className="btn btn-primary mb-3" onClick={handleSubmit}>アドバイス</button>
            <textarea className="form-control mb-3" value={advice} readOnly />
            <textarea className="form-control" value={translatedAdvice} readOnly />
        </div>
    );
}

export default AdviceComponent;
