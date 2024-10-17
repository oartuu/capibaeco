import { SearchIcon, UserRound } from "lucide-react";

export default function App() {
  return (
    <div className="h-screen flex flex-col items-center bg-zinc-950/50 bg-display  bg-no-repeat bg-center bg-blend-overlay ... ">
      <nav className="flex items-center justify-between gap-20">
        <div>
          <img src="logo.png" alt="" />
        </div>
        <div>
          <ul className="flex items-center justify-between gap-7 text-lg text-slate-50 font-bold">
            <li>SEJA NOSSO PARCEIRO</li>
            <li>INICIATIVAS</li>
            <li>QUEM SOMOS</li>
          </ul>
        </div>
        <div className="flex items-center justify-between gap-5">
          <UserRound className="size-8 text-green-600 " />
          <button className="font-bold text-xl text-slate-50 bg-green-600 rounded-3xl px-4 py-2">
            AGENDE AGORA
          </button>
        </div>
      </nav>

      <h1 className="text-9xl font-bold text-slate-50">CAPIBAECO</h1>

      <div className="flex flex-col items-start w-screen p-7 mt-8">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-3xl font-bold text-slate-50">
            ROTEIRO E PARCEIROS
          </h2>
          <div className="flex items-center justify-between gap-3 w-auto border-2 border-white rounded-3xl py-1 px-2">
            <input
              className=" p-1 font-bold bg-transparent text-slate-50 placeholder:text-slate-50 placeholder:text-lg  outline-none"
              type="text"
              placeholder="procure..."
            />
            <SearchIcon className="text-slate-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
