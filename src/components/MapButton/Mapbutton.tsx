import { memo } from 'react'

import { FaMapMarkedAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { MapBtn } from './styles'

interface IMapButtonProps {
  to: string
}

const MapButton: React.FC<IMapButtonProps> = ({ to }) => (
  <Link to={to}>
    <MapBtn className="me-3">
      <FaMapMarkedAlt size={22} className="me-1" />
      Mapa
    </MapBtn>
  </Link>
)

export default memo(MapButton)
