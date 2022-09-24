import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import TouristicPoint from 'pages/TouristicPoint'
import TouristicsPoints from 'pages/TouristicsPoints'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos" element={<TouristicsPoints />} />
        <Route path="/pontos/:id" element={<TouristicPoint />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
