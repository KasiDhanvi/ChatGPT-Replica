import { BeakerIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { BoltSlashIcon } from "@heroicons/react/24/solid";
import { BoltIcon, CloudLightningIcon } from "lucide-react";

const HomePage = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen px-2 text-yellow-500">
      <h1 className="text-5xl font-bold mb-20">ChatGPT Replica</h1>

      <div className="flex space-x-3 text-center">
        <div>
            <div className="flex flex-col items-center justify-center mb-5 ">
            <BeakerIcon className="h-6 w-6 text-gray-500" />
                <h2> Examples</h2>
            </div>
            <div className="space-y-2">
                <p className="infoText"> "Plan a tour"</p>
                <p className="infoText"> "Explain about AI"</p>
                <p className="infoText"> "Brainstorm idea for 5-years old kid birthday"</p>
            </div>
        </div>

        <div>
            <div className="flex flex-col items-center justify-center mb-5 ">
            <CloudLightningIcon className="h-6 w-6 text-gray-500" />
                <h2> Capabilities</h2>
            </div>
            <div className="space-y-2">
                <p className="infoText"> "Change the ChatGPT Model to use"</p>
                <p className="infoText"> "Messages are stored in Firebase's Firestore"</p>
                <p className="infoText"> "Hot Toast notifications when ChatGPT is thinking "</p>
            </div>
        </div>

        <div>
            <div className="flex flex-col items-center justify-center mb-5 ">
            <ExclamationTriangleIcon className="h-6 w-6 text-gray-500" />
                <h2> Limitations</h2>
            </div>
            <div className="space-y-2">
                <p className="infoText"> "May occasionally give incorrect answer"</p>
                <p className="infoText"> "May occasionally produce harmful instructions"</p>
                <p className="infoText"> "Limited knowledge of world & events after 2021"</p>
            </div>
        </div>

      </div>
    </div>
  );
}

export default HomePage;
