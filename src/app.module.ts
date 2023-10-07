import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Food } from './food/food.model';
import { FoodModule } from './food/food.module';
import { MineralModule } from './mineral/mineral.module';
import { VitaminModule } from './vitamin/vitamin.module';
import { Mineral } from './mineral/mineral.model';
import { Vitamin } from './vitamin/vitamin.model';

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
    MineralModule,
    VitaminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
