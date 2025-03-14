// // import React from 'react'
// // import { Link, Outlet } from 'react-router-dom';

// // const Dashboard = () => {
// //   return (
// //     <div>
// //         <div>

// // <div style={{ display: 'flex', minHeight: '100vh' }}>
// //       {/* Sidebar */}
// //       <nav
// //         style={{
// //           width: '250px',
// //           background: '#f4f4f4',
// //           padding: '20px',
// //           boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
// //         }}
// //       >
// //         <h2 style={{color:"#000"}}>Dashboard</h2>
// //         <ul style={{ listStyle: 'none', padding: 0 }}>
// //         <li style={{ marginBottom: '10px' }}>
// //             <Link to="dashboard">Dashboard</Link>
// //           </li>
// //           <li style={{ marginBottom: '10px' }}>
// //             <Link to="profile">Profile</Link>
// //           </li>
// //           <li style={{ marginBottom: '10px' }}>
// //             <Link to="products">Products</Link>
// //           </li>
// //           <li style={{ marginBottom: '10px' }}>
// //             <Link to="orders">Orders</Link>
// //           </li>
// //         </ul>
// //       </nav>

// //       {/* Main Content */}
// //       <main style={{ flex: 1, padding: '20px' }}>
// //         <Outlet /> 
// //       </main>
// //     </div>
      
// //     </div>
      
// //     </div>
// //   )
// // }

// // export default Dashboard


// import React, { useEffect } from 'react'
// import { GetReq } from '../../api/axios.js'

// const Dashboard = () => {
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await GetReq("/User");  
//             const AllData = response?.data?.data
//             console.log(AllData)
            
//           } catch (error) {
//             console.error("Error fetching data:", error);  
//           }
//         };
      
//         fetchData();  // Call the async function
//       }, []);
      

//   return (
//     <div>
//         {/* {
//             AllData.map((item,index)=>{

//             })
//         } */}
      
//     </div>
//   )
// }

// export default Dashboard



import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme),
        },
      },
    ],
  }));

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listMenu = [
    {
      title: "Request",
      icon: <MarkEmailUnreadIcon />,
      path: "/dashboard/request", 
    },
    {
      title: "Pending",
      icon: <PendingActionsIcon />,
      path: "/dashboard/pending", 
    },
    {
      title: "Approved",
      icon: <AssignmentTurnedInIcon />,
      path: "/dashboard/approved", 
    },
   
  ];

  return (

    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div">
            Admin panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        <Box sx={{ display: "flex", justifyContent: "center",alignItems: "center", padding: "10px" }}>
        <Typography variant="h5" noWrap component="div">
            LOGO.
          </Typography>
        </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listMenu.map((text, index) => (
            <ListItem disablePadding key={index}>
              <ListItemButton component={Link} to={text.path}>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: (theme) => theme.palette.background.default,
          padding: 3,
          marginLeft: open ? `${drawerWidth}px` : 0,
          transition: "margin 0.3s",
        }}
      >
        <div className="wrapper">
        <Outlet /> 

        </div>
      </Box>
    </Box>
  );
};

export default Dashboard;

