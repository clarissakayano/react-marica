import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { BannerType } from 'components/types/BannerType'

import Api from 'services/Api'
import { error } from 'console'

interface IContextProps {
  banners: BannerType[]
  banner: BannerType | null
  isLoading: boolean
  error: string | null
  setBanners: Dispatch<SetStateAction<BannerType[]>>
  setBanner: Dispatch<SetStateAction<BannerType[]>>
}

interface IBannersProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const BannersProvider: React.FC<IBannersProviderProps> = ({
  children,
}) => {
  const [banners, setBanners] = useState<BannerType[]>([])
  const [banner, setBanner] = useState<BannerType[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  setIsLoading(true);
  setError(null);


  try {
    const response = await Api.get('/banners');
    setBanners(response.data.data.results);
  } catch {
    console.log('deu erro');
  } finally {
    setIsLoading(false);
  }
}, []);


  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          banners,
          banner,
          isLoading,
          error,
        }),
        [banners, banner, isLoading, error,],
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
    console.error('useBanner must be within BannersProvider')
  }

  return context
}
