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
