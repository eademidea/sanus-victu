import { Injectable } from '@nestjs/common'
import { InjectConnection, InjectModel } from '@nestjs/sequelize'
import { Connection } from 'typeorm'
import { Vitamin } from '../models/vitamin.model'

@Injectable()
export class VitaminService {
   constructor(
      @InjectModel(Vitamin) private vitaminRepository: typeof Vitamin,
      @InjectConnection() private readonly connection: Connection
   ) {}

   async recordVitamin(vitamin: Vitamin) {
      return this.connection.query(
         `insert into vitamin  (name, quantity, "foodId") values ('${vitamin.name}', '${vitamin.quantity}', '${vitamin.foodId.id}')  `
      )
   }
}
