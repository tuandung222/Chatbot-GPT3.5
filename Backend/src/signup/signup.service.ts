import { Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class SignupService {
    async create(createSignupDto: CreateSignupDto) {
        const { username, password } = createSignupDto;
        try {
            const chatEngineResponse = await axios.post(
                "https://api.chatengine.io/users/",
                {
                    username: username,
                    secret: password,
                },
                {
                    headers: { "Private-Key": process.env.PRIVATE_KEY },
                }
            );
            return chatEngineResponse.data;
        } catch (error) {
            console.error("error", error.message);
            return { error: error.message };
        }
    }

    findAll() {
        return `This action returns all signup`;
    }

    findOne(id: number) {
        return `This action returns a #${id} signup`;
    }

    update(id: number, updateSignupDto: UpdateSignupDto) {
        return `This action updates a #${id} signup`;
    }

    remove(id: number) {
        return `This action removes a #${id} signup`;
    }
}
