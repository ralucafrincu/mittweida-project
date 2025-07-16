// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
//
// async function bootstrap() {
//     const app = await NestFactory.create(AppModule);
//     app.useGlobalPipes(new ValidationPipe());
//     app.enableCors();
//     await app.listen(3000);
// }
// bootstrap();


// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(); // allow frontend requests
    await app.listen(3001);
}
bootstrap();
