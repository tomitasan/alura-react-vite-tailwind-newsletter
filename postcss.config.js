/* eslint-disable no-undef */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...AbortController(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {} )
  },
}
