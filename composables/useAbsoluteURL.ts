import { joinURL } from 'ufo'

export const useAbsoluteURL = () => {
  const $config = useRuntimeConfig()

  return {
    absoluteURL: (...urls: string[]) => {
      return joinURL($config.app.baseURL, ...urls)
    }
  }
}