import { Query, Resolver } from '@nestjs/graphql';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private productService: ProductsService) {}

  @Query((returns) => [Product])
  async products(): Promise<Product[]> {
    return await this.productService.findAll(1, 20);
  }
}
