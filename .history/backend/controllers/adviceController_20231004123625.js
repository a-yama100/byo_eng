// E:\programming\Project\byo_eng\backend\controllers\adviceController.js

const axios = require('axios');
require('dotenv').config();

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.OPENAI_API_KEY;

// 日本語への翻訳関数
function translateToJapanese(englishText) {
    // 翻訳テーブルを更に充実させることができます
    const translations = {
        "This is a pen.": "これはペンです。",
        // その他の翻訳を追加...
    };
    return translations[englishText] || "これは翻訳されていません。";
}

exports.getAdvice = async (req, res) => {
    const userInput = req.body.text;

    console.log("Received userInput:", userInput);

    const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            {role: "system", content: "You are an excellent assistant for English conversation. Please reply in English. Give me useful advice on English grammar, English vocabulary, etc. for this English sentence."},
            {role: "user", content: userInput}
        ]
    };

    try {
        const response = await axios.post(OPENAI_API_URL, requestBody, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log("OpenAI Response:", response.data);

        const advice = response.data.choices[0].message.content.trim();
        const translatedAdvice = translateToJapanese(advice);

        res.json({
            advice: advice,
            translatedAdvice: translatedAdvice
        });

    } catch (error) {
        console.error("Error while fetching advice from OpenAI:", error);
        res.status(500).json({
            error: "Error while fetching advice from OpenAI."
        });
    }
};