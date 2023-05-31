'use client'
import axios from 'axios'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    const handleAxios = async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_PLAGIARISM_API}health`,
      )
      console.log(response.data)
      return response.data
    }
    handleAxios()
  }, [])
  return (
    <main>
      <h1 className="font-bold text-2xl">Plagiarism Front</h1>
      <h2 className="font-bold text-2xl">
        {process.env.NEXT_PUBLIC_PLAGIARISM_API}
      </h2>
    </main>
  )
}
