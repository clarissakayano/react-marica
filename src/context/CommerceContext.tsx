import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { CategoryType } from 'components/types/CategoryType'
import { CollectionType } from 'components/types/CollectionType'
import { CommerceType, ItemType } from 'components/types/CommerceType'

import Api from 'services/Api'

interface IContextProps {
  commerces: CommerceType[]
  commerce: ItemType | undefined
  categories: CategoryType[]
  collections: CollectionType[]
  isLoading: boolean

  error: string | null
  fetchCommerces: () => Promise<void>
  fetchCommerce: (id: number | string) => Promise<void>
  fetchCategory: (id?: number | string) => Promise<void>
  searchCommerces: (search: string) => Promise<void>
}

interface ICommerceProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const CommercesProvider: React.FC<ICommerceProviderProps> = ({
  children,
}) => {
  const [commerces, setCommerces] = useState<CommerceType[]>([])
  const [commerce, setCommerce] = useState<ItemType | undefined>()
  const [categories, setCategories] = useState<CategoryType[]>([])

  const [collections, setCollections] = useState<CollectionType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCommerces = useCallback(async () => {
    console.log('fetchCommerces')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get('/comercios')
      console.log('results', data)
      setCommerces(data.collection)
      setCategories(data.categorias)
      setCollections(data.collection)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const searchCommerces = useCallback(async (search: string) => {
    setIsLoading(true)
    setError(null)

    const params = {
      busca: search,
    }

    try {
      const { data } = await Api.get('/comercios/busca', { params })
      setCommerces(data.collection)
      console.log('setCommerces', setCommerces)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchCommerce = useCallback(async (id: number | string) => {
    console.log('fetchCommercee')
    console.log('ID')
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get(`/comercios/${id}`)
      setCommerce(data.item)
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
      const { data } = await Api.get(`/comercios/categorias/${id}`)
      setCommerces(data.collection)
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
          commerce,
          commerces,
          categories,
          collections,
          isLoading,
          error,
          fetchCommerces,
          fetchCommerce,
          fetchCategory,
          searchCommerces,
        }),
        [
          commerce,
          commerces,
          categories,
          collections,
          isLoading,
          error,
          fetchCommerces,
          fetchCommerce,
          fetchCategory,
          searchCommerces,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useCommerces = (): IContextProps => {
  console.log('useCommerces', useCommerces)
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useCommerces must be within CommercesProvider')
  }

  return context
}
