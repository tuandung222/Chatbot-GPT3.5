import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.OPEN_API_KEY,
  });
const openai = new OpenAIApi(configuration);
@Injectable()
export class MessageService {
    async create(createMessageDto: CreateMessageDto) {
        const { text, activeChatId } = createMessageDto;
        try {
            const response = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a funny child assistant with high knowledge." },
                    { role: "user", content: text },
                ],
            });

            await axios.post(
                `https://api.chatengine.io/chats/${activeChatId}/messages/`,
                { text: response.data.choices[0].message.content },
                {
                    headers: {
                        "Project-ID": process.env.PROJECT_ID,
                        "User-Name": 'aibot_1',
                        "User-Secret": '123456',
                    },
                }
            );
            return response.data.choices[0].message.content;
        } catch (error) {
            return { error: "There was an error with the message."}
        }
    }

    findAll() {
        return `This action returns all message`;
    }

    findOne(id: number) {
        return `This action returns a #${id} message`;
    }

    update(id: number, updateMessageDto: UpdateMessageDto) {
        return `This action updates a #${id} message`;
    }

    remove(id: number) {
        return `This action removes a #${id} message`;
    }
}
