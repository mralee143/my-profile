// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        flow: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-80rem)' }, // adjust as needed
        },
      },
      animation: {
        flow: 'flow 10s linear infinite',
      },
    },
  },
  plugins: [],
}
