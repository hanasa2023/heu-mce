export const useUserStore = defineStore('user', () => {
  const token = useState(
    () =>
      'eyJhbGciOiJIUzUxMiJ9.eyJ0aW1lIjoxNzM2NDMzNTM1Nzk3LCJsb2dpbl91c2VyX2tleSI6IjIwMjIxNTE3MDEiLCJ0b2tlbiI6IjJsOXZnMzhpcTZoNXZvOGlmaWtidXBwZjRzIn0.5YYJiNvqDmJAerPBfTApJSq0M4t7qrn-TtkoHgeAM6T5HZ8VjDB2PVZskv9s7hGC9qLqgVa9EkfbcSB2TWjQpw',
  )
  const batchId = useState(() => '')

  return { token, batchId }
})
