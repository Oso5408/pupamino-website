'use client';

import Image from 'next/image';
import { images } from '@/lib/constants/images';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col items-center text-center"
  >
    <div className="w-[77px] h-[77px] mb-8 flex items-center justify-center">
      <Image src={icon} alt={title} width={77} height={77} className="w-full h-auto" />
    </div>

    <h3 className="font-lexend font-bold text-[#883d13] text-[24px] leading-[30px] mb-4 whitespace-pre-line">
      {title}
    </h3>

    <p className="font-dm-sans text-[#883d13] text-[16px] leading-[20px] max-w-[277px] whitespace-pre-line">
      {description}
    </p>
  </motion.div>
);

const PromiseSection = () => {
  const features = [
    {
      icon: images.layer3,
      title: "Natural\nIngredients",
      description: "Gentle and effective clean with\ninnovative plant-based\ningredients.",
    },
    {
      icon: images.layer2,
      title: "Kind to Skin",
      description: "Free from harsh sulfates,\ncocamidopropyl betaine, drying\nalcohols, parabens, and dyes.",
    },
    {
      icon: images.layer4,
      title: "Thoughtful\nFormulations",
      description: "Formulated specifically for dogs'\nskin pH and coat needs.\nIntentionally designed with a\nquick rinse formula for\ncalmer baths.",
    },
    {
      icon: images.layer5,
      title: "Superior\nPerformance",
      description: "Enriched with carefully selected\nnatural actives that are backed\nby science for a silkier, healthier\ncoat after every bath.",
    },
  ];

  return (
    <section id="promise" className="relative bg-[#fcebe3] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-lexend font-bold text-[#883d13] text-[32px] md:text-[40px] leading-[63.149px] text-center mb-20"
        >
          The Pupamino Promise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
