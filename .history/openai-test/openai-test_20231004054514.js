// E:\programming\Project\byo_eng\openai-test\t1.js

const OpenAIApi = require('openai');

const openai = new OpenAIApi({ key: 'YOUR_OPENAI_API_KEY' });

const talk = async () => {

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "user",
        content: "こんにちは"}],
    });
    return completion.data.choices[0].message
}

talk().then(console.log)