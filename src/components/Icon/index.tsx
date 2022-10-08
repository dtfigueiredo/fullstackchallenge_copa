import { ReactComponent as backarrow } from './svgs/backarrow.svg';

interface IconProps {
  title: string;
}

const icons: { [key: string]: string } = { backarrow }; //mapa dos ícones

export const Icon = ({ title }: IconProps) => {
  const Element = icons[title];

  return <Element />;
};
