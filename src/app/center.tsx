import React from 'react'
import Image from 'next/image'
const center = () => {
  return (
    <div>
        <div className="text-center mt-1"> {/* Adjusted top margin */}
        <div className="p-2 relative flex place-items-center before:absolute before:h-[100px] ...">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo.png"
            alt="Next.js Logo"
            width={170}
            height={37}
            priority
          />
        </div>

          <h2 className="text-2xl font-bold mb-2">Welcome to Titanisu !</h2>
          <p className="text-sm text-gray-700">
            Titanisu is your personal AI-powered assistant, ready to help you <br /> navigate your day and provide valuable insights. We're here to make <br /> your life easier. Let's get started on this exciting journey together!
          </p>
        </div>
        <div className="text-left mt-4">

          <div className="text-left mt-4 flex items-start space-x-4">
            <div >
              <svg className="w-5 h-5 text-blue-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
              </svg>
            </div>

            <div >
              <p className="text-sm font-bold mb-2">Natural Language Conversations</p>
            </div>
          </div>

          <div className="text-left mt-4 flex items-start space-x-4">
            <div >
              <svg className="w-5 h-5 text-blue-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16.5A2.493 2.493 0 0 1 6.51 18H6.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .921-3.182 2.477 2.477 0 0 1 1.875-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 11 3.5m0 13v-13m0 13a2.492 2.492 0 0 0 4.49 1.5h.01a2.467 2.467 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.479 2.479 0 0 0-1.875-3.344A2.5 2.5 0 0 0 13.5 1 2.5 2.5 0 0 0 11 3.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M19 8.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185" />
              </svg>
            </div>

            <div >
              <p className="text-sm font-bold mb-2">Knowledge Base</p>
            </div>
          </div>

          <div className="text-left mt-4 flex items-start space-x-4">
            <div >
              <svg className="w-5 h-5 text-blue-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
              </svg>


            </div>

            <div >
              <p className="text-sm font-bold mb-2">Personalized Recommendations</p>
            </div>
          </div>

          <div className="text-left mt-4 flex items-start space-x-4">
            <div >
              <svg className="w-5 h-5 text-blue-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
              </svg>

            </div>

            <div >
              <p className="text-sm font-bold mb-2">Seamless Integrations</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default center