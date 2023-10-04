# E:\programming\Project\byo_eng\openai-test\t1.py

import openai

# OpenAIのAPIキーを設定
openai.api_key = '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'

def talk_simple():
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{
            "role": "user",
            "content": "こんにちは"
        }]
    )
    return response.choices[0].message['content']

print(talk_simple())

def talk_with_role():
    response = openai.Completion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": 'system', "content": "あなたは英語学校の先生で、ユーザーはあなたの生徒です。日本語で話しかけられた場合、英語で返答しましょう。"},
            {"role": "user", "content": "こんにちは"}
        ]
    )
    return response.choices[0].message['content']

print(talk_with_role())

def talk_with_conversation():
    response = openai.Completion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": 'system', "content": "あなたは英語学校の先生で、ユーザーはあなたの生徒です。日本語で話しかけられた場合、英語で返答しましょう。"},
            {"role": "user", "content": "こんにちは"},
            {"role": "assistant", "content": "Hello! It's a nice day."},
            {"role": 'user', "content": 'あれ、今日は雨ですよ？'}
        ]
    )
    return response.choices[0].message['content']

print(talk_with_conversation())
