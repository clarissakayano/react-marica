import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { error } from 'console'

import { TouristicPointType } from 'components/types/ TouristicPoint'
import { CategoryType } from 'components/types/CategoryTypes'
import { CollectionType } from 'components/types/CollectionType'

import Api from 'services/Api'

interface IContextProps {
  points: TouristicPointType[]
  point: TouristicPointType | null
  categories: CategoryType[]
  collections: CollectionType[]
  isLoading: boolean

  error: string | null
  fetchPoints: () => Promise<void>
  fetchPoint: (id: number | string) => Promise<void>
}

interface IPointsProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const PointsProvider: React.FC<IPointsProviderProps> = ({
  children,
}) => {
  const [points, setPoints] = useState<TouristicPointType[]>([])
  const [point, setPoint] = useState<TouristicPointType | null>(null)
  const [categories, setCategories] = useState<CategoryType[]>([])
  const [categorie, setCategorie] = useState<CategoryType[] | null>(null)
  const [collections, setCollections] = useState<CollectionType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPoints = useCallback(async () => {
    console.log('fetchPoints')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get('/pontos')
      setPoints(data.collection)
      setCategories(data.categorias)
      setCollections(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchPoint = useCallback(async (id: number | string) => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/pontos/${id}`)
      setPoints(data.results[0])
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  console.log('points', points)
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
          fetchPoints,
          fetchPoint,
        }),
        [
          point,
          points,
          categories,
          collections,
          isLoading,
          error,
          fetchPoints,
          fetchPoint,
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
