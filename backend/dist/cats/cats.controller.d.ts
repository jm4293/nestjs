import { CatsService } from './cats.service';
import { Cat } from './entity/cats.entity';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    findAll(): Promise<Cat[]>;
    findOne(id: number): Promise<Cat>;
    create(cat: Cat): Promise<void>;
    remove(id: number): void;
    update(id: number, cat: Cat): string;
}
