// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Typography, Button } from '@mui/material';

// function Banner() {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         backgroundImage: 'url(https://example.com/your-image.jpg)', // Replace with your image URL
//         backgroundSize: 'cover',  // Ensures the image covers the container
//         backgroundPosition: 'center', // Keeps the image centered
//         height: '100vh',  // Full screen height
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//         textAlign: 'center',
//         padding: '20px',
//         position: 'relative',
//       }}
//     >
//       <Typography
//         variant="h3"
//         sx={{
//           color: 'white',
//           fontWeight: 'bold',
//           mb: 2,
//           textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)',
//           fontSize: { xs: '2rem', sm: '3rem' }, // Responsive font size
//         }}
//       >
//         Saylani Loan App
//       </Typography>

//       <Typography
//         variant="h6"
//         sx={{
//           color: 'white',
//           mb: 3,
//           textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
//           fontSize: { xs: '1rem', sm: '1.5rem' }, // Responsive font size
//         }}
//       >
//         Get easy and quick loans at your fingertips.
//       </Typography>

//       <Button
//         variant="contained"
//         color="primary"
//         sx={{
          
//           fontSize: { xs: '14px', sm: '18px' },
//           padding: { xs: '10px 20px', sm: '15px 32px' },
//           borderRadius: '5px',
//           boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
//           transition: 'all 0.3s ease-in-out',
//           '&:hover': {
//             backgroundColor: '#006F8E',
//           },
//         }}
//         onClick={() => navigate('/LoanForm')}
//       >
//         Apply for Loan
//       </Button>
//     </Box>
//   );
// }

// export default Banner;


import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import {CircularProgress } from '@mui/material';
import CustomLoader from '../../Utils/Constant/CustomLoader/CustomLoader';





const Banner = () => {
 
  const navigate = useNavigate();

  const [loading,Setloading]= useState(false)


  useEffect(()=>{
    setTimeout(() => {
      Setloading(true); // Stop loading after 2 seconds
    }, 2000);

  },[])


  return (
    <>
    {
      loading ?  
    <><Box
            sx={{
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#fff',
              position: 'relative',
              px: 2,
            }}
          >
            {/* Content */}
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                }}
              >
                Saylani Loan Application
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  mb: 4,
                  maxWidth: '600px',
                  mx: 'auto',
                  fontFamily: 'Roboto, sans-serif',
                  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
                }}
              >
                Apply for quick and easy loans at your fingertips.
              </Typography>
              <Button onClick={() => navigate('/LoanForm')}
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  width: '250px',
                  px: 4,
                  py: 1.5,
                  borderRadius: '25px',
                  fontSize: '1rem',
                  backgroundColor: '#242535',
                  '&:hover': { backgroundColor: '#4caf50', color: "black" },
                }}
              >
                Apply for Loan
              </Button>
            </Box>
            
          </Box></>
     :  (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CustomLoader/>
      </Box>
    )
  }


    </>
    
   
  );
};


export default Banner;




// MainPage
