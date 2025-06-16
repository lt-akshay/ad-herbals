import React from 'react';
import Carousel from '../ui/Carousel';
import cosmetic from '../../images/bannerSlider/cosmetic.webp'
import medicines from '../../images/bannerSlider/medicines.webp'

const Hero: React.FC = () => {
  const slides = [
    {
      image: cosmetic,
      title: 'Natural Beauty, Naturally Sourced',
      description: 'Discover our range of natural cosmetics that nourish your skin and respect the environment.',
      ctaText: 'Explore',
      ctaLink: '/cosmetics',
    },
    {
      image: medicines,
      title: 'Healing You Naturally',
      description: 'Explore our trusted selection of medicines formulated to support your health and well-being with safe, effective ingredients.',
      ctaText: 'Explore',
      ctaLink: '/medicine',
    },
  ];

  return <Carousel slides={slides} />;
};

export default Hero;