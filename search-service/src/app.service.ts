import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async search(query: string, filters: { category?: string; priceRange?: [number, number] }): Promise<Product[]> {
    const queryBuilder = this.productRepository.createQueryBuilder('product');

    if (query) {
      queryBuilder.where('product.name LIKE :query OR product.description LIKE :query', { query: `%${query}%` });
    }

    if (filters.category) {
      queryBuilder.andWhere('product.category = :category', { category: filters.category });
    }

    if (filters.priceRange) {
      queryBuilder.andWhere('product.price BETWEEN :minPrice AND :maxPrice', {
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
      });
    }

    const products = await queryBuilder.getMany();
    return products;
  }
}