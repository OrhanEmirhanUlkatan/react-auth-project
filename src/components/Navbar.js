import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography
} from "@material-ui/core";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Login
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Register
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
