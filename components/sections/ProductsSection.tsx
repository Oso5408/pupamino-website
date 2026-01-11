'use client';

import Image from 'next/image';
import { images } from '@/lib/constants/images';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  delay: number;
}

const ProductCard = ({ image, title, description, price, delay }: ProductCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center md:items-start"
  >
    <div className="relative w-[244px] h-[334px] mb-8">
      <Image
        src={image}
        alt={title}
        fill
        className="object-contain"
      />
    </div>

    <h3 className="font-lexend font-bold text-[#883d13] text-[24px] leading-[63.149px] mb-2">
      {title}
    </h3>

    <p className="font-dm-sans text-[#883d13] text-[16px] leading-[20px] mb-6 max-w-[277px]">
      {description}
    </p>

    <p className="font-dm-sans font-bold text-[#883d13] text-[16px] leading-[20px]">
      {price}
    </p>
  </motion.div>
);

const ProductsSection = () => {
  const products = [
    {
      image: images.bottle1,
      title: "Silky Keratin",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "HKD$200",
    },
    {
      image: images.bottle2,
      title: "Soothing Oatmeal",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: "HKD$200",
    },
  ];

  return (
    <section id="products" className="relative bg-[#ffd6bb] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-lexend font-bold text-[#883d13] text-[32px] md:text-[40px] leading-[63.149px] mb-4">
            Our Products
          </h2>
          <p className="font-lexend font-semibold text-[#883d13] text-[20px] md:text-[24px] leading-[30px]">
            Made by pet lovers, for devoted dog owners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 max-w-5xl mx-auto justify-items-center md:justify-items-start mb-16">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              delay={index * 0.2}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <Button variant="secondary">SHOP NOW</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
