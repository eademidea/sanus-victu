import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ValuesModule } from './diet/module/values.module';
import { ValuesService } from './diet/services/values.service';
import { Mineral } from './food/mineral/models/mineral.model';
import { MineralModule } from './food/mineral/module/mineral.module';
import { Food } from './food/models/food.model';
import { FoodModule } from './food/module/food.module';
import { Vitamin } from './food/vitamin/vitamin.model';
import { VitaminModule } from './food/vitamin/vitamin.module';

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
    ValuesModule,
  ],
  controllers: [],
  providers: [ValuesService],
})
export class AppModule {}
