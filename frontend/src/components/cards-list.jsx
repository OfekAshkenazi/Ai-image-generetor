import Card from "./card"

export default function CardsList({ data, title }) {
    if (data?.length > 0) return data.map((post) => <Card key={post.id} {...post} />)
    return (
        <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">
            {title}
        </h2>
    )
}

