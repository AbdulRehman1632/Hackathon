import React from 'react'
import {Box} from "@mui/material"
import "./CustomLoader.css"

const CustomLoader = () => {
    return (
        <div>
               <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                animation: 'fadeIn 1.5s ease-out',
              }}
            >

              <Box
                sx={{
                  width: 80,
                  height: 80,
                  border: '8px solid transparent',
                  borderTop: '8px solid #4caf50',
                  borderRadius: '50%',
                  animation: 'spin 1.5s linear infinite',
                }}
              />
            </Box>
          
        </div>
      )
}

export default CustomLoader
