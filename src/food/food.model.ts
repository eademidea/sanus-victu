/* eslint-disable prettier/prettier */
import { Column, DataType, ForeignKey, Model } from "sequelize-typescript";

export class Food extends Model<Food> {
    
    @Column(
        {
            type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true

        }
    )
    id: number;

    @Column({type: DataType.STRING })
    name: string;

    @Column({type: DataType.STRING })
    scientificName: string;

    @Column({type: DataType.DECIMAL })
    calories: number;

    @Column({type: DataType.DECIMAL })
    fat: number;

    @Column({type: DataType.DECIMAL })
    protein: number;

    @Column({type: DataType.DECIMAL })
    carbohydrates: number;

    @ForeignKey(() => Mineral)
    @Column({ type: DataType.INTEGER })
    minerals: object; //TODO: trocar o tipo

    @ForeignKey(() => Vitamin)
    @Column({ type: DataType.INTEGER })
    vitamins: object; //TODO: trocar o tipo
  

}