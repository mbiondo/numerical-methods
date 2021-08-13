import bisectionImage from './public/images/bisection_1.png'
import falsePositionImage from './public/images/false-position_1.png'
import fixedPointImage from './public/images/fixed-point_1.png'
import newtonRapshonImg from './public/images/newton_iteration.png'
import secantImage from './public/images/secant_1.png'

interface MethodItem {
  id: string
  name: string
  image: StaticImageData
}

export const MethodList: Array<MethodItem> = [
  {
    id: 'bisection',
    name: 'Método de Bisección',
    image: bisectionImage
  },
  {
    id: 'newton-raphson',
    name: 'Newton Raphson',
    image: newtonRapshonImg
  },
  {
    id: 'secant',
    name: 'Método de la secante',
    image: secantImage
  },
  {
    id: 'false-position',
    name: 'Método de la regla falsa',
    image: falsePositionImage
  },
  {
    id: 'fixed-point',
    name: 'Método del punto fijo',
    image: fixedPointImage
  }
]
