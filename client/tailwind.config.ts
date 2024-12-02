import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        sky: '#C3EBFA',
        skyLight: '#EDF9FD',
        purple: '#CFCEFF',
        purpleLight: '#F1F0FF',
        yellow: '#FAE27C',
        yellowLight: '#FEFCE8'
      }
    }
  },
  plugins: []
};
export default config;
