// E:\programming\Project\byo_eng\backend\controllers\adviceController.js

const axios = require('axios');
require('dotenv').config();

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.OPENAI_API_KEY;

exports.getAdvice = async (req, res) => {
    const userInput = req.body.text;
    const language = req.body.language; // ユーザーからの言語選択を取得

    // リクエストの中身をログに出力
    console.log("Received userInput:", userInput);

    const systemMessage = language === 'ja'
    ? "あなたは英会話の優秀なアシスタントです。この英文の英文法、英単語、その他について有益なアドバイスをして。"
    : "You are an excellent assistant for English conversation.Please reply in English. Give me useful advice on English grammar, English vocabulary, etc. for this English sentence.";

    const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
            {role: "system", content: systemMessage},
            {role: "user", content: userInput}
        ]
    };

    try {
        // OpenAI APIを使用してアドバイスを取得
        const response = await axios.post(OPENAI_API_URL, requestBody, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        // OpenAIからのレスポンスをログに出力
        console.log("OpenAI Response:", response.data);

        // APIからのレスポンスを使用してアドバイスを抽出
        const advice = response.data.choices[0].message.content.trim();

        res.json({
            advice: advice
        });

    } catch (error) {
        console.error("Error while fetching advice from OpenAI:", error);
        res.status(500).json({
            error: "Error while fetching advice from OpenAI."
        });
    }
};
