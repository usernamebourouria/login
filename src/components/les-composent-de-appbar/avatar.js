// import { Avatar, Button, Menu, MenuItem, Typography } from '@mui/material';

// import React, { useState } from 'react';

// const Avatarbar = () => {
//     // const [ouvre, setOpen] = useState(false)
//     const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//     return (
//         <Button
//         id="demo-positioned-button"
//         aria-controls={open ? 'demo-positioned-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//          >
//             <Typography mr={2} varient="h6" color="#191970"> samy bendayka</Typography>

//             <Avatar mr={2}
//                 sx={{ width: 40, height: 40 }}
//                 src="bendayha.png"
//                 onClick={e => setOpen(true)}

//           >
//              </Avatar>
//              <Menu
//         id="demo-positioned-menu"
//         aria-labelledby="demo-positioned-button"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>

//         </Button>

//     )
// }
// export default Avatarbar

import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Avatarbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Button onClick={handleClick}>
          <Typography mr={2} varient="h6" color="#191970">
            {" "}
            admin
          </Typography>

          <Avatar
            mr={2}
            sx={{ width: 40, height: 40 }}
            //src="bendayha.png"
          ></Avatar>
        </Button>
      </Box>
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div className="logout">
          <MenuItem>Logout</MenuItem>
        </div>
      </Menu>
    </div>
  );
}
