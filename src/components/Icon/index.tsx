import backarrow from './svgs/backarrow.svg'

interface IconProps {
    name: 'string'
}

const icons = {
    backarrow
}

export const Icon = ({ name }: IconProps) => {
    const Element: any = icons[name]

    return (
        <Element/>
    )
}