import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsModule } from './leads/leads.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'devuser',
      password: 'devpass',
      database: 'portfolio',
      autoLoadEntities: true,
      synchronize: true, // Úsalo SOLO en desarrollo
    }),
    LeadsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
