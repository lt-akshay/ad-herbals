import React from 'react';
import Carousel from '../ui/Carousel';
import cosmetic from '../../images/bannerSlider/cosmetic.png'
import medicines from '../../images/bannerSlider/medicines.png'

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
      title: '',
      description: '',
      ctaText: 'Explore',
      ctaLink: '/medicine',
    },
    // {
    //   image: 'https://images.pexels.com/photos/3621232/pexels-photo-3621232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   title: 'Natural Beauty, Naturally Sourced',
    //   description: 'Discover our range of natural cosmetics that nourish your skin and respect the environment.',
    //   ctaText: 'Shop Now',
    //   ctaLink: '/products',
    // },
    // {
    //   image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   title: 'Summer Essentials',
    //   description: 'Protect your skin with our range of natural sunscreens and after-sun care products.',
    //   ctaText: 'Explore',
    //   ctaLink: '/products?category=sun-care',
    // },
    // {
    //   image: 'https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //   title: 'Rejuvenate Your Skin',
    //   description: 'Discover our anti-aging collection, formulated with natural ingredients to restore your skin\'s youthful glow.',
    //   ctaText: 'Learn More',
    //   ctaLink: '/products?category=face-care',
    // },
  ];

  return <Carousel slides={slides} />;
};

export default Hero;