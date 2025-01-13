export const ifetch = async <T>(
  url: string,
  headers: Record<string, string>,
  body?: any,
) => {
  const data: T = await $fetch(url, {
    method: 'POST',
    body,
    headers: new Headers({
      host,
      origin,
      ...headers,
    }),
  })

  return data
}
