import { FaAlignLeft, FaUserCircle, FaCaretDown, FaSearch, FaBell} from "react-icons/fa";
import Logo from "./Logo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, clearStore } from "../features/user/userSlice";
import HelpIcon from '@mui/icons-material/Help';
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
  InputBase,
  IconButton,
  Badge,
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
              <Box sx={{ display: 'flex', alignItems: 'center', color: '#333' }}>
  <HelpIcon sx={{ mr: 1 }} />
  <Typography>Help</Typography>
</Box>
<Box className="search-bar" sx={{ display: { xs: "none", sm: "block" }, position: "relative", ml: "3rem", color: '#333' }}>
  <Box sx={{ position: "absolute", top: "50%", left: "8px", transform: "translateY(-50%)" }}>
    <FaSearch />
  </Box>
  <InputBase placeholder="Search" sx={{ pl: "2.5rem", pr: "0.5rem", width: "300px", borderRadius: "5px", color: '#333' }} />
</Box>

              <Box className="notifications-icon" sx={{ display: { xs: "none", sm: "block" }, position: "relative", ml: "2rem" }}>
                <IconButton color="primary" sx={{ p: 1 ,mr: '3rem'}}>
                  <Badge badgeContent={4} color="secondary">
                    <FaBell fontSize="1.5rem" />
                  </Badge>
                </IconButton>
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