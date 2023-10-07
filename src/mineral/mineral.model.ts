import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Food } from '../food/food.model';

@Table({ tableName: 'mineral', createdAt: false, updatedAt: false })
export class Mineral extends Model<Mineral> {
  @ApiProperty({ example: '1', description: 'Id do registro do banco.' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Ferro', description: 'Nome do mineral...' })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({
    example: '200',
    description: 'quantidade do mineral na medida padrão...',
  })
  @Column({ type: DataType.DECIMAL })
  quantity: number;

  @ApiProperty({
    example: '1',
    description: 'Id do registro de referencia da comida.',
  })
  @Column({ type: DataType.INTEGER })
  foodId: Food;
}
