import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { CategoryType } from 'components/types/CategoryType'
import { CollectionType } from 'components/types/CollectionType'
import {
  ItemRestaurantType,
  RestaurantCategoryType,
  RestaurantType,
} from 'components/types/RestaurantType'

import Api from 'services/Api'

interface IContextProps {
  restaurants: RestaurantType[]
  restaurant: ItemRestaurantType | undefined
  categories: RestaurantCategoryType[]

  isLoading: boolean

  error: string | null
  fetchRestaurants: () => Promise<void>
  fetchRestaurant: (id: number | string) => Promise<void>
  fetchCategory: (id?: number | string) => Promise<void>
  searchRestaurants: (search: string) => Promise<void>
}

interface IRestaurantProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const RestaurantsProvider: React.FC<IRestaurantProviderProps> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([])
  const [restaurant, setRestaurant] = useState<ItemRestaurantType | undefined>()
  const [categories, setCategories] = useState<RestaurantCategoryType[]>([])

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchRestaurants = useCallback(async () => {
    console.log('fetchRestaurants')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get('/restaurantes')
      console.log('results', data)
      setRestaurants(data.collection)
      setCategories(data.categorias)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const searchRestaurants = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)

    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get('/restaurantes/busca', { params })
      setRestaurants(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchRestaurant = useCallback(async (id: number | string) => {
    console.log('fetchRestaurante')
    console.log('ID')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/restaurantes/${id}`)
      setRestaurant(data.item)
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
      const { data } = await Api.get(`/restaurantes/categorias/${id}`)
      setRestaurants(data.collection)
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
          restaurant,
          restaurants,
          categories,
          isLoading,
          error,
          fetchRestaurants,
          fetchRestaurant,
          fetchCategory,
          searchRestaurants,
        }),
        [
          restaurant,
          restaurants,
          categories,
          isLoading,
          error,
          fetchRestaurants,
          fetchRestaurant,
          fetchCategory,
          searchRestaurants,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useRestaurants = (): IContextProps => {
  console.log('useRestaurants', useRestaurants)
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useRestaurants must be within RestaurantsProvider')
  }

  return context
}
