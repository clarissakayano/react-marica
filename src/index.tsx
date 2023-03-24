import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'services/i18n'

import { BannersProvider } from 'context/BannerContext'
import { CommercesProvider } from 'context/CommerceContext'
import { EventsProvider } from 'context/EventContext '
import { HotelsProvider } from 'context/HotelEPousadaContext'
import { PointsProvider } from 'context/PontosContext'
import { RestaurantsProvider } from 'context/RestaurantesContext'
import { AboutProvider } from 'context/SobreContext'
import { SpacesProvider } from 'context/SpaceContext'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <EventsProvider>
        <SpacesProvider>
          <AboutProvider>
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
          </AboutProvider>
        </SpacesProvider>
      </EventsProvider>
    </Suspense>
  </React.StrictMode>,
)
