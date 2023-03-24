import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Comercio from 'pages/Comercio'
import Comercios from 'pages/Comercios'
import Event from 'pages/Event'
import Events from 'pages/Events'
import Home from 'pages/Home'
import HoteisEPousadas from 'pages/HoteisEPousadas'
import HotelEPousada from 'pages/HotelEPousada'
import NotFound from 'pages/NotFound'
import Restaurant from 'pages/Restaurant'
import Restaurantes from 'pages/Restaurantes'
import SobreACidade from 'pages/SobreACidade'
import Space from 'pages/Space'
import Spaces from 'pages/Spaces'
import TouristicPoint from 'pages/TouristicPoint'
import TouristicsPoints from 'pages/TouristicsPoints'
import TouristicsPointsCategories from 'pages/TouristicsPointsCategories/TouristicsPointsCategories'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />

        <Route path="/pontos" element={<TouristicsPoints />} />
        <Route path="/pontos/:id" element={<TouristicPoint />} />
        <Route
          path="/pontos-turisticos/categorias/:id/:name"
          element={<TouristicsPointsCategories />}
        />

        <Route path="/hoteis-e-pousadas" element={<HoteisEPousadas />} />
        <Route path="/hoteis-e-pousadas/:id" element={<HotelEPousada />} />

        <Route path="/bares-e-restaurantes" element={<Restaurantes />} />
        <Route path="/bares-e-restaurantes/:id" element={<Restaurant />} />

        <Route path="/comercio-local" element={<Comercios />} />
        <Route path="/comercio-local/:id" element={<Comercio />} />

        <Route path="/espacos" element={<Spaces />} />
        <Route path="/espaco/:id" element={<Space />} />

        <Route path="/eventos" element={<Events />} />
        <Route path="/eventos/:id" element={<Event />} />

        <Route path="/sobreacidade" element={<SobreACidade />} />

        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
