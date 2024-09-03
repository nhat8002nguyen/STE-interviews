import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { Product } from './products.entity';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  providers: [ProductsService, ProductsResolver],
  controllers: [ProductsController],
  imports: [TypeOrmModule.forFeature([Product]), HttpModule],
})
export class ProductsModule {}
