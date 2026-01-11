'use client';

import Image from 'next/image';
import { images } from '@/lib/constants/images';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface TestimonialCardProps {
  name: string;
  timeAgo: string;
  rating: number;
  review: string;
  avatar: string;
  delay: number;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-2 mb-4">
    {[...Array(rating)].map((_, i) => (
      <Image
        key={i}
        src={images.layer6}
        alt="Star"
        width={25}
        height={25}
      />
    ))}
  </div>
);

const TestimonialCard = ({ name, timeAgo, rating, review, avatar, delay }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="relative"
  >
    {/* Rating Badge */}
    <div className="absolute -top-8 left-6 bg-white rounded-[14px] h-[63px] px-6 flex items-center shadow-sm">
      <StarRating rating={rating} />
    </div>

    {/* Card */}
    <div className="bg-white rounded-[14px] shadow-[2px_3px_6px_0px_rgba(0,0,0,0.15)] p-8 pt-16">
      <p className="font-dm-sans font-medium text-[#424242] text-[22px] leading-[28px] mb-8">
        {review}
      </p>

      <div className="border-t border-[#424242]/20 pt-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-[66px] h-[66px] rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-dm-sans font-bold text-[#424242] text-[24px] leading-[20px] mb-2">
              {name}
            </p>
            <p className="font-dm-sans text-[#424242] text-[16px] leading-[20px]">
              {timeAgo}
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maya Lin",
      timeAgo: "1 week ago",
      rating: 4,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      avatar: images.testimonial1,
    },
    {
      name: "Steven Wong",
      timeAgo: "1 week ago",
      rating: 5,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      avatar: images.testimonial3,
    },
    {
      name: "Chelsea",
      timeAgo: "3 weeks ago",
      rating: 4,
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      avatar: images.testimonial2,
    },
  ];

  return (
    <section className="relative bg-[#dfdfdf] py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="font-lexend font-bold text-[#bdb9b9] text-[128px] leading-[44px] mb-4">
              "
            </div>
            <h2 className="font-lexend font-bold text-[#424242] text-[32px] md:text-[40px] leading-[44px] mb-8">
              Stories from<br />our Pack
            </h2>
            <p className="font-lexend font-semibold text-[#424242] text-[20px] md:text-[24px] leading-[30px]">
              Here's what others<br />are saying.
            </p>
          </motion.div>

          {/* Empty space for layout balance on desktop */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              timeAgo={testimonial.timeAgo}
              rating={testimonial.rating}
              review={testimonial.review}
              avatar={testimonial.avatar}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-4 mt-16"
        >
          <button className="w-[54px] h-[54px] flex items-center justify-center hover:scale-110 transition-transform">
            <Image src={images.group8} alt="Previous" width={54} height={54} />
          </button>
          <button className="w-[54px] h-[54px] flex items-center justify-center hover:scale-110 transition-transform">
            <Image src={images.group8} alt="Next" width={54} height={54} className="rotate-180" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
