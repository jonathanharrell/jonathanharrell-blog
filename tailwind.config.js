module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    fontFamily: {
      idealSans: ['Ideal Sans SSm A', 'Ideal Sans SSm B', 'Helvetica', 'sans-serif'],
      mercury: ['Mercury SSm A', 'Mercury SSm B', 'serif'],
      mono: ['Operator Mono SSm A', 'Operator Mono SSm B', 'monospace']
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
