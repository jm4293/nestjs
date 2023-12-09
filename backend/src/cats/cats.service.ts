import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cat } from './entity/cats.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cat> {
    return this.catsRepository.findOne({ where: { id } });
  }

  async create(cat: Cat): Promise<void> {
    await this.catsRepository.save(cat);
  }

  async remove(id: number): Promise<void> {
    const existCat = await this.catsRepository.findOne({ where: { id } });

    if (!existCat) {
      throw new Error('Cat not found');
    } else {
      await this.catsRepository.delete(id);
    }
  }

  async update(id: number, cat: Cat) {
    const existCat = await this.catsRepository.findOne({ where: { id } });

    if (existCat) {
      // await getConnection()
      //   .createQueryBuilder()
      //   .update(Cat)
      //   .set({
      //     name: cat.name,
      //     age: cat.age,
      //     breed: cat.breed,
      //   })
      //   .where('id = :id', { id: id })
      //   .execute();

      console.log(existCat)
      console.log(cat)

      Object.assign(existCat, cat);
      return await this.catsRepository.save(existCat);
    }
  }
}
