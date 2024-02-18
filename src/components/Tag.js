import React, { useState } from 'react'
import { Spinner } from './index'
import useGif from '../hooks/useGif'

export default function Tag() {

    // const [gif, setGif] = useState('')
    // const [loading, setLoading] = useState(false)
    const [tag, setTag] = useState('')

    // async function fetchData() {
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    //     const { data } = await axios.get(url)
    //     const imageSource = data.data.images.downsized_large.url
    //     setGif(imageSource)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    const { gif, loading, fetchData } = useGif(tag)

    return (
        <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4'>
            <h1 className='text-2xl mt-4 underline uppercase font-bold'>Random {tag} Gif</h1>
            {
                loading ? <Spinner /> : <img src={gif} width={450} alt="" />
            }
            <input type="text"
                className='w-10/12 text-lg py-2 rounded-lg text-center'
                onChange={(e) => setTag(e.target.value)} />
            <button onClick={() => fetchData()}
                className='w-10/12 bg-white opacity-80 text-lg py-2 rounded-lg mb-5'
                value={tag} >
                Generate
            </button>
        </div>
    )
}