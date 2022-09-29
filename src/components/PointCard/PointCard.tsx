import { memo } from 'react'

import { Card } from 'react-bootstrap'

import { TouristicPointType } from 'components/types/ TouristicPoint'

import { Cover } from './styles'

interface ITouristicPointTypeProps {
  point: TouristicPointType
}
const PointCard: React.FC<ITouristicPointTypeProps> = ({ point }) => (
  <Card className="h-100">
    <Cover
      aspectRatio="1x1"
      style={{
        backgroundImage: `url(${point.capa})`,
      }}
    >
      <div />
    </Cover>
    <div>
      <div>{point.nome}</div>
      <div>
        {point.enderecos.map((endereco) => (
          <p key={endereco.id}>{endereco.label}</p>
        ))}
      </div>
    </div>
  </Card>
)
export default memo(PointCard)
