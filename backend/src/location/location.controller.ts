// import { Controller, Post, Get, Body } from '@nestjs/common';
// import { LocationService } from './location.service';
// import { Location } from './locationModel';
//
// @Controller('location')
// export class LocationController {
//     constructor(private readonly locationService: LocationService) {}
//
//     @Post()
//     save(@Body() location: Location) {
//         return this.locationService.saveLocation(location);
//     }
//
//     @Get()
//     get() {
//         return this.locationService.getLocation();
//     }
// }


// src/location/location.controller.ts
import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { LocationService } from './location.service';

@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    @Get()
    getLocation() {
        return this.locationService.getLocation();
    }

    @Post()
    updateLocation(
        @Body('latitude') latitude: number,
        @Body('longitude') longitude: number,
    ) {
        if (typeof latitude !== 'number' || typeof longitude !== 'number') {
            throw new BadRequestException('Invalid coordinates');
        }
        this.locationService.setLocation(latitude, longitude);
        return { message: 'Location updated', latitude, longitude };
    }
}
