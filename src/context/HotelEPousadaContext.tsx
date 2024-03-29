import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { CategoryType } from 'components/types/CategoryType'
import { CollectionType } from 'components/types/CollectionType'
import { HotelType, ItemType } from 'components/types/HotelType'

import Api from 'services/Api'

interface IContextProps {
  hotels: HotelType[]
  hotel: ItemType | undefined
  categories: CategoryType[]
  collections: CollectionType[]
  isLoading: boolean

  error: string | null
  fetchHotels: () => Promise<void>
  fetchHotel: (id: number | string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
  searchHotels: (search?: string) => Promise<void>
}

interface IHotelProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const HotelsProvider: React.FC<IHotelProviderProps> = ({ children }) => {
  const [hotels, setHotels] = useState<HotelType[]>([])
  const [hotel, setHotel] = useState<ItemType | undefined>()
  const [categories, setCategories] = useState<CategoryType[]>([])

  const [collections, setCollections] = useState<CollectionType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchHotels = useCallback(async () => {
    console.log('fetchHotels')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get('/hoteis-e-pousadas')
      console.log('results', data)
      setHotels(data.collection)
      setCategories(data.categorias)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const searchHotels = useCallback(async (search?: string) => {
    setIsLoading(true)
    setError(null)

    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get('/hoteis-e-pousadas/busca', { params })
      setHotels(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchHotel = useCallback(async (id: number | string) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/hoteis-e-pousadas/${id}`)
      setHotel(data.item)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchCategory = useCallback(async (id?: number | string) => {
    console.log('fetchCategory')
    console.log('ID')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/hoteis-e-pousadas/categorias/${id}`)
      setHotels(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          hotel,
          hotels,
          categories,
          collections,
          isLoading,
          error,
          fetchHotels,
          fetchHotel,
          fetchCategory,
          searchHotels,
        }),
        [
          hotel,
          hotels,
          categories,
          collections,
          isLoading,
          error,
          fetchHotels,
          fetchHotel,
          fetchCategory,
          searchHotels,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useHotels = (): IContextProps => {
  console.log('useHotels', useHotels)
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useHotels must be within HotelsProvider')
  }

  return context
}
