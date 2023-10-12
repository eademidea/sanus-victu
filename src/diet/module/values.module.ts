import { Module } from '@nestjs/common'
import { ValuesController } from '../controller/values.controller'
import { ValuesService } from '../services/values.service'
import { ConsumptionForAged18to30 } from '../components/tbm/calories-consumption-18-30-component'
import { ConsumptionForAged31to60 } from '../components/tbm/calories-consumption-31-60-component'
import { ConsumptionForAged60Plus } from '../components/tbm/calories-consumption-60plus-component'
import { ActivityFactor } from '../components/tbm/activity-factor-calculator-component'
import { TbmCalculator } from '../components/tbm/tbm-calculator-component'

@Module({
   controllers: [ValuesController],
   providers: [
      ValuesService,
      ConsumptionForAged18to30,
      ConsumptionForAged31to60,
      ConsumptionForAged60Plus,
      ActivityFactor,
      TbmCalculator,
   ],
   exports: [
      ValuesService,
      ConsumptionForAged18to30,
      ConsumptionForAged31to60,
      ConsumptionForAged60Plus,
      ActivityFactor,
      TbmCalculator,
   ],
})
export class ValuesModule {}
