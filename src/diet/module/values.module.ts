import { Module } from '@nestjs/common'
import { ActivityFactor } from '../components/tbm/activity-factor-calculator-component'
import { ConsumptionForAged18to30 } from '../components/tbm/calories-consumption-18-30-component'
import { ConsumptionForAged31to60 } from '../components/tbm/calories-consumption-31-60-component'
import { ConsumptionForAged60Plus } from '../components/tbm/calories-consumption-60plus-component'
import { TbmCalculator } from '../components/tbm/tbm-calculator-component'
import { MacroController } from '../controller/macro.controller'
import { ValuesController } from '../controller/values.controller'
import { MacroService } from '../services/macro.service'
import { ValuesService } from '../services/values.service'

@Module({
   controllers: [ValuesController, MacroController],
   providers: [
      ValuesService,
      ConsumptionForAged18to30,
      ConsumptionForAged31to60,
      ConsumptionForAged60Plus,
      ActivityFactor,
      TbmCalculator,
      MacroService,
   ],
   exports: [
      ValuesService,
      ConsumptionForAged18to30,
      ConsumptionForAged31to60,
      ConsumptionForAged60Plus,
      ActivityFactor,
      TbmCalculator,
      MacroService,
   ],
})
export class ValuesModule {}
