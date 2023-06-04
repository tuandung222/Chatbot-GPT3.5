import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class LoginService {
    async create(createLoginDto: CreateLoginDto) {
        const { username, password } = createLoginDto;
        try {
            const chatEngineResponse = await axios.get(
                "https://api.chatengine.io/users/me",
                {
                    headers: {
                        "Project-ID": process.env.PROJECT_ID,
                        "User-Name": username,
                        "User-Secret": password,
                    },
                }
            );
            return chatEngineResponse.data;
        } catch (error) {
            console.error("error", error);
            return { error: error.message };
        }
    }

    findAll() {
        return `This action returns all login`;
    }

    findOne(id: number) {
        return `This action returns a #${id} login`;
    }

    update(id: number, updateLoginDto: UpdateLoginDto) {
        return `This action updates a #${id} login`;
    }

    remove(id: number) {
        return `This action removes a #${id} login`;
    }
}
