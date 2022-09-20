import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import PontosTuristicos from 'pages/PontosTuristicos'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<PontosTuristicos />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
