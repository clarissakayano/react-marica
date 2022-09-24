import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { error } from 'console'

import { TouristicPointType } from 'components/types/ TouristicPoint'

import Api from 'services/Api'

interface IContextProps {
  points: TouristicPointType[]
  point: TouristicPointType | null
  isLoading: boolean
  setIsLoading: boolean
  error: string | null
  fetchPoints: Promise<void>
  fetchPoint: (id: number | string) => Promise<void>
  setPoints: Dispatch<SetStateAction<TouristicPointType | null>>
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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPoints = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const { data } = await Api.get('/pontos')
      console.log('results', data)
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
      console.log('results', data)
    } catch {
      setError('Erro: não foi possível carregar')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPoints()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          point,
          points,
          isLoading,
          error,
          fetchPoints,
          fetchPoint,
          setPoint,
          setIsLoading,
        }),
        [
          point,
          points,
          isLoading,
          error,
          fetchPoints,
          fetchPoint,
          setPoint,
          setIsLoading,
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
