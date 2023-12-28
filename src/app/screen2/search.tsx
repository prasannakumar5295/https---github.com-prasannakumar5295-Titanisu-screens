import {useState} from "react"
const Search = () => {
  const [isRecording, setRecording] = useState(false);

  const startRecording = () => {
    // Logic to start recording (you can add your own implementation)
    setRecording(true);
  };

  const stopRecording = () => {
    // Logic to stop recording (you can add your own implementation)
    setRecording(false);
  };

    return (
        <form className="flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Tell me what do you want?"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4 rounded-3xl  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <button
            type="button"
            className={`absolute inset-y-0 right-0 flex items-center pr-8 ${isRecording ? 'recording' : ''}`}
            onClick={() => (isRecording ? stopRecording() : startRecording())}
  
          >
            <svg className="w-5 h-5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
          </svg>
          </button>
        </div>
        
          {/* <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
            </svg> */}
                <svg className="bg-gray-200 w-8 h-8 text-blue-500 dark:text-blue-500  rotate-90  rounded-full " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
    </svg>

       </form>
    );
  };
  
  export default Search;
  