import type { ReactNode } from "react"

type ChildProps = {
    name: string,
    children?: ReactNode
}

export default function Child({ name, children }: ChildProps) {
    return (
        <>{name} {children}</>
    )
}

export const Child2: React.FC<ChildProps> = ({ name, children }) => {
    return <>{name} {children}</>
}