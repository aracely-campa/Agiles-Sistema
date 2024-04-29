import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('search')
  async search(@Query('query') query: string, @Query('category') category?: string, @Query('priceRange') priceRange?: [number, number]) {
    const filters: { category?: string; priceRange?: [number, number] } = {};
    if (category) filters.category = category;
    if (priceRange) filters.priceRange = priceRange;
    return this.appService.search(query, filters);
  }
}
