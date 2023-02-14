import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import { EventCategoryType, EventType } from 'components/types/EventType'

import Api from 'services/Api'

interface IContextProps {
  events: EventType[]
  eventCategory: EventCategoryType[]
  isLoading: boolean
  error: string | null
  fetchSearchEvents: (busca?: string) => Promise<void>
  fetchEvents: () => Promise<void>
  fetchEventsCategory: (id?: number) => Promise<void>
}

interface IEventProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const EventsProvider: React.FC<IEventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<EventType[]>([])
  const [eventCategory, setEventCategory] = useState<EventCategoryType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchEvents = useCallback(async () => {
    console.log('fetchEvents')
    setIsLoading(true)
    setError(null)

    try {
      const response = await Api.get('/eventos', {
        params: { fields: 'datahora_inicio', orderby: 'datahora_inicio', order: 'asc',},
      })
      console.log('results', response)
      setEvents(response.data.collection)
      setEventCategory(response.data.categorias)
    } catch {
      setError('Algo inexperado aconteceu')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchSearchEvents = useCallback(async (buscar?: string) => {
    setIsLoading(true)
    setError(null)

    const params = {
      buscar,
    }

    try {
      const response = await Api.get('/eventos/busca', {
        params,
      })
      setEvents(response.data.collection)
      setEventCategory(response.data.categorias)
    } catch {
      setError('Algo inexperado aconteceu')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchEvents = useCallback(async (id?: number) => {}

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          events,
          eventCategory,
          isLoading,
          error,
          fetchSearchEvents,
          fetchEvents,
          fetchEventsCategory,
        }),
        [
          events,
          eventCategory,
          isLoading,
          error,
          fetchSearchEvents,
          fetchEvents,
          fetchEventsCategory,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  )
}

export const useMyCustomHook = (): IContextProps => {
  const context = useContext(ReactContext)

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useMyCustomHook must be within MyCustomProvider')
  }

  return context
}
