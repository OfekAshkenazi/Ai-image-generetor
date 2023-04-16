import { useState } from "react"
import { preview } from '../assets'
import { useNavigate } from 'react-router-dom'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'


export default function CreatePost() {
    const navigate = useNavigate()
    const [generatingImg, setGeneratingImg] = useState(false)
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    })

    function handleSumbit() {

    }

    function handleChange(event) {

    }

    function handlesupriseMe() {
        
    }

    return (
        <section className="max-w-7xl mx-auto">

            <div className="">
                <h1 className="font-extrabold -text-[#222328] text-[32px]">Create</h1>
                <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Create imaginative and Visually stunning images through by DALL-E AI and share them with the community</p>
            </div>


            <form className="mt-16 max-w-3xl" onSubmit={handleSumbit}>
               
               
                <div className="flex flex-col gap-5">
                    <FormField labelName="Your name" type="text" name="name" placeholder="..." value={form.name} handleChange={handleChange}/>
                    <FormField labelName="Prompt" type="text" name="Prompt" placeholder="a painting of a fox in the style of Starry Night" value={form.prompt} handleChange={handleChange} isSupriseMe handlesupriseMe={handlesupriseMe}/>

                </div>


            </form>
        </section>
    )
}