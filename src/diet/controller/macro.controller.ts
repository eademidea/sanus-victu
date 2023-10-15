import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { MacroService } from '../services/macro.service'

@ApiTags('Macronutrientes')
@Controller('macro')
export class MacroController {
   constructor(private service: MacroService) {}

   @Get('/calculate/:calories')
   getMacros(
      @Param('calories')
      calories: number
   ) {
      return this.service.getMacros(calories)
   }
}
