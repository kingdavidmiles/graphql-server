
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:8080', // Allow requests from this origin
    methods: ['GET', 'POST',"PUT","PATCH","POST","DELETE"], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  });

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`)

// }
}
bootstrap();
