import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react'

import { BannerType } from 'components/types/BannerType'

import Api from 'services/Api'

interface IContextProps {
  banners: BannerType[]
  banner: BannerType | null
  isLoading: boolean
  error: string | null
  fetchBanners: () => Promise<void>
  setBanners: Dispatch<SetStateAction<BannerType[]>>
  setBanner: Dispatch<SetStateAction<BannerType | null>>
}

interface IBannersProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const BannersProvider: React.FC<IBannersProviderProps> = ({
  children,
}) => {
  const [banners, setBanners] = useState<BannerType[]>([])
  const [banner, setBanner] = useState<BannerType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchBanners = useCallback(async () => {
    setIsLoading(true)

    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get('/banners')

      setBanners(data)
    } catch {
      console.log('deu erro')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchBanners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          banners,
          banner,
          isLoading,
          error,
          setBanners,
          setBanner,
          fetchBanners,
        }),
        [banners, banner, isLoading, error, fetchBanners],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useBanners = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useBanners must be within BannersProvider')
  }

  return context
}
