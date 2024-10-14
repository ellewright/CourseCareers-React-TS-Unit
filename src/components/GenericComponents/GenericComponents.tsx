import List from "./List"

export default function GenericComponents() {
    return (
        <>
            <List<{ id: number, name: string, age?: number }>
                items={[
                    { id: 1, name: "Ellie" },
                    { id: 2, name: "Ken" }
                ]}
                getKey={item => item.id}
                renderItem={item => <div>{item.name}</div>}
            />
        </>
    )
}