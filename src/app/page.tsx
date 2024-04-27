import { BeakerIcon } from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen px-2 text-yellow-500">
      <h1 className="text-5xl font-bold mb-20">ChatGPT Replica</h1>

      <div>
        <div>
            <div className="flex flex-col items-center justify-center mb-5 ">
            <BeakerIcon className="h-6 w-6 text-gray-500" />
                <h2> Examples</h2>
            </div>
            <div className="space-y-2">
                <p className="infoText"> "Plan a tour"</p>
                <p className="infoText"> "Explain about rocket propulsions"</p>
                <p className="infoText"> "Brainstorm idea for 5-years old kid birthday"</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
