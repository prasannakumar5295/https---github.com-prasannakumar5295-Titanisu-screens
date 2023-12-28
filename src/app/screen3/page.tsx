"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Search from '../screen3/search';
 import Sidebar from './sidebar'
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Content from '../content2.json'; 
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';


export default function page() {
  const containerStyle = {
    display: 'flex',
    gap: '8px', // Adjust the gap as needed
  };

  const buttonStyle = {
    display: 'flex',
   flexDirection: 'column', 
   alignItems: 'center',
    gap: '8px', 
    cursor: 'pointer',
    
  };
  

  return (
    <div>
        <div>
            <Sidebar/>
        </div>
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
         
         {Content.questions.map((item) => (

    <Card sx={{ display: 'flex' , width: '80%',overflow:'auto',position:'absolute',left:'18%',top:'20%',padding:'15px' }}>
      
      
      <CardContent sx={{ flex: '0 2 auto' }}>
      <div style={{ display: 'flex', alignItems: 'start',flexDirection:'column', marginBottom: '12px' }}>
      <img src={item.UserProfile1} alt="User Profile" style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '12px' }} />
    <Typography variant="h6" component="div" gutterBottom>
                {item.Question1}
              </Typography>
              <button className="flex items-center mb-3 px-2 py-3 bg-gray-200 rounded-full cursor-pointer">
                    {/* Edit Command Icon (Pencil Symbol with Text) */}
                    <svg className="flex-shrink-0 w-4 h-4 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                      <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                      <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                    </svg>

                    <span className="text-sm">Edit command</span>
             </button>
              </div>
        <Typography component="div"  sx={{ fontSize: '15px'  }}>
          
        {item.Answer1}
          </Typography>
          <div style={containerStyle}>
      <Button style={{display: 'flex',
   flexDirection: 'column', 
   alignItems: 'center',
    gap: '8px', 
    cursor: 'pointer',
    }}>
        <ThumbUpIcon />
        
      </Button>

      <Button style={{display: 'flex',
   flexDirection: 'column', 
   alignItems: 'center',
    gap: '8px', 
    cursor: 'pointer',
    }}>
        <ThumbDownIcon />

      </Button>

      <Button style={{display: 'flex',
   flexDirection: 'column', 
   alignItems: 'center',
    gap: '8px', 
    cursor: 'pointer',
    }}>
        <FileCopyIcon  />
        </Button>
        <Button
      variant="contained"
      style={{"position":"absolute","right":"15%","background":"black"}}

      color="primary"
      startIcon={<RefreshIcon />}
          >
      
    </Button>
    </div>
</CardContent>
</Card>
    )
    )
    }
    
    <div className="bg-white-500 p-4 text-black fixed  bottom-0 left-60  w-3/4 z-50">
        <Search />
    </div>
    </div>
  );
}
