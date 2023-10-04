// E:\programming\Project\byo_eng\client\src\component\AdviceComponent.js

import React, { useState } from 'react';

function AdviceComponent() {
    const [userInput, setUserInput] = useState('');
    const [advice, setAdvice] = useState('');
    const [translatedAdvice, setTranslatedAdvice] = useState('');
    const [imageSrc, setImageSrc] = useState('');  // 新しいstate

    const imageList = [  // 画像のリストを示す例
    '1.png
    '2.png
    3.png
    4.png
    5.png
    6.png
    7.png
    8.png
    9.png
    // 他の画像...
    ];

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
            <div className="card mt-4 mb-4">
                <div className="card-header bg-info text-white">英文入力</div>
                <div className="card-body">
                    <textarea className="form-control mb-3" style={{ width: '100%', backgroundColor: '#f5f5f5' }} rows="4" value={userInput} onChange={handleInputChange} /><br></br>
                    <button className="btn btn-primary mb-3" onClick={handleSubmit}>アドバイス</button>
                </div>
            </div>
            <div className="card mt-4 mb-4">
                <div className="card-header bg-info text-white">OpenAI アドバイス(日本語)</div>
                <div className="card-body">
                    <textarea className="form-control" style={{ width: '100%', backgroundColor: '#f5f5f5' }} rows="4" value={translatedAdvice} readOnly />
                </div>
            </div>
            <div className="card mt-4 mb-4">
                <div className="card-header bg-info text-white">OpenAI アドバイス(英語)</div>
                <div className="card-body">
                    <textarea className="form-control" style={{ width: '100%', backgroundColor: '#f5f5f5' }} rows="4" value={advice} readOnly />
                </div>
            </div>
        </div>
    );
}

export default AdviceComponent;
