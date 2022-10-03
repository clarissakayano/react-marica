import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'services/i18n'

import { BannersProvider } from 'context/BannerContext'
import { HotelsProvider } from 'context/HotelEPousadaContext'
import { PointsProvider } from 'context/PontosContext'
import { RestaurantsProvider } from 'context/RestaurantesContext'

import App from './App'
import { CommercesProvider } from 'context/CommerceContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <CommercesProvider>
      <RestaurantsProvider>
        <HotelsProvider>
          <PointsProvider>
            <BannersProvider>
              <App />
            </BannersProvider>
          </PointsProvider>
        </HotelsProvider>
      </RestaurantsProvider>
      </CommercesProvider>
    </Suspense>
  </React.StrictMode>,
)
