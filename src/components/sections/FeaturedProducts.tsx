import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../common.css';

import ProductCard from '../ui/ProductCard';
import { Product } from '../../types/product';

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  viewAllLink?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products = [],
  title = 'Featured Products',
  viewAllLink = '/products',
}) => {
  if (!products.length) return null;

  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <a
            href={viewAllLink}
            className="text-green-700 hover:text-green-800 font-medium flex items-center"
          >
            View All
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="flex justify-center">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Bullets */}
          <div className="custom-pagination mt-6 flex justify-center space-x-2"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
