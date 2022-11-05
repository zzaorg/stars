import { joinURL, withLeadingSlash } from 'ufo';

export const useURL = () => {
  const $config = useRuntimeConfig()

  const join = (...urls: string[]) => {
    const [base, ...rest] = urls.filter(Boolean)
    return withLeadingSlash(joinURL(base, ...rest))
  }
  return {
    join,
    withAppBase: (...urls: string[]) => {
      return join($config.app.baseURL, ...urls)
    },
    withDomain: (...urls: string[]) => {
      return joinURL($config.public.domain, ...urls.filter(Boolean))
    }
  }
}