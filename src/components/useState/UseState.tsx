import { useState } from "react"

export default function UseState() {
    const [value, setValue] = useState<string>()

    // React can infer types for useState, but if you leave the default value
    // empty, you need to explicitly state the data type

    return (
        <>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        </>
    )
}