const fs = require('fs');
const path = require('path');
const http = require('http');

const assets = {
  'isabela-kronemberger-wPD_oM9zRT0-unsplash-2.png': 'http://localhost:3845/assets/b457b83325e237039e76a93b489afca3561da075.png',
  'pupamino-logo-primary-lockup-1.png': 'http://localhost:3845/assets/809fb7dca1d861e4e23794d78e7cdfbca9bb1f19.png',
  'bottle-1-shadow-1.png': 'http://localhost:3845/assets/0c83b9c5e98dd7ce9546399c3d6361733c5dffc9.png',
  'bottle-2-shadow-1.png': 'http://localhost:3845/assets/48684380014b2706d4c0445f6e33b25fed1b8a8c.png',
  'science-image-2.png': 'http://localhost:3845/assets/f50dd244b619d288c95189ef9cc1861d09c8316d.png',
  'young-asian-woman-2.png': 'http://localhost:3845/assets/1a51ad689f070192ac6e610db630326814c122c1.png',
  'young-asian-woman-3.png': 'http://localhost:3845/assets/bbc4efbf78b8afc2d084614665871b23af1b40b7.png',
  'young-asian-woman-4.png': 'http://localhost:3845/assets/1c9209b049df821371c2b2192fe0df80b5cce853.png',
  'isabela-kronemberger-mask.svg': 'http://localhost:3845/assets/24a52cf12a8357f045d4ff5079a228f138ad5eca.svg',
  'layer-1.svg': 'http://localhost:3845/assets/043bc3e6dd40dbfc7a5507aad51cf7e430ccd723.svg',
  'layer-2.svg': 'http://localhost:3845/assets/52079059979674ae4fb1cb5d11555914158876ad.svg',
  'layer-3.svg': 'http://localhost:3845/assets/f487613abafa441d2e937ad872c715460b0ba8ba.svg',
  'layer-4.svg': 'http://localhost:3845/assets/d04465cbc6d4e1d9438b1535c7fed049b167c607.svg',
  'layer-5.svg': 'http://localhost:3845/assets/d59df0b1df2c1718379bb7d749e085e3180aa391.svg',
  'science-image-1.svg': 'http://localhost:3845/assets/fde313533ba0e262912a0b224dd15969b697ec5e.svg',
  'layer-6.svg': 'http://localhost:3845/assets/9336f77f3114d8cb4afaa3e7c6f9400aec96804c.svg',
  'young-asian-woman-mask.svg': 'http://localhost:3845/assets/47258a54c8b52682b3f2a483e3fcb51fd544e501.svg',
  'group-8.svg': 'http://localhost:3845/assets/829aa67512fe62812fcd44a48e653a1b1dd5fc8b.svg',
  'artwork.svg': 'http://localhost:3845/assets/ca1157f651cda4a69650a82fa60ce731b3948db4.svg',
  'artwork-1.svg': 'http://localhost:3845/assets/362d50b0654028dc81a22a7d474c5cbe45593213.svg',
  'artwork-2.svg': 'http://localhost:3845/assets/585cd5748ce5d72e715daf3d37d43a83f7908b0d.svg',
  'vector.svg': 'http://localhost:3845/assets/c4ed4969fe6f7e4303e49d3f03c1a2da79022ad9.svg',
  'vector-1.svg': 'http://localhost:3845/assets/6d660e020b5872ac3a0759c259609d5945515345.svg',
  'vector-2.svg': 'http://localhost:3845/assets/36b07142da8c87e1fda555cc460e249eb11383fd.svg',
  'group.svg': 'http://localhost:3845/assets/88cbb6f2fdc63207338bebfbc0fe3887ba9c394d.svg',
  'group-1.svg': 'http://localhost:3845/assets/acaea40713f39c3654eb82baf013c72f04a30152.svg',
  'vector-3.svg': 'http://localhost:3845/assets/6b01f22355ad43d06547b78be1bd4e0526a130fc.svg'
};

const outputDir = path.join(__dirname, '..', 'public', 'assets');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let downloaded = 0;
let failed = 0;

Object.entries(assets).forEach(([filename, url]) => {
  const filePath = path.join(outputDir, filename);
  const file = fs.createWriteStream(filePath);

  http.get(url, (response) => {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        downloaded++;
        console.log(`✓ Downloaded: ${filename}`);

        if (downloaded + failed === Object.keys(assets).length) {
          console.log(`\nComplete! Downloaded ${downloaded}/${Object.keys(assets).length} assets`);
          if (failed > 0) console.log(`Failed: ${failed}`);
        }
      });
    } else {
      failed++;
      console.log(`✗ Failed: ${filename} (HTTP ${response.statusCode})`);
      fs.unlinkSync(filePath);
    }
  }).on('error', (err) => {
    failed++;
    console.error(`✗ Error downloading ${filename}:`, err.message);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  });
});
