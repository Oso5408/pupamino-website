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
    <footer className="bg-[#f26b2b] pt-[66px] pb-[31px]" data-node-id="16:23">
      <div className="container mx-auto px-4 md:px-[94px]">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Newsletter Column - Takes up more space */}
          <div className="md:col-span-5">
            <h2
              className="font-bold text-[#3d1806] text-[28px] md:text-[34px] leading-[44px] mb-4 whitespace-nowrap"
              style={{ fontFamily: 'Lexend, sans-serif' }}
              data-node-id="16:90"
            >
              Every pet deserves it.
            </h2>
            <p
              className="text-[#3d1806] text-[16px] leading-[20px] mb-6"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
              data-node-id="16:68"
            >
              Sign up for our newsletter to get exclusive deals and honest pet care advice.
            </p>

            {/* Email Input */}
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <div
                className="bg-white rounded-[23px] h-[46px] w-full max-w-[320px] flex items-center px-6"
                data-node-id="16:69"
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-[16px] text-[#7e7e7e] placeholder:text-[#7e7e7e]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  required
                />
                <button type="submit" className="ml-2">
                  <Image src={images.artwork2} alt="Submit" width={16} height={14} />
                </button>
              </div>
            </form>
          </div>

          {/* Shop Column - 2 spans */}
          <div className="md:col-span-2" data-node-id="16:79">
            <h3
              className="font-bold text-[#3d1806] text-[16px] tracking-[1.6px] mb-4 leading-[35px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              SHOP
            </h3>
            <ul
              className="space-y-0 text-[#3d1806] text-[16px] leading-[35px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <li><Link href="/pet-wash" className="hover:underline">Pet Wash</Link></li>
              <li><Link href="/home-care" className="hover:underline">Home Care</Link></li>
              <li><Link href="/wet-wipes" className="hover:underline">Wet Wipes</Link></li>
              <li><Link href="/daily-care" className="hover:underline">Daily Care</Link></li>
              <li><Link href="/all-products" className="hover:underline">All Products</Link></li>
            </ul>
          </div>

          {/* Learn Column - 3 spans */}
          <div className="md:col-span-3" data-node-id="16:80">
            <h3
              className="font-bold text-[#3d1806] text-[16px] tracking-[1.6px] mb-4 leading-[35px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              LEARN
            </h3>
            <ul
              className="space-y-0 text-[#3d1806] text-[16px] leading-[35px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Business Column - 2 spans */}
          <div className="md:col-span-2" data-node-id="16:82">
            <h3
              className="font-bold text-[#3d1806] text-[16px] tracking-[1.6px] mb-4 leading-[35px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              BUSINESS
            </h3>
            <p
              className="text-[#3d1806] text-[16px] leading-[35px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <a href="mailto:admin@pupamino.com" className="hover:underline">
                admin@pupamino.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          {/* Copyright - Bottom Left */}
          <p
            className="text-[#883d13] text-[12px] leading-[20px] mb-4 md:mb-0"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            data-node-id="16:87"
          >
            © 2025 Pupamino. All rights reserved.
          </p>

          {/* Social Icons - Bottom Right */}
          <div className="flex gap-4">
            {/* Instagram Icon - Node 16:84 */}
            <a
              href="https://instagram.com/pupamino"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-80 transition-opacity"
              data-node-id="16:84"
            >
              <Image src={images.instagram} alt="Instagram" width={30} height={30} />
            </a>
            {/* Facebook Icon - Node 16:85 */}
            <a
              href="https://facebook.com/pupamino"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-80 transition-opacity"
              data-node-id="16:85"
            >
              <Image src={images.facebook} alt="Facebook" width={30} height={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
