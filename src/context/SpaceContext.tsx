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
  ItemSpaceEventsType,
  SpaceEventsCategoryType,
  SpaceEventsType,
} from 'components/types/SpaceEventsType'

import Api from 'services/Api'

interface IContextProps {
  spaces: SpaceEventsType[]
  space: ItemSpaceEventsType | undefined
  categories: CategoryType[]
  collections: CollectionType[]
  isLoading: boolean

  error: string | null
  fetchSpaces: () => Promise<void>
  fetchSpace: (id: number | string) => Promise<void>
  fetchsearchSpaces: (search?: string) => Promise<void>
}

interface ISpaceProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const SpacesProvider: React.FC<ISpaceProviderProps> = ({ children }) => {
  const [spaces, setSpaces] = useState<SpaceEventsType[]>([])
  const [space, setSpace] = useState<ItemSpaceEventsType | undefined>()
  const [categories, setCategories] = useState<CategoryType[]>([])

  const [collections, setCollections] = useState<CollectionType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchSpaces = useCallback(async () => {
    console.log('fetchSpaces')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get('/espacos')
      console.log('results', data)
      setSpaces(data.collection)
      setCategories(data.categorias)
      setCollections(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchsearchSpaces = useCallback(async (search?: string) => {
    setIsLoading(true)
    setError(null)

    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get('/espacos/busca', { params })
      setSpaces(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchSpace = useCallback(async (id?: number | string) => {
    console.log('fetchSpace')
    console.log('ID')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/espacos/${id}`)
      setSpace(data.item)
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
          space,
          spaces,
          categories,
          collections,
          isLoading,
          error,
          fetchSpaces,
          fetchSpace,
          fetchsearchSpaces,
        }),
        [
          space,
          spaces,
          categories,
          collections,
          isLoading,
          error,
          fetchSpaces,
          fetchSpace,
          fetchsearchSpaces,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useSpaces = (): IContextProps => {
  console.log('useSpaces', useSpaces)
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useSpaces must be within SpacesProvider')
  }

  return context
}
