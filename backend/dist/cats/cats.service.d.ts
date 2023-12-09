import { Repository } from 'typeorm';
import { Cat } from './entity/cats.entity';
export declare class CatsService {
    private catsRepository;
    constructor(catsRepository: Repository<Cat>);
    findAll(): Promise<Cat[]>;
    findOne(id: number): Promise<Cat>;
    create(cat: Cat): Promise<void>;
    remove(id: number): Promise<void>;
    update(id: number, cat: Cat): Promise<Cat>;
}
