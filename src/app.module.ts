import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { FoodModule } from './food/food.module';
import { Mineral } from './food/vitamin.model';
import { Vitamin } from './food/mineral.model';
import { Food } from './food/food.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Mineral, Vitamin, Food],
      autoLoadModels: true,
    }),
    FoodModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
