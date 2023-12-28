"use client"
import React, { Fragment } from 'react';
import Search from './search';
import Sidebar from './sidebar'
const page = () => {
  return (
    <div> 
      <Sidebar />
      <div className="flex h-screen justify-center items-center bg-gray-200 pb-4 p-4">
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
        <div className="bg-gray-100 p-2 rounded-xl shadow-md w-full max-w-5xl border-4 border-indigo-400">
          {/* <div className="bg-gray-100 p-4  w-full max-w-4xl border-2 "> */}
                  {/* Question 1 */}
          <div className="mb-4">
            {/* User Profile, Question, and Edit Button Container */}
            <div className="flex items-center justify-between  mb-6">
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/6.jpg"
                  alt="User Profile"
                  className="rounded-full w-10 h-10 mr-4"
                />
                <div>
                  <p className="font-bold text-sm  ">
                    Explain what product thinking is
                  </p>
                  <div className="p-2">
                  <button className="flex items-center mb-3 px-2 py-3 bg-white rounded-full cursor-pointer">
                    {/* Edit Command Icon (Pencil Symbol with Text) */}
                    <svg className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                      <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                      <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                    </svg>

                    <span className="text-sm">Edit command</span>
                  </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Answer Container with Pure White Background */}
            <div className="bg-white text-sm rounded-sm p-4 mb-3 ">
              {/* Your provided answer for the first question */}
              Product thinking is an approach or mindset that focuses on creating and delivering
              products that truly solve customer problems and meet their needs. It involves
              understanding the target audience, their pain points, and the goals they want to achieve.
              Product thinking goes beyond just building features or functionalities; it involves
              considering the entire user journey and experience.
              <br />
              <span className="font-bold">1.User needs:</span> What are the specific problems or challenges that users face? How can the
              product address those needs effectively?
              <br />
              <span className="font-bold"> 2.Value Proposition:</span> What unique value does the product offer to users? How does it
              differentiate itself from existing solutions?
              <br />
              <span className="font-bold">3.User Experience:</span>  How can the product provide a seamless and intuitive experience for
              users? How can it make their lives easier or more enjoyable?
              <br />
              <span className="font-bold">4.Iterative Development:</span>  How can the product be continually improved and refined based
              on user feedback and market insights?
              <br />
              <span className="font-bold">5.Business Viability:</span> How can the product generate value for the business? What are the
              revenue streams and growth opportunities?
              <br />
              Product thinking encourages a holistic view of the product development process,
              involving cross-functional collaboration among designers, developers, marketers, and
              stakeholders. It encourages experimentation, data-driven decision-making, and a focus on
              delivering value to the end-users.
              <br />
              By adopting a product thinking approach, organizations can create products that are
              user-centered, innovative, and sustainable, leading to greater customer satisfaction,
              business growth, and competitive advantage.


              <div className="flex items-center space-x-4 mt-4 bg-white ">
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
                <div className="left-10 space">
                <button className="space-y-8">
                  
                  <svg className="w-8 h-8 space-x-8 text-gray-800 dark:text-green space1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
                 </svg>
                
                </button>
                </div>

              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/6.jpg"
                  alt="User Profile"
                  className="rounded-full w-8 h-8 mr-4"
                />
                <div>
                  <p className="font-bold text-sm">
                    What is MVP in a product context?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="bg-white-500 p-4 text-black fixed  bottom-0 left-60  w-3/4 z-50">
        <Search />
      </div>
    </div>
  )
};

export default page;