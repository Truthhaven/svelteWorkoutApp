import { json } from '@sveltejs/kit';
import axios from 'axios';
import { VITE_OPENAPI_KEY} from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
    return new Response();
};

/** @type {import('./$types').RequestHandler} */
export async function POST({locals, request}) {
    let data = await request.json();
    let messages = data.data.messages;
    let responseObject = await getChatbotResponse(messages);
    const response = json(responseObject);
    response.headers.append('Access-Control-Allow-Origin', 'localhost');
    return response;
};





/**
 * @param {any} messages
 */
 async function getChatbotResponse(messages) {
    let API_KEY=VITE_OPENAPI_KEY;
console.log(API_KEY);
try{ const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-3.5-turbo',
      messages: [messages],
      max_tokens: 200
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    }
  );
  return response.data.choices[0].message.content;
} catch(e){

}
 

  
}
