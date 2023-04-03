// To Do
// Add dynamique error badge
import { Badge, IconButton, Tooltip } from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";

const Error = () => {
  return (
    <Tooltip title="No Error" sx={{ display: { xs: "none", sm: "block" } }}>
      <IconButton>
        <Badge badgeContent={0} color="error">
          <ErrorIcon sx={{ fontSize: 38, color: "#191970" }} />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
export default Error;
