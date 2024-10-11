import { useUsers } from "./UseContext";

export default function Child() {
    const { users } = useUsers()

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    )
}