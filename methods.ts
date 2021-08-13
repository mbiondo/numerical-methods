import bisectionImage from './public/images/bisection_1.png'
import falsePositionImage from './public/images/false-position_1.png'
import fixedPointImage from './public/images/fixed-point_1.png'
import newtonRapshonImg from './public/images/newton_iteration.png'
import secantImage from './public/images/secant_1.png'

interface MethodItem {
  slug: string
  name: string
  image: StaticImageData
}

export const MethodList: Array<MethodItem> = [
  {
    slug: 'bisection',
    name: 'Método de Bisección',
    image: bisectionImage
  },
  {
    slug: 'newton-raphson',
    name: 'Newton Raphson',
    image: newtonRapshonImg
  },
  {
    slug: 'secant',
    name: 'Método de la secante',
    image: secantImage
  },
  {
    slug: 'false-position',
    name: 'Método de la regla falsa',
    image: falsePositionImage
  },
  {
    slug: 'fixed-point',
    name: 'Método del punto fijo',
    image: fixedPointImage
  }
]
