'use client';

import Image from 'next/image';
import { images } from '@/lib/constants/images';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  timeAgo: string;
  rating: number;
  review: string;
  avatar: string;
  delay: number;
  cardIndex: number;
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

const TestimonialCard = ({ name, timeAgo, rating, review, avatar, delay, cardIndex }: TestimonialCardProps) => {
  // Node IDs for each card:
  // Card 1 (Maya Lin): badge=15:148, card=15:125, review=15:128, stars=15:130/133/135/137, name=15:142, time=15:147, avatar=15:166
  // Card 2 (Steven Wong): badge=15:151, card=15:150, review=15:152, stars=15:156/158/160/162/16:4, name=15:153, time=15:154, avatar=16:22
  // Card 3 (Chelsea): badge=16:15, card=16:6, review=16:8, stars=16:16/18/16/18, name=16:9, time=16:10, avatar=16:22

  const nodeIds = [
    { badge: '15:148', card: '15:125', review: '15:128', name: '15:142', time: '15:147', avatar: '15:166', stars: ['15:130', '15:133', '15:135', '15:137'] },
    { badge: '15:151', card: '15:150', review: '15:152', name: '15:153', time: '15:154', avatar: '16:22', stars: ['15:156', '15:158', '15:160', '15:162', '16:4'] },
    { badge: '16:15', card: '16:6', review: '16:8', name: '16:9', time: '16:10', avatar: '16:22', stars: ['16:16', '16:18', '16:16', '16:18'] },
  ];

  const cardNodeIds = nodeIds[cardIndex] || nodeIds[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      {/* Rating Badge */}
      <div
        className="absolute -top-8 left-6 bg-white rounded-[14px] h-[63px] px-6 flex items-center shadow-sm"
        data-node-id={cardNodeIds.badge}
      >
        <div className="flex gap-2 mb-4">
          {[...Array(rating)].map((_, i) => (
            <div key={i} data-node-id={cardNodeIds.stars[i]}>
              <Image
                src={images.layer6}
                alt="Star"
                width={25}
                height={25}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Card */}
      <div
        className="bg-white rounded-[14px] shadow-[2px_3px_6px_0px_rgba(0,0,0,0.15)] p-8 pt-16"
        data-node-id={cardNodeIds.card}
      >
        <p
          className="font-medium text-[#424242] text-[22px] leading-[28px] mb-8"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
          data-node-id={cardNodeIds.review}
        >
          {review}
        </p>

        <div className="border-t border-[#424242]/20 pt-6">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="relative w-[66px] h-[66px] rounded-full overflow-hidden"
              data-node-id={cardNodeIds.avatar}
            >
              <Image
                src={avatar}
                alt={name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p
                className="font-bold text-[#424242] text-[24px] leading-[20px] mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                data-node-id={cardNodeIds.name}
              >
                {name}
              </p>
              <p
                className="text-[#424242] text-[16px] leading-[20px]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
                data-node-id={cardNodeIds.time}
              >
                {timeAgo}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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
    <section
      className="relative bg-[#dfdfdf] py-20 md:py-32"
      data-node-id="16:24"
    >
      <div className="container mx-auto px-4 md:px-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Heading with Arrows */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Large Quote Mark - Node 15:146 */}
            <div
              className="font-bold text-[#bdb9b9] text-[128px] leading-[44px] mb-4"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-node-id="15:146"
            >
              "
            </div>

            {/* Main Heading - Node 15:120 */}
            <h2
              className="font-bold text-[#424242] text-[32px] md:text-[40px] leading-[44px] mb-8"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-node-id="15:120"
            >
              Stories from<br />our Pack
            </h2>

            {/* Subheading - Node 15:121 */}
            <p
              className="font-semibold text-[#424242] text-[20px] md:text-[24px] leading-[30px]"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-node-id="15:121"
            >
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
              cardIndex={index}
            />
          ))}
        </div>

        {/* Navigation Arrows - Bottom Left Below First Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 mt-8 max-w-7xl mx-auto"
        >
          {/* Left Arrow - Node 16:57 */}
          <button
            className="w-[54px] h-[54px] bg-[#424242] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Previous testimonials"
            data-node-id="16:57"
          >
            <div className="w-[18px] h-[18px] relative rotate-180" data-node-id="16:59">
              <Image src={images.artwork} alt="" width={18} height={18} />
            </div>
          </button>

          {/* Right Arrow - Node 16:37 */}
          <button
            className="w-[54px] h-[54px] bg-[#424242] rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Next testimonials"
            data-node-id="16:37"
          >
            <div className="w-[18px] h-[18px] relative" data-node-id="16:46">
              <Image src={images.artwork} alt="" width={18} height={18} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
