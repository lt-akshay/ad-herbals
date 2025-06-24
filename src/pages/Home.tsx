import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import CategoriesSection from '../components/sections/Categories';
import { products, categories } from '../data/products';

const Home: React.FC = () => {
  // Filter featured products for the homepage
  const featuredProducts = products.filter(product => product.featured);

  return (
    <div>
      <Hero />
      <FeaturedProducts 
        products={featuredProducts} 
        title="Our Bestsellers" 
      />
      <CategoriesSection categories={categories} />
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Our Promise to You</h2>
            <p className="text-lg mb-8">
              At AD Herbals, we believe in creating products that are kind to your skin and to the planet.
              All our products are cruelty-free, made with natural ingredients, and packaged in
              eco-friendly materials.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-green-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Natural</h3>
                <p>Our products are made with natural ingredients sourced sustainably.</p>
              </div>
              <div className="bg-green-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Cruelty-Free</h3>
                <p>We never test on animals and ensure our suppliers don't either.</p>
              </div>
              <div className="bg-green-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Eco-Friendly</h3>
                <p>Our packaging is recyclable, biodegradable, or made from recycled materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;