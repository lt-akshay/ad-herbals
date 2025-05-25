import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-700 pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
          <p className="text-green-100 mt-2 max-w-2xl">
            Learn more about AD Herbals and our mission to bring 100% Ayurvedic products with care and commitment.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 whitespace-pre-line">
            We deal in 100% Ayurvedic Medicines & Cosmetic Products.{"\n"}
            AD Herbals is grateful to you for trusting its services and ordering the product.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Ambition</h2>
          <p className="text-gray-600">
            We have the ambition to provide you with one of the best services ever. Our commitment is not just to sell, but to build trust and deliver excellence in every product we offer.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose AD Herbals?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>100% Ayurvedic & Natural Ingredients</li>
            <li>Customer-focused service experience</li>
            <li>Trusted by hundreds of happy customers</li>
            <li>Consistent quality and safe packaging</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
