import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { PontoType } from 'components/types/PontoType'

import Api from 'services/Api'
import { error } from 'console'

interface IContextProps {
  banners: PontoType[]
  banner: PontoType | null
  isLoading: boolean
  error: string | null
  setPontos: Dispatch<SetStateAction<PontoType[]>>
  setPonto: Dispatch<SetStateAction<PontoType[]>>
}

interface IPontosProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const PontosProvider: React.FC<IPontosProviderProps> = ({
  children,
}) => {
  const [banners, setPontos] = useState<PontoType[]>([])
  const [banner, setPonto] = useState<PontoType[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

const fetchPontos = useCallback(async () => {
  setIsLoading(true))

  setIsLoading(true);
  setError(null);


  try {
    const response = await Api.get('/pontos-turisticos');
 console.log('results', results)
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
          setPontos,
          setPonto,
        }),
        [banners, banner, isLoading, error,],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const usePontos = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('usePonto must be within PontosProvider')
  }

  return context
}
