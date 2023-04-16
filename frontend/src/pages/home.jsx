import { useEffect, useState } from "react"
import { Loader, Card, FormField, CardsList } from '../components'

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [allPosts, setAllPosts] = useState(null)
    const [SearchText, setSearchText] = useState('')

    return (
        <section className="max-w-7xl mx-auto">
            <div className="">
                <h1 className="font-extrabold -text-[#222328] text-[32px]">The Community Showcase</h1>
                <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Browse through a collection of imaginative and Visually stunning images generated by DALL-E AI</p>
            </div>

            <div className="mt-16">
                <FormField />
            </div>

            <div className="mt-10">
                {loading ? (
                    <div className="flex justify-center items-center ">
                        <Loader />
                    </div>
                ) : (
                    <>
                        {SearchText && (
                            <h2 className=" font-medium text-[#666e75] text-xl mb-3">
                                Showing results for <span className="text-[222328]">{SearchText}</span>
                            </h2>
                        )}

                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                            {SearchText ? (
                                // <CardsList data='searchedResults' title="No search results found"/>
                                <CardsList data={[]} title="No search results found"/>
                            ) : (
                                // <CardsList data='allPosts' title="No Posts found" />
                                <CardsList data={[]} title="No Posts found" />
                            ) }


                        </div>

                    </>
                )}
            </div>

        </section>
    )
}