// import { Injectable } from '@nestjs/common';
// import { Location } from './locationModel';
//
// @Injectable()
// export class LocationService {
//     private location: Location | null = null;
//
//     saveLocation(location: Location) {
//         this.location = location;
//         return { message: 'Location saved' };
//     }
//
//     getLocation() {
//         return this.location;
//     }
// }


// src/location/location.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationService {
    private location = {
        latitude: 50.9856,
        longitude: 12.9810,
    };

    getLocation() {
        return this.location;
    }

    setLocation(latitude: number, longitude: number) {
        this.location = { latitude, longitude };
    }
}
