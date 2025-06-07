import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '../../types/product';

interface CategoriesSectionProps {
  categories: Category[];
}

const CategoriesSection: React.FC<CategoriesSectionProps> = ({ categories }) => {
  const navigate = useNavigate();

  const filtered = categories.filter(cat => cat.name.toLowerCase() !== 'sun care');
  const healthCare = filtered.find(cat => cat.name.toLowerCase() === 'health care');
  const rest = filtered.filter(cat => cat.name.toLowerCase() !== 'health care');
  const updatedCategories = healthCare ? [healthCare, ...rest] : rest;

  const handleCategoryClick = (categoryId: string, categoryName: string) => {
    const isHealthCare = categoryName.toLowerCase() === 'health care';
    const route = isHealthCare ? '/medicine' : '/cosmetics';
    navigate(`${route}?category=${categoryId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Discover Our Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {updatedCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id, category.name)}
              className="group block cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square bg-gray-200">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                  <h3 className="text-xl font-semibold text-white p-6">
                    {category.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
