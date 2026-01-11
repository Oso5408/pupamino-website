'use client';

import Image from 'next/image';
import { images } from '@/lib/constants/images';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[750px] pt-[100px] md:pt-[143px] overflow-hidden">
      {/* Full Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="Happy dog getting bath"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Brown Gradient Overlay - Left to Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b6142]/95 via-[#8b6142]/70 to-transparent md:from-[#8b6142]/90 md:via-[#8b6142]/60 md:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 md:px-[100px] pt-[80px] md:pt-[120px] pb-[100px] md:pb-[180px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[600px]"
        >
          {/* Main Heading - Node 6:62 */}
          <h1
            className="font-bold text-white text-[40px] md:text-[56px] leading-[48px] md:leading-[63.149px] mb-6"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-node-id="6:62"
          >
            The new standard for pet care.
          </h1>

          {/* Subheading - Node 6:63 */}
          <p
            className="font-medium text-white text-[22px] md:text-[28px] leading-[28px] md:leading-[35.083px] mb-10 md:mb-12"
            style={{ fontFamily: 'Lexend, sans-serif' }}
            data-node-id="6:63"
          >
            Because our pets deserve elevated care, with no compromises.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              variant="primary"
              onClick={() => {
                document.getElementById('promise')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              LEARN MORE
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements - Top right corners */}
      <div className="absolute right-[79px] top-[56px] hidden lg:block pointer-events-none z-10">
        <Image src={images.group} alt="" width={31} height={25} />
      </div>
      <div className="absolute right-[20px] top-[68px] hidden lg:block pointer-events-none z-10">
        <Image src={images.group1} alt="" width={35} height={24} />
      </div>
    </section>
  );
};

export default HeroSection;
