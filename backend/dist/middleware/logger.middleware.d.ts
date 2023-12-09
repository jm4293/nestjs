import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
export declare class LoggerMiddleware implements NestMiddleware {
    use(req: any, res: any, next: NextFunction): void;
}
