import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    rotate: {
      0: '0deg',
      45: '45deg',
      90: '90deg',
      135: '135deg',
      180: '180deg',
      225: '225deg',
      270: '270deg',
      315: '315deg',
    },
  },
  plugins: [
    function ({ addComponents }: any) {
      addComponents({
        // .containerのサイズによるmax-widthの変更を防ぐ
        '.container': {
          maxWidth: '100%',
        },
      });
    },
  ],
};
export default config;
