import {Sidebar, Center} from "../components"

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex ">
      <Sidebar />
      <Center />

      </main>

      <div>
      {/* Player */}
      </div>

    </div>
  )
}
