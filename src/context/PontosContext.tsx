import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import {
  ItemType,
  TouristicPointType,
} from 'components/types/ TouristicPointType'
import { CategoryType } from 'components/types/CategoryType'
import { CollectionType } from 'components/types/CollectionType'

import Api from 'services/Api'

interface IContextProps {
  points: TouristicPointType[]
  point: ItemType | undefined
  categories: CategoryType[]
  collections: CollectionType[]
  isLoading: boolean

  error: string | null
  setCategory: (category: CategoryType) => void
  fetchPoints: () => Promise<void>
  fetchPoint: (id: number | string) => Promise<void>
  fetchCategory: (id: number) => Promise<void>
  fetchSearchPoints: (search?: string) => Promise<void>
}

interface IPointsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const PointsProvider: React.FC<IPointsProviderProps> = ({
  children,
}) => {
  const [points, setPoints] = useState<TouristicPointType[]>([])
  const [point, setPoint] = useState<ItemType | undefined>()
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [category, setCategory] = useState<CategoryType | null>(null)

  const [collections, setCollections] = useState<CollectionType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPoints = useCallback(async () => {
    console.log('fetchPoints')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get('/pontos')
      console.log('fetchPoints')
      setPoints(data.collection)
      setCategories(data.categorias)
      setCollections(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchSearchPoints = useCallback(async (search?: string) => {
    setIsLoading(true)
    setError(null)

    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get('/pontos/busca', { params })
      setPoints(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchPoint = useCallback(async (id: number | string) => {
    console.log('fetchPoint')
    console.log('ID')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/pontos/${id}`)
      setPoint(data.item)
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
      const { data } = await Api.get(`/pontos/categorias/${id}`)
      setPoints(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  console.log('point', point)
  console.log('categorias', fetchCategory)
  console.log('categories', categories)
  console.log('collections', collections)

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          point,
          points,
          categories,
          collections,
          isLoading,
          error,
          setCategory,
          fetchPoints,
          fetchPoint,
          fetchCategory,
          fetchSearchPoints,
        }),
        [
          point,
          points,
          categories,
          collections,
          isLoading,
          error,
          setCategory,
          fetchPoints,
          fetchPoint,
          fetchCategory,
          fetchSearchPoints,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const usePoints = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePoints must be within PointsProvider')
  }

  return context
}
