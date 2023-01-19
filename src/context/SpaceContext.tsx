import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { CategoryType } from 'components/types/CategoryType'
import { CollectionType } from 'components/types/CollectionType'
import { ItemType } from 'components/types/ItemType'

import Api from 'services/Api'

interface IContextProps {
  spaces: CollectionType[]
  space: ItemType | undefined
  categories: CategoryType[]
  collections: CollectionType[]
  isLoading: boolean

  error: string | null
  fetchSpaces: () => Promise<void>
  fetchSpace: (id: number | string) => Promise<void>
  searchSpaces: (search: string) => Promise<void>
}

interface ISpaceProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const SpacesProvider: React.FC<ISpaceProviderProps> = ({ children }) => {
  const [spaces, setSpaces] = useState<CollectionType[]>([])
  const [space, setSpace] = useState<ItemType | undefined>()
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

  const searchSpaces = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)

    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get('/espacos', { params })
      setSpaces(data.collection)
      setCategories(data.categorias)
      setCollections(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchSpace = useCallback(async (id: number | string) => {
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
          searchSpaces,
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
          searchSpaces,
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
