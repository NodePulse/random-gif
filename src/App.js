import { Random, Tag } from "./components";

function App() {
  return (
    <div className="w-full h-full flex flex-col background items-center">
      <h1 className="bg-white rounded-lg mt-10 w-11/12 text-center text-4xl px-10 py-2 font-bold">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-8">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;