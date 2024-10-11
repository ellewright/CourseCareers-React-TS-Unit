import { createContext, useContext, useEffect, useState } from "react"
import Child from "./Child"

type User = {
    id: string,
    name: string,
    age: number
}

type ContextType = {
    users: User[],
    addUser: ({ name, age }: { name: string, age: number }) => void
}

const Context = createContext<ContextType | null>(null)

export function useUsers() {
    const usersContext = useContext(Context)

    if (usersContext == null) {
        throw new Error("Must use within provider.")
    }

    return usersContext
}

export default function UseContext() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        getUsers().then(setUsers)
    }, [])

    function addUser({ name, age }: { name: string, age: number }) {
        setUsers((prevUsers) => {
            return [...prevUsers, { id: crypto.randomUUID(), name: name, age: age }]
        })
    }

    return (
        <>
            <Context.Provider value={{ users, addUser }}>
                <Child />
            </Context.Provider>
        </>
    )
}

function getUsers() {
    return Promise.resolve([
        {
            id: crypto.randomUUID(),
            name: "Ellie",
            age: 24
        },
        {
            id: crypto.randomUUID(),
            name: "Ken",
            age: 22
        }
    ])
}