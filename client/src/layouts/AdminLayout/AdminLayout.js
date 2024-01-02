import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Box, Container } from "@mui/material";

function AdminLayout({ children }) {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210916/pngtree-cream-solid-color-wallpaper-background-image_901363.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* <Header/> */}
      <Sidebar />
      <Box
        sx={{
          padding: "64px 0px 640px 240px",
          width: "100%",
          overflow: "auto",
          backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20210916/pngtree-cream-solid-color-wallpaper-background-image_901363.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container sx={{ paddingTop: "64px", margin: 0 }} maxWidth="false">
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default AdminLayout;
