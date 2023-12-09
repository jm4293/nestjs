import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './entity/cats.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  exports: [TypeOrmModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
