// E:\programming\Project\byo_eng\openai-test\openaiTest.js

const axios = require('axios');
require('dotenv').config();

const OPENAI_API_URL = 'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions';
const API_KEY = 'process.env.OPENAI_API_KEY';

async function getAdvice(text) {
    const response = await axios.post(OPENAI_API_URL, {
        prompt: text,
        max_tokens: 150
    }, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        }
    });

    return response.data.choices[0].text.trim();
}

(async () => {
    const text = "This is a pen.";
    const advice = await getAdvice(text);
    console.log(`Advice for the text "${text}": ${advice}`);
})();
