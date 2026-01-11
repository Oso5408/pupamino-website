// Image assets mapping
export const images = {
  logo: '/assets/pupamino-logo-primary-lockup-1.png',
  hero: '/assets/isabela-kronemberger-wPD_oM9zRT0-unsplash-2.png',
  heroMask: '/assets/isabela-kronemberger-mask.svg',
  bottle1: '/assets/bottle-1-shadow-1.png',
  bottle2: '/assets/bottle-2-shadow-1.png',
  scienceImage: '/assets/science-image-2.png',
  scienceMask: '/assets/science-image-1.svg',
  testimonial1: '/assets/young-asian-woman-2.png',
  testimonial2: '/assets/young-asian-woman-3.png',
  testimonial3: '/assets/young-asian-woman-4.png',
  testimonialMask: '/assets/young-asian-woman-mask.svg',

  // Icons and decorative elements
  layer1: '/assets/layer-1.svg',
  layer2: '/assets/layer-2.svg',
  layer3: '/assets/layer-3.svg',
  layer4: '/assets/layer-4.svg',
  layer5: '/assets/layer-5.svg',
  layer6: '/assets/layer-6.svg', // Star icon
  group: '/assets/group.svg',
  group1: '/assets/group-1.svg',
  group8: '/assets/group-8.svg',
  artwork: '/assets/artwork.svg',
  artwork1: '/assets/artwork-1.svg',
  artwork2: '/assets/artwork-2.svg',
  vector: '/assets/vector.svg',
  vector1: '/assets/vector-1.svg',
  vector2: '/assets/vector-2.svg',
  vector3: '/assets/vector-3.svg',
  instagram: '/assets/instagram-icon.svg',
  facebook: '/assets/facebook-icon.svg',
} as const;

export type ImageKey = keyof typeof images;
