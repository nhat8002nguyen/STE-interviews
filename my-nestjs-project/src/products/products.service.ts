import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepo: Repository<Product>,
    private readonly httpService: HttpService,
  ) {}

  async fetchAndSaveProducts(): Promise<Product[]> {
    const resp = await firstValueFrom(
      this.httpService.get('https://api.sampleapis.com/beers/ale'),
    );
    const products: Product[] = resp.data;

    for (const p of products) {
      const record = this.productsRepo.create(p);
      await this.productsRepo.save(record);
    }

    return products;
  }

  async findAll(page: number, limit: number): Promise<Product[]> {
    const [result, total] = await this.productsRepo.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return result;
  }
}
