"use client";

import { useState, createContext } from "react";
import { Box } from "@mui/material";
import Footer from "@content/main-page/footer/Footer";
import Header, { Anchor } from "@content/main-page/header/Header";

import { style } from "@/content/main-page/body/style";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

type ExplorePropType = {
  children: React.ReactNode;
};

const Explore = ({ children }: ExplorePropType) => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  // #find -> for SSR make this value false for first render
  // if (!matches) return <WorkInProgress />; TNCCC24000303982

  return (
    <Box sx={style.background}>
      <Header state={state} toggleDrawer={toggleDrawer} />
      <main style={style.mainContent}>{children}</main>
      <Footer />
    </Box>
  );
};

export default Explore;
