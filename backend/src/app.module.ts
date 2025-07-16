// import { Module } from '@nestjs/common';
// import { LocationController } from './location/location.controller';
// import { LocationService } from './location/location.service';
//
// @Module({
//     controllers: [LocationController],
//     providers: [LocationService],
// })
// export class AppModule {}


// src/app.module.ts
import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';

@Module({
    imports: [LocationModule],
})
export class AppModule {}
