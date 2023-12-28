"use client";
import Sidebar from './sidebar';
import { useState } from 'react';
import chatbotData from './caht-botdata.json';
import Image from 'next/image'

export default function Home() {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSearch = () => {
    const matchingEntries = chatbotData.pairs.filter((entry) =>
      entry.question.toLowerCase().includes(question.toLowerCase())
    );

    // Update the chat history with user's question and chatbot's answer
    setChatHistory([...chatHistory, { type: 'user', text: question }, ...matchingEntries[0]?.answer ? [{ type: 'bot', text: matchingEntries[0].answer }] : []]);
    setQuestion('');
  };

  console.log("chatHistory", chatHistory);

  return (
    <div>
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <div className="flex flex-col space-y-4 max-w-md w-full mx-auto">
      <div >
           <button style={{ "color": "#3f48cc", "borderBlockColor": "#3f48cc" }} className="fixed top-4 right-4 bg-white text-sm-blue px-7 py-2 rounded-full cursor-pointer">
             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
               <svg
                 style={{ "color": "#3f48cc" }}
                 className="w-[16px] h-[16px] text-gradient dark:text-white"
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor"
                 viewBox="0 0 22 21"
               >
                <path d="M12.356 5.435 1.938 16.384a.5.5 0 0 0 .018.707l2.9 2.757a.5.5 0 0 0 .706-.018L15.978 8.882l-3.622-3.447Zm7.681-.819a.5.5 0 0 0-.018-.706l-2.9-2.757a.5.5 0 0 0-.707.017l-2.68 2.817 3.622 3.446 2.683-2.817Zm-2.89 12.233-1 .025-.024-1a1 1 0 1 0-2 .05l.025 1-1 .024a1 1 0 0 0 .05 2l1-.025.025 1a1 1 0 1 0 2-.05l-.025-1 1-.024a1 1 0 1 0-.05-2h-.001ZM2.953 9.2l.025 1a1 1 0 1 0 2-.05l-.025-1 1-.025a1 1 0 1 0-.05-2l-1 .025-.025-1a1 1 0 0 0-2 .049l.025 1-1 .025a1 1 0 0 0 .05 2l1-.024Zm15.07 2.626-2 .05.05 1.999 2-.05-.05-1.999ZM11.752.978l-2 .05.05 2 2-.05-.05-2Zm-2.95 2.075-2 .05.05 1.999 2-.05-.05-2ZM5.753 1.127l-1.999.05.05 2 1.999-.05-.05-2Zm15.194 7.625-2 .05.05 2 2-.05-.05-2Zm.125 4.998-2 .05.05 2 2-.05-.05-2Z" />
               </svg>
             </div>
             New Chat
           </button>
         </div> 
        
          {chatHistory.map((chatItem, index) => (
            <div
              key={index}
              className={`rounded-lg p-4 ${chatItem.type === 'user' ? 'bg-white text-black self-start' : 'bg-white text-gray-800 self-start'}`}
            >
              {/* Display the logo for bot responses */}
              {chatItem.type === 'bot' && (
                <div className="mb-2">
                  <Image
          
            src="/logo.png"
            alt="Next.js Logo"
            width={100}
            height={40}
            
            priority
          />
              
                </div>
              )}

              {/* Display the answer text */}
              {chatItem.text}
            </div>
          ))}
        </div>

        {/* <div className="flex items-center space-x-4 mt-8">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 p-2 border rounded-md"
          />
          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Search
          </button>
        </div> */}
         <div className="bg-white-500 p-4 text-black fixed  bottom-0 left-60  w-3/4 z-50">
                <div className="flex items-center space-x-4 mt-8">
          <input
            type="text"
            placeholder="Tell me what do you want?"
            id="voice-search"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4 rounded-3xl  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-6"
            
          >
            <svg className="w-5 h-5 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" />
          </svg>
          </button>
        </div>
        
          {/* <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
            </svg>
        */}
        <button onClick={handleSearch}>
            <svg className="bg-gray-200 w-8 h-8 text-blue-500 dark:text-blue-500  rotate-90  rounded-full " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
    </svg>
</button>
</div>
  </main>
    </div>
  );
}
