'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { images } from '@/lib/constants/images';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#f26b2b] pt-[66px] pb-[31px]">
      <div className="container mx-auto px-4 md:px-[94px]">
        {/* Newsletter Section */}
        <div className="mb-[120px]">
          <h2 className="font-lexend font-bold text-[#3d1806] text-[28px] md:text-[34px] leading-[44px] mb-6">
            Every pet deserves it.
          </h2>
          <p className="font-dm-sans text-[#3d1806] text-[16px] leading-[20px] mb-8 max-w-[414px]">
            Sign up for our newsletter to get exclusive deals<br />
            and honest pet care advice.
          </p>

          {/* Email Input */}
          <form onSubmit={handleNewsletterSubmit} className="relative">
            <div className="bg-white rounded-[23px] h-[46px] w-full max-w-[385px] flex items-center px-6">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent outline-none font-dm-sans text-[16px] text-[#7e7e7e] placeholder:text-[#7e7e7e]"
                required
              />
              <button type="submit" className="ml-2">
                <Image src={images.artwork2} alt="Submit" width={16} height={14} />
              </button>
            </div>
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo Column */}
          <div>
            <Image
              src={images.logo}
              alt="Pupamino"
              width={150}
              height={37}
              className="mb-4"
            />
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-dm-sans font-bold text-[#3d1806] text-[16px] tracking-[1.6px] mb-4">
              SHOP
            </h3>
            <ul className="space-y-3 font-dm-sans text-[#3d1806] text-[16px]">
              <li><Link href="/pet-wash" className="hover:underline">Pet Wash</Link></li>
              <li><Link href="/home-care" className="hover:underline">Home Care</Link></li>
              <li><Link href="/wet-wipes" className="hover:underline">Wet Wipes</Link></li>
              <li><Link href="/daily-care" className="hover:underline">Daily Care</Link></li>
              <li><Link href="/all-products" className="hover:underline">All Products</Link></li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h3 className="font-dm-sans font-bold text-[#3d1806] text-[16px] tracking-[1.6px] mb-4">
              LEARN
            </h3>
            <ul className="space-y-3 font-dm-sans text-[#3d1806] text-[16px]">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Business Column */}
          <div>
            <h3 className="font-dm-sans font-bold text-[#3d1806] text-[16px] tracking-[1.6px] mb-4">
              BUSINESS
            </h3>
            <p className="font-dm-sans text-[#3d1806] text-[16px]">
              <a href="mailto:admin@pupamino.com" className="hover:underline">
                admin@pupamino.com
              </a>
            </p>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#3d1806]/20">
          <div className="flex gap-4 mb-4 md:mb-0">
            {/* Social Icons - Navigation Arrows */}
            <button className="w-[54px] h-[54px] flex items-center justify-center">
              <Image src={images.group8} alt="Previous" width={54} height={54} />
            </button>
            <button className="w-[54px] h-[54px] flex items-center justify-center">
              <Image src={images.group8} alt="Next" width={54} height={54} className="rotate-180" />
            </button>
          </div>

          <p className="font-dm-sans text-[#883d13] text-[12px]">
            © 2025 Pupamino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
