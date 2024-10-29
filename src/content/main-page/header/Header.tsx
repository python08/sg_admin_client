"use client"

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Image from "next/image";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  displayFlexAlignCenter,
  webkitTapHighlightColor,
} from "@global/global.style";
import { ButtonBase } from "@mui/material";

import logo from "../../../../public/assests/logo.svg";

export type Anchor = "top" | "left" | "bottom" | "right";

type HeaderType = {
  state: any;
  toggleDrawer: any;
  filterDrawer?: boolean;
};

const Header = ({ state, toggleDrawer, filterDrawer }: HeaderType) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);

  // FP dark mode feature
  // const theme = useTheme();
  // const { palette } = theme;
  // const { mode } = palette;
  // const colorMode = useContext(ColorModeContext);
  // const { toggleColorMode } = colorMode;
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // app bar shadow
  // const setMode = (globalTheme: string) => {
  //   if (globalTheme === "dark")
  //     return "0px 3px 1px -2px rgb(255 255 255 / 20%), 0px 2px 2px 0px rgb(255 255 255 / 14%), 0px 1px 5px 0px rgb(255 255 255 / 12%)";

  //   return "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)";
  // };

  // DRAWER

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Reviews", "Gallery", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="relative"
        elevation={2}
        sx={{
          background: "white",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box sx={displayFlexAlignCenter} justifyContent="space-between">
            <Box sx={{ height: "60px", width: "130px", position: "relative" }}>
              <ButtonBase component="div">
                <Image
                  src={logo.src}
                  alt="swad_gharana"
                  height={60}
                  width={110}
                  onClick={() => router.push("/")}
                  style={{ cursor: "pointer", ...webkitTapHighlightColor }}
                />
              </ButtonBase>
            </Box>

            <Box>
              {/* <IconButton sx={{ ml: 1 }} onClick={toggleColorMode}>
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton> */}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <SwipeableDrawer
        anchor={filterDrawer ? "bottom" : "left"}
        open={state[filterDrawer ? "bottom" : "left"]}
        onClose={toggleDrawer(filterDrawer ? "bottom" : "left", false)}
        onOpen={toggleDrawer(filterDrawer ? "bottom" : "left", true)}
      >
        {list(filterDrawer ? "bottom" : "left")}
      </SwipeableDrawer>
    </>
  );
};

export default Header;
