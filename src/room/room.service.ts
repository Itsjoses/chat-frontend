import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomService {
    constructor(private prisma:PrismaService){}

    getAllRoom(){
        try {
            const rooms= this.prisma.rooms.findMany()
            return rooms
        } catch (error) {
            return new HttpException('Failed to fetch data!',HttpStatus.BAD_REQUEST)
        }
    }
}
