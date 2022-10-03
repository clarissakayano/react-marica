import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'services/i18n'

import { BannersProvider } from 'context/BannerContext'
import { HotelsProvider } from 'context/HotelEPousadaContext'
import { PointsProvider } from 'context/PontosContext'
import { RestaurantsProvider } from 'context/RestaurantesContext'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <RestaurantsProvider>
        <HotelsProvider>
          <PointsProvider>
            <BannersProvider>
              <App />
            </BannersProvider>
          </PointsProvider>
        </HotelsProvider>
      </RestaurantsProvider>
    </Suspense>
  </React.StrictMode>,
)
