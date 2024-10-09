import { useRef } from "react"

export default function UseRef() {
    const inputRef = useRef<HTMLInputElement>(null)
    const value = useRef<number>()

    value.current = 10

    return (
        <>
            <input ref={inputRef} />
        </>
    )
}