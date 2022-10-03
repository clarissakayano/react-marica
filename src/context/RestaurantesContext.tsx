import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { CategoryType } from 'components/types/CategoryType'
import { CollectionType } from 'components/types/CollectionType'
import { ItemType } from 'components/types/HotelType'

import Api from 'services/Api'

interface IContextProps {
  restaurants: CollectionType[]
  restaurant: ItemType | undefined
  categories: CategoryType[]
  collections: CollectionType[]
  isLoading: boolean

  error: string | null
  fetchRestaurants: () => Promise<void>
  fetchRestaurant: (id: number | string) => Promise<void>
  searchRestaurants: (search: string) => Promise<void>
}

interface IRestaurantProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const RestaurantsProvider: React.FC<IRestaurantProviderProps> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<CollectionType[]>([])
  const [restaurant, setRestaurant] = useState<ItemType | undefined>()
  const [categories, setCategories] = useState<CategoryType[]>([])

  const [collections, setCollections] = useState<CollectionType[]>([])
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
      setCollections(data.collection)
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
      const { data } = await Api.get('/restaurantes', { params })
      setRestaurants(data.collection)
      console.log('setRestaurants', setRestaurants)
      setCategories(data.categorias)
      setCollections(data.collection)
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

  console.log('collections', collections)

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          restaurant,
          restaurants,
          categories,
          collections,
          isLoading,
          error,
          fetchRestaurants,
          fetchRestaurant,
          searchRestaurants,
        }),
        [
          restaurant,
          restaurants,
          categories,
          collections,
          isLoading,
          error,
          fetchRestaurants,
          fetchRestaurant,
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
