import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Box, Container } from "@mui/material";

function AdminLayout({ children }) {
  return (
    <Box
      sx={{
        backgroundImage: `url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D')`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
      }}
    >
      {/* <Header/> */}
      <Sidebar />
      <Box
        sx={{
          padding: "64px 0px 640px 240px",
          width: "100%",
          overflow: "auto",
          backgroundImage: `url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D')`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover'
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
