import { ReactComponent as backarrow } from './svgs/backarrow.svg'
import { ReactComponent as arrowLeft } from './svgs/arrow-left.svg'
import { ReactComponent as arrowRight } from './svgs/arrow-right.svg'
import { ReactComponent as profile } from './svgs/profile.svg'

interface IconProps {
  title: string
}

const icons: { [key: string]: string } = {
  backarrow,
  arrowLeft,
  arrowRight,
  profile,
} //mapa dos ícones

export const Icon = ({ title }: IconProps) => {
  const Element = icons[title]

  return <Element />
}
