import type { ComponentProps } from "react"
import Child from "./Child"

type ButtonProps = {
    outline: boolean
} & ComponentProps<"button"> & ComponentProps<typeof Child>

export default function Button({ outline, name, children, ...props }: ButtonProps) {
    return (
        <button
            style={{
                border: outline ? "1px solid red" : undefined
            }}
            {...props}
        >{name}'s {children}</button>
    )
}