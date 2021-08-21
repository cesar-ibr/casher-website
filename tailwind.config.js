
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      body: '#F7F7F7',
      primary: '#F95F59', // orange
      gray: {
        light: '#CCCCCC',
        DEFAULT: '#2D3043',
        dark: '#222433',
      },
      blue: {
        DEFAULT: '#044EF1',
        dark: '#000624',
      },
      orange: {
        light: '#E2975C',
        DEFAULT: '#F95F59',
      },
      white: '#FFFFFF',
      black: '#333333',
      yellow: '#FBC12D',
      purple: '#38178F',
      pink: '#D1316C',
      green: '#519F20',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
