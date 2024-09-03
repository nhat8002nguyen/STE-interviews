import { Controller, Get, Query } from '@nestjs/common';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('fetchAndSave')
  async fetchAndSaveProducts(): Promise<Product[]> {
    return await this.productsService.fetchAndSaveProducts();
  }

  @Get()
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Product[]> {
    return this.productsService.findAll(page, limit);
  }
}
