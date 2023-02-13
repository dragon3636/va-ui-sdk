module.exports = {
  purge: {
    enabled: true,
    content: [
      './projects/va/ui-sdk/**/*.{html,ts,scss}',
      './projects/showcase/**/*.{html,ts,scss}',
      './src/**/*.{html,ts,scss}',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          fill: 'var(--color-accent-fill)',
          hover: 'var(--color-accent-hover)',
          disabled: 'var(--color-accent-disabled)',
        }
      },
    },
  },
  variants: {},
  plugins: [],
};
