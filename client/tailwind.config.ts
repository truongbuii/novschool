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
        nSky: '#C3EBFA',
        nSkyLight: '#EDF9FD',
        nPurpleDark: '#A6A4F1',
        nPurple: '#CFCEFF',
        nPurpleLight: '#F1F0FF',
        nYellow: '#FAE27C',
        nYellowLight: '#FEFCE8'
      }
    }
  },
  plugins: []
};
export default config;
