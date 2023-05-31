export default async function Home() {
  return (
    <main>
      <h1 className="font-bold text-2xl">Plagiarism Front</h1>
      <h2 className="font-bold text-2xl">
        {process.env.NEXT_PUBLIC_PLAGIARISM_API}
      </h2>
    </main>
  )
}
