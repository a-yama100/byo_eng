// E:\programming\Project\byo_eng\client\src\component\AdviceComponent.js
import React, { useState } from 'react';

function AdviceComponent() {
    const [userInput, setUserInput] = useState('');
    const [advice, setAdvice] = useState('');
    const [translatedAdvice, setTranslatedAdvice] = useState('');

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
            <div className="card mb-4">
                <div className="card-header">英文入力</div>
                <div className="card-body">
                    <textarea className="form-control mb-3" rows="4" value={userInput} onChange={handleInputChange} />
                    <button className="btn btn-primary" onClick={handleSubmit}>アドバイス</button>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header">OpenAI アドバイス</div>
                <div className="card-body">
                    <textarea className="form-control" rows="4" value={advice} readOnly />
                </div>
            </div>
            <div className="card">
                <div className="card-header">日本語翻訳</div>
                <div className="card-body">
                    <textarea className="form-control" rows="4" value={translatedAdvice} readOnly />
                </div>
            </div>
        </div>
    );
}

export default AdviceComponent;
