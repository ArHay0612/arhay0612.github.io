import {post} from 'axios';
const post = require('axios');
function live2Dmsg() {
    const BearerToken = "sk-7e0d3f543fb4482e91edf904974b9e1e";
    const body =
    {
        "messages": [
            {
                "content": "你好",
                "role": "user"
            }
        ],
        "max_tokens": 100,
        "model": "deepseek-chat"
    };
    try {
        const response = post('https://api.deepseek.com/chat/completions', body, {
            headers: {
                Authorization: `Bearer ${BearerToken}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
}
