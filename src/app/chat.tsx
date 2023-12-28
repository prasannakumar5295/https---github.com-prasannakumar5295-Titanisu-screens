"use client"
import React,{ useState } from 'react'


const chat = () => {
  const [copied, setCopied] = useState(false);
//  const text ="Product thinking is a mindset and approach to problem-solving that is centered around creating valuable and successful products. It goes beyond just developing features or solutions; instead, it focuses on understanding the needs and desires of users, identifying problems, and delivering solutions that provide real value.
// Here are some key aspects of product thinking:
//  User-Centric Focus: Understanding the needs, behaviors, and preferences of users is at the core of product thinking. It involves continuous engagement with users through research, feedback, and observation to gain insights into their challenges and aspirations.
//  Problem Solving: Rather than jumping straight to solutions, product thinking emphasizes the identification and understanding of problems. This involves asking questions like "What problem are we trying to solve?" and "Is this the right problem to solve?" before diving into the development phase.
//  Iterative and Agile Approach: Product thinking often involves an iterative and agile development process. It encourages continuous testing, learning, and refinement of the product based on user feedback and changing market conditions.Cross-Functional Collaboration: Successful product thinking requires collaboration between various disciplines such as design, development, marketing, and business. Cross-functional teams work together to bring a holistic perspective to the product development process.
//  Outcome-Oriented: Rather than focusing solely on output (features delivered), product thinking is outcome-oriented. It measures success based on the impact a product has on users and the achievement of business goals.
//  Data-Informed Decision Making: Data plays a crucial role in product thinking. It involves collecting and analyzing data to make informed decisions, track user behavior, and measure the success of product features.";
  
 return (
    <div className="mx-auto max-w-screen-lg">
      <div className="bg-white-500 p-4 text-black">
        <h2 className="text-3xl font-bold text-gray-800">Info Desk</h2>
      </div>
      
      <div className="bg-white-500 p-3 text-black">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <p className="bg-white text-black font-sans py-4 px-9 rounded-bl-lg rounded-tr-md rounded-br-lg">
              {/* {text} */}
             </p>
          </div>
          <div className="col-span-2 flex items-top ">
            <div className="grid grid-cols-3 gap-2">
              <div className="p-4">
              <button >
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z" />
                </svg>
                          <i className="fas fa-clipboard-check mr-2"></i> Copied
          </button>
              </div>
              <div className="p-4">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.008 8.714c1-.097 1.96-.45 2.792-1.028a25.112 25.112 0 0 0 4.454-5.72 1.8 1.8 0 0 1 .654-.706 1.742 1.742 0 0 1 1.65-.098 1.82 1.82 0 0 1 .97 1.128c.075.248.097.51.065.767l-1.562 4.629M4.008 8.714H1v9.257c0 .273.106.535.294.728a.99.99 0 0 0 .709.301h1.002a.99.99 0 0 0 .71-.301c.187-.193.293-.455.293-.728V8.714Zm8.02-1.028h4.968c.322 0 .64.08.925.232.286.153.531.374.716.645a2.108 2.108 0 0 1 .242 1.883l-2.36 7.2c-.288.813-.48 1.354-1.884 1.354-2.59 0-5.39-1.06-7.504-1.66" />
                </svg>
              </div>
              <div className="p-4">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.992 11.287c-1 .097-1.96.45-2.792 1.029a25.118 25.118 0 0 0-4.454 5.721 1.803 1.803 0 0 1-.655.705 1.742 1.742 0 0 1-1.648.096 1.786 1.786 0 0 1-.604-.457 1.874 1.874 0 0 1-.432-1.439l1.562-4.626m9.023-1.03H19V2.03c0-.273-.106-.535-.294-.728A.99.99 0 0 0 17.997 1h-1.002a.99.99 0 0 0-.71.301 1.042 1.042 0 0 0-.293.728v9.258Zm-8.02 1.03H3.003c-.322 0-.64-.08-.925-.233a2.022 2.022 0 0 1-.716-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.2C3.769 1.54 3.96 1 5.365 1c2.59 0 5.39 1.06 7.504 1.66" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default chat;