import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'services/i18n'

import { BannersProvider } from 'context/BannerContext'
import { PointsProvider } from 'context/PontosContext'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <PointsProvider>
        <BannersProvider>
          <App />
        </BannersProvider>
      </PointsProvider>
    </Suspense>
  </React.StrictMode>,
)
