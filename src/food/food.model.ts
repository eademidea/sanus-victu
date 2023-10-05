/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  HasMany,
  Model,
  Table
} from 'sequelize-typescript';
import { Vitamin } from './mineral.model';
import { Mineral } from './vitamin.model';

@Table({ tableName: 'food' })
export class Food extends Model<Food> {
  @ApiProperty({ example: '1', description: 'Id do registro do banco.' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Arroz', description: 'Nome do alimento...' })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({ example: '115', description: 'Calorias do alimento' })
  @Column({ type: DataType.DECIMAL })
  calories: number;

  @ApiProperty({ example: '100', description: 'Quantidade em grama kilo' })
  @Column({ type: DataType.DECIMAL })
  quantityInGrams: number;

  @ApiProperty({ example: '100', description: 'Quantidade de gordura' })
  @Column({ type: DataType.DECIMAL })
  fat: number;

  @ApiProperty({ example: '100', description: 'Quantidade de proteína' })
  @Column({ type: DataType.DECIMAL })
  protein: number;

  @ApiProperty({ example: '100', description: 'Quantidade de carboidrato' })
  @Column({ type: DataType.DECIMAL })
  carbohydrates: number;

  @ApiProperty({
    example: 'BIG',
    description: 'Se é refeição grande ou pequena',
  })
  @Column({ type: DataType.STRING })
  mealType: string;

  @ApiProperty({
    example: '[{id: 1, name: Cálcio, quantity: 1, foodId: 1 }]',
    description: 'Quantidade do mineral na medida principal.',
  })
  @HasMany(() => Mineral, {
    foreignKey: {
      name: 'id',
      allowNull: false,
    },
    onDelete: 'CASCADE',
    hooks: true,
  })
  mineral: Array<Mineral>;

  @ApiProperty({
    example: '[{id: 1, name: Vitamina D, quantity: 200, foodId: 1 }]',
    description: 'Quantidade vitamina na medida principal.',
  })
  @HasMany(() => Vitamin, {
    foreignKey: {
      name: 'id',
      allowNull: false,
    },
    onDelete: 'CASCADE',
    hooks: true,
  })
  vitamin: Array<Vitamin>;
}
