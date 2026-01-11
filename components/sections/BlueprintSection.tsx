'use client';

import Image from 'next/image';
import { images } from '@/lib/constants/images';
import { motion } from 'framer-motion';

const BlueprintSection = () => {
  return (
    <section id="about" className="relative bg-[#607c49] py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Science Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] md:h-[612px]"
          >
            <div className="absolute left-0 top-0 w-full h-full">
              <Image
                src={images.scienceImage}
                alt="Scientific research and innovation"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-12"
          >
            <h2 className="font-lexend font-bold text-[#fcebe3] text-[32px] md:text-[40px] leading-[63.149px] mb-6">
              The Pupamino Blueprint
            </h2>

            <p className="font-lexend font-semibold text-[#fcebe3] text-[20px] md:text-[24px] leading-[30px] mb-8">
              Partners you can trust
            </p>

            <div className="font-dm-sans text-[#fcebe3] text-[16px] leading-[22px] space-y-6">
              <p>
                At Pupamino, we believe in combining nature and scientific research to create safe, innovative, and effective grooming solutions to nurture pets' skin and coat health.
              </p>

              <p>
                Our goal is to set a new standard for pet grooming products and become trusted partners of modern pet owners who prioritize quality, consistency, and the well-being of their pets.
              </p>

              <p>
                This brand was built by people who read the fine print and, after endless searching, set out to create functional products that finally felt right.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Vector Elements */}
      <div className="absolute left-[75%] top-1/2 -translate-y-1/2 w-[14px] h-[25px] hidden lg:block pointer-events-none">
        <Image src={images.vector} alt="" fill className="object-contain" />
      </div>
    </section>
  );
};

export default BlueprintSection;
