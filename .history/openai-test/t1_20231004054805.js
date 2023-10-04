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

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{
    role: 'system',
    content: "あなたは英語学校の先生で、ユーザーはあなたの生徒です。日本語で話しかけられた場合、英語で返答しましょう。"
  }, {
    role: "user",
    content: "こんにちは"
  }],
});
return completion.data.choices[0].message

const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{
    role: 'system',
    content: "あなたは英語学校の先生で、ユーザーはあなたの生徒です。日本語で話しかけられた場合、英語で返答しましょう。"
  }, {
    role: "user",
    content: "こんにちは"
  }, {
    role: "assistant",
    content: "Hello! It's a nice day."
  }, {
    role: 'user',
    content: 'あれ、今日は雨ですよ？'
  }],
});
return completion.data.choices[0].message