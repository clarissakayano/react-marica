import { createContext, useContext, useMemo } from 'react'

import Api from 'services/Api'

interface IContextProps {
  something: string
}

interface IEventProviderProps {
  children: React.ReactNode
}

export const ReactContext = createContext<IContextProps>({} as IContextProps)

export const EventProvider: React.FC<IEventProviderProps> = ({ children }) => {
  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          something: '',
        }),
        [],
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
