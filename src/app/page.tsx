"use client";
import Sidebar from './sidebar';
import { useState } from 'react';
import chatbotData from './chat-botdata.json';
import Middle from './middle'
export default function Home() {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    const matchingEntries = chatbotData.pairs.filter((entry) =>
      entry.question.toLowerCase().includes(question.toLowerCase())
    );

    const updatedHistory = [
      ...chatHistory,
      {
        type: 'user',
        text: question,
      },
      ...matchingEntries[0]?.answer
        ? [
            {
              type: 'bot',
              text: matchingEntries[0].answer,
              suggestions: matchingEntries[0].suggestions,
              videos: matchingEntries[0].videos,
              links: matchingEntries[0].links,
            },
          ]
        : [],
    ];

    setChatHistory(updatedHistory);
    setQuestion('');
    setIsSearching(true);

  };

  const renderTabContent = () => {
  switch (activeTab) {
    case 'suggestions':
      return (
        <div className="space-y-4">
          {chatHistory
            .filter((chatItem) => chatItem.type === 'bot' && chatItem.suggestions)
            .map((chatItem, index) => (
              <div key={index}>
                {chatItem.suggestions.map((suggestion, innerIndex) => (
                  <div
                    key={innerIndex}
                    className="bg-white text-gray-900 px-2 py-2 rounded-md cursor-pointer border border-gray-300"
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            ))}
        </div>
      );
    case 'videos':
      return (
        <div className="space-y-8 rounded-lg p-4 bg-200">
          {chatHistory
            .filter((chatItem) => chatItem.type === 'bot' && chatItem.videos)
            .map((chatItem, index) => (
              <div key={index}>
                {chatItem.videos.map((video, innerIndex) => (
                  <div
                    key={innerIndex}
                    className="bg-white text-gray-900  rounded-md cursor-pointer border border-gray-300"
                  >
                    {video.title} - {video.url}
                  </div>
                ))}
              </div>
            ))}
        </div>
      );
    case 'links':
      return (
        <div className="space-y-4 rounded-xl">
          {chatHistory
            .filter((chatItem) => chatItem.type === 'bot' && chatItem.links)
            .map((chatItem, index) => (
              <div key={index}>
                {chatItem.links.map((link, innerIndex) => (
                  <div
                    key={innerIndex}
                    className="bg-white text-gray-900 p-4 rounded-md cursor-pointer border border-gray-300"
                  >
                    {link}
                  </div>
                ))}
              </div>
            ))}
        </div>
      );
    default:
      return null;
  }
};

  console.log("chat",chatHistory)
  return (
    <div>
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-between p-40">
        <div className="flex flex-col space-y-2 max-w-md w-full mx-auto">
        {!isSearching && (
          <div className="flex flex-col space-y-2 max-w-md w-full mx-auto">
            <Middle />
          </div>
        )}
          {chatHistory.map((chatItem, index) => (
            
            <div
              key={index}
              className={`rounded-lg p-4 ${
                chatItem.type === 'user'
                  ? 'bg-gray-280 text-black self-start'
                  : 'bg-gray-300 text-black self-start'
              }`}
            >
              {chatItem.type === 'user' && (
                <div className="flex items-center">
                  <div className="relative w-9 h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-blue-400 mr-2">
                    <svg
                      className="absolute w-12 h-12 text-gray-400 -left-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h6>{chatItem.text}</h6>
                </div>
              )}

              {chatItem.type === 'bot' && (
                <div className="mb-2">
                  <h6 className="font-extrabold text-xl">BOSTAN.AI</h6>

                  {chatItem.text}
                  {chatItem.suggestions && (
                    <div className="bg-gray-300 p-4 rounded-lg border-black">
                      <button
                        className={`px-6 py-3 ${
                          activeTab === 'suggestions'
                            ? 'bg-white text-black rounded-xl'
                            : 'bg-gray-300 text-black'
                        }`}
                        onClick={() => setActiveTab('suggestions')}
                      >
                        Suggestions
                      </button>
                      {chatItem.videos && (
                        <button
                          className={`px-6 py-3 ${
                            activeTab === 'videos'
                              ? 'bg-white text-black rounded-xl'
                              : 'bg-gray-300 text-black'
                          }`}
                          onClick={() => setActiveTab('videos')}
                        >
                          Videos
                        </button>
                      )}
                      {chatItem.links && (
                        <button
                          className={`px-6 py-3 ${
                            activeTab === 'links'
                              ? 'bg-white text-black rounded-xl'
                             : 'bg-gray-300 text-black'
                          }`}
                          onClick={() => setActiveTab('links')}
                        >
                          Links
                        </button>
                      )}
<button>
                  <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Zm-3 15H4.828a1 1 0 0 1 0-2h6.238a1 1 0 0 1 0 2Zm0-4H4.828a1 1 0 0 1 0-2h6.238a1 1 0 1 1 0 2Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </button>
                <button>

                  <svg className="w-6 h-6 text-gray-500 dark:text-white bg-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                  </svg>
                </button>
                <button>

                  <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M11.955 2.117h-.114C9.732 1.535 6.941.5 4.356.5c-1.4 0-1.592.526-1.879 1.316l-2.355 7A2 2 0 0 0 2 11.5h3.956L4.4 16a1.779 1.779 0 0 0 3.332 1.061 24.8 24.8 0 0 1 4.226-5.36l-.003-9.584ZM15 11h2a1 1 0 0 0 1-1V2a2 2 0 1 0-4 0v8a1 1 0 0 0 1 1Z" />

                  </svg>
                </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            
          ))}
          <div className="mt-8">{renderTabContent()}</div>
        </div>
        
        <div className="bg-white-500 p-4 text-black fixed bottom-0 left-90 w-1/2 z-40">
          <div className="flex items-center space-x-2 mt-8 relative">
            <input
              type="text"
              placeholder="Tell me what do you want?"
              id="voice-search"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="bg-white border border-blue-400 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4 rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-16" // Adjusted styling here
              required
            />

            <button onClick={handleSearch}>
              <svg
                className="bg-blue-800 w-12 h-12 text-white dark:text-white rotate-90 rounded-full"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                />
              </svg>
            </button>
          </div>
        </div>

        
      </main>
    </div>
  );
}




