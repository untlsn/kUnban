module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        c: {
          carbon: '#0C0C0D',
        },
      },
    },
  },
  plugins: [],
};
