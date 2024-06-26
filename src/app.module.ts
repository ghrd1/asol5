import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CourseService } from './course.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CourseService, PrismaService, UserService],
})
export class AppModule {}
