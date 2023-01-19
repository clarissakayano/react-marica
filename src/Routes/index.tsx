import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Comercio from 'pages/Comercio'
import Comercios from 'pages/Comercios'
import Home from 'pages/Home'
import HoteisEPousadas from 'pages/HoteisEPousadas'
import HotelEPousada from 'pages/HotelEPousada'
import NotFound from 'pages/NotFound'
import Restaurant from 'pages/Restaurant'
import Restaurantes from 'pages/Restaurantes'
import Spaces from 'pages/Spaces'
import TouristicPoint from 'pages/TouristicPoint'
import TouristicsPoints from 'pages/TouristicsPoints'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos" element={<TouristicsPoints />} />
        <Route path="/pontos/:id" element={<TouristicPoint />} />
        <Route path="/hoteis-e-pousadas" element={<HoteisEPousadas />} />
        <Route path="/hoteis-e-pousadas/:id" element={<HotelEPousada />} />
        <Route path="/restaurantes" element={<Restaurantes />} />
        <Route path="/restaurantes/:id" element={<Restaurant />} />
        <Route path="/comercios" element={<Comercios />} />
        <Route path="/comercios/:id" element={<Comercio />} />
        <Route path="/espacos" element={<Spaces />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
