import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

export default <Partial<Config>>({
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Noto Serif"', 'serif'],
      },
    },
  },
  plugins: [typography],
})
