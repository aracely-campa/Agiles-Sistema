import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../entity/product.entity';
import { Coupon } from '../../entity/coupon.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(Coupon)
    private couponRepository: Repository<Coupon>,
  ) {}

  async applyCoupon(code: string, price: number): Promise<number> {
    const coupon = await this.couponRepository.findOne({ where: { code } });
    if (!coupon) {
      throw new Error('Código promocional no válido');
    }

    if (coupon.expired) {
      throw new Error('Código promocional expirado');
    }

    const discount = price * (coupon.discount / 100);
    return price - discount;
  }
}
