import { Module } from '@nestjs/common';
import { ValuesController } from '../controller/values.controller';
import { ValuesService } from '../services/values.service';

@Module({
  controllers: [ValuesController],
  providers: [ValuesService],
  exports: [ValuesService],
})
export class ValuesModule {}
