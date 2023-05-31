import axios from 'axios'
const getData = async () => {
  const data = await axios.get(
    `${process.env.NEXT_PUBLIC_PLAGIARISM_API}/health`,
  )
  console.log(data.data)
  return data.data
}
export default async function Home() {
  const data = await getData()

  return (
    <main>
      <h1 className="font-bold text-2xl">Plagiarism Front</h1>
      <h2 className="font-bold text-2xl">
        {process.env.NEXT_PUBLIC_PLAGIARISM_API}
      </h2>
      <h2 className="font-bold text-2xl">{JSON.stringify(data)}</h2>
    </main>
  )
}
