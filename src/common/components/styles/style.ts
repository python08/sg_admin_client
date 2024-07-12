import wip from "@common/temp/images/wip.svg";

export const LoaderStyle = {
  color: "#fff",
  zIndex: (theme: any) => theme.zIndex.drawer + 1,
  position: "relative",
};

export const CardStyle = { maxWidth: 345, marginTop: "1.5rem" };

export const WhatsappShareStyle = {
  borderRadius: "20px",
  height: "2.5rem",
  width: "90%",
  color: "#2ed56c",
  border: "1px solid #2ed56c",
  borderBlockColor: "#2ed56c",
  fontSize: "0.8rem",
};

export const WipBg = {
  background: `url(${wip.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
};

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.3)",
};

const title = {
  color: "white",
  fontFamily: "font-family: 'Roboto', sans-serif",
};

export const fallBackStyle = {
  WipBg,
  container,
  title,
};
