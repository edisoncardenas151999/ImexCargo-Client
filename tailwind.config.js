module.exports = {
  content: ["./src/*/*.js"],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "fadeOut 3s ease-in-out",
      },

      // that is actual animation
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
