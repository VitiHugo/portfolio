
export default function Home() {
  return (
    <div className="container px-8">
      <section className="flex flex-col text-center">
        <img src="/logo.png" alt="Logo" />
        <h1 className="text-3xl mb-6">Welcome to my PORTFOLIO</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius laborum voluptates rem ducimus 
          dolores unde incidunt, dicta reprehenderit ullam fugit consectetur repellat et. Odio eveniet ipsam magni 
          commodi pariatur.
        </p>
      </section>
      <hr className="my-8"/>
      <section className="flex flex-col text-center">
        <h2 className="text-3xl mb-6">Skill Pool</h2>
        <div className="flex overflow-x-auto gap-6">
            <img className="w-28" src="/netcore-logo.png" alt=".Net Core Logo" />
            <img className="w-28"  src="/netcore-logo.png" alt=".Net Core Logo" />
            <img className="w-28"  src="/netcore-logo.png" alt=".Net Core Logo" />
            <img className="w-28"  src="/netcore-logo.png" alt=".Net Core Logo" />
            <img className="w-28"  src="/netcore-logo.png" alt=".Net Core Logo" />
            <img className="w-28"  src="/netcore-logo.png" alt=".Net Core Logo" />
        </div>
      </section>
      <hr className="my-8"/>
      <section>
        <h2>Projects</h2>
        <div>
          <div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
