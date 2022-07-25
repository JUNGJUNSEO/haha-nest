import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './moives.service';

@Module({
    controllers: [MoviesController],
    providers: [ MoviesService ],
})
export class MoviesModule {}
