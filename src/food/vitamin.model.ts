import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Food } from './food.model';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'mineral' })
export class Mineral extends Model<Mineral> {
  @ApiProperty({ example: '1', description: 'Id do registro do banco.' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Vitamina D', description: 'Nome da vitamina...' })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({
    example: '200',
    description: 'quantidade da vitamina na medida padrão...',
  })
  @Column({ type: DataType.DECIMAL })
  quantity: number;

  @ApiProperty({
    example: '1',
    description: 'Id do registro de referencia da comida.',
  })
  @ForeignKey(() => Food)
  @Column({ type: DataType.INTEGER })
  foodId: Food;
}
