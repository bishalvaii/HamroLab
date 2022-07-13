import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, clearStore } from "../features/user/userSlice";
import {
  AppBar,
  Button,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
  Link,
} from "@mui/material";
import Wrapper from "../assets/wrappers/Navbar";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#ffffff",
      contrastText: "#f5f5f5",
    },
  },
});

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <AppBar position='absolute' color="neutral">
          <Toolbar>
            <Box className="nav-center" sx={{ flexGrow: 1, display: "flex", width: '90vw', alignItems: 'center', justifyContent: 'space-between' }}>
              <Button type="button" className="toggle-btn" onClick={toggle}>
                <FaAlignLeft fontSize="1.75rem" />
              </Button>

              <Box sx={{ mx: "auto" }}>
                
              <Link href="/">
                <Box sx={{     display: { xs: "block", sm: "none", lg: 'block', } }}>
                  <Logo />
                </Box>
              </Link>
                <Typography
                  sx={{ display: { xs: "none", lg: "block", xl: "none" } }}
                  color="black"
                  variant="h4"
                >
                  Dashboard
                </Typography>
              </Box>
            </Box>

            <Box className="btn-container" sx={{ m: "30px 4px" }}>
              <Button
                type="button"
                color="success"
                variant="contained"
                sx={{
                  width: "135px",
                  height: "40px",
                  fontSize: "11px",
                  p: 2,
                  
                }}
                onClick={() => setShowLogout(!showLogout)}
              >
                <FaUserCircle e fontSize="large" />
                {user?.name}
                <FaCaretDown fontSize="medium" />
              </Button>
            </Box>

            <Box className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
              <Button
                type="button"
                color='primary'
                className='dropdown-btn'
                onClick={() => dispatch(clearStore("Logging out..."))}
              >
                logout
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Wrapper>
  );
};
export default Navbar;