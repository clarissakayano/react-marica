import { memo } from 'react'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Title } from './styles'

interface ITitlePageProps {
  title: string
  to?: string
}

const TitlePage: React.FC<ITitlePageProps> = ({ title, to }) => (
  <div className="d-flex align-items-center mb-4 mb-md-0">
    {to && (
      <Link to={to} className="me-1">
        <AiOutlineArrowLeft
          size="22"
          height="22"
          width="22"
          color="black"
          className="me-1"
        />
      </Link>
    )}
    {to && (
      <div>
        <Title>{title}</Title>
      </div>
    )}
  </div>
)

export default memo(TitlePage)
