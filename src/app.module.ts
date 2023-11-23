import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GateawayModule } from './gateaway/gateaway.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { RoomModule } from './room/room.module';

@Module({
  imports: [GateawayModule, PrismaModule, RoomModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
