import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { Connection } from 'typeorm';
import { Mineral } from './mineral.model';

@Injectable()
export class MineralService {
  constructor(
    @InjectModel(Mineral) private mineralRepository: typeof Mineral,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async recordMineral(mineral: Mineral) {
    return this.connection.query(
      `insert into mineral  (name, quantity, "foodId") values ('${mineral.name}', '${mineral.quantity}', '${mineral.foodId.id}')  `,
    );
  }
}
