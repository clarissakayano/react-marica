import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { AboutType } from 'components/types/AboutType'

import Api from 'services/Api'

interface IContextProps {
  about: AboutType | null
  loading: boolean
  fetchAbout: () => Promise<void>
  error: string | null
}

interface IAboutProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const AboutProvider: React.FC<IAboutProviderProps> = ({ children }) => {
  const [loading, setIsLoading] = useState(true)
  const [about, setAbout] = useState<AboutType | null>(null)
  const [error, setError] = useState<string | null>(null)

  const fetchAbout = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/apps/get`)
      setAbout(data)
    } catch {
      setError('Não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchAbout()
  }, [fetchAbout])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          loading,
          about,
          fetchAbout,
          error,
        }),
        [loading, about, error, fetchAbout],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useAbout = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within AboutProvider')
  }

  return context
}
