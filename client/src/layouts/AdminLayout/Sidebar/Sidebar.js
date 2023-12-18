import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import PeopleIcon from "@mui/icons-material/People";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CategoryIcon from "@mui/icons-material/Category";
import ReceiptIcon from "@mui/icons-material/Receipt";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import authService from "../../../services/authServices";
import { useNavigate } from "react-router-dom";

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: "40px",
});
function Sidebar() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [settings, setSettings] = useState();
  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  const account = JSON.parse(localStorage.getItem("account"));

  const role = account.type;
  useEffect(() => {
    if (role === "student")
      setSettings([
        { title: "Profile", link: "/student/profile" },
        { title: "Register Thesis", link: "/student/assign-thesis" },
        { title: "Manage Thesis", link: "/student/manage-thesis" },
        { title: "Quản Lý tiến độ", link: "/student/update-task" },
        { title: "Logout", link: "/logout" },
      ]);
    else if (role === "faculty") {
      if (account.isHeadDep)
        setSettings([
          { title: "Profile", link: "/faculty/profile" },
          { title: "Register Thesis", link: "/faculty/register-thesis" },
          { title: "Manage Thesis", link: "/head-lecturer/manage-thesis" },
          { title: "Approval Thesis", link: "/head-lecturer/pending-thesis" },
          {
            title: "Distribute Faculty",
            link: "/head-lecturer/approved-thesis",
          },
          { title: "Logout", link: "/logout" },
        ]);
      else
        setSettings([
          { title: "Profile", link: "/faculty/profile" },
          { title: "Register Thesis", link: "/faculty/register-thesis" },
          { title: "Manage Thesis", link: "/faculty/manage-thesis" },
          { title: "Logout", link: "/logout" },
        ]);
    } else if (role === "admin") {
      setSettings([
        { title: "Dashboard", link: "/dashboard" },
        { title: "Manage Student", link: "/manage-student" },
        { title: "Manage Schedule", link: "/manage-schedule" },
        { title: "Manage Thesis", link: "/manage-thesis" },
        { title: "Manage Term", link: "/manage-term" },
        { title: "Student Test", link: "/students" },
        { title: "Logout", link: "/logout" },
      ]);
    }
  }, []);

  const drawer = (
    <Box height="100%" sx={{ backgroundColor: "rgb(28,37,54)" }}>
      <CssBaseline />
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontSize: "18px",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          THESIS FORUM
        </Typography>
      </Toolbar>
      <Box sx={{ overflow: "auto" }}>
        <List sx={{ ml: "8px" }}>
          {settings?.map((setting, index) => {
            console.log(setting);
            return (
              <Link Link to={`${setting.link}`}>
                <ListItem disablePadding>
                  <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={async () => {
                      handleListItemClick(index);
                      if (setting.title === "Logout") {
                        await authService.logout(account);
                        localStorage.removeItem("account");
                        navigate("/login");
                      }
                    }}
                  >
                    <StyledListItemIcon sx={{ minWidth: "40px" }}>
                      <EqualizerIcon fontSize="medium" sx={{ color: "#fff" }} />
                    </StyledListItemIcon>
                    <ListItemText
                      primary={`${setting.title}`}
                      primaryTypographyProps={{
                        fontSize: "16px",
                        color: "#fff",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" },
      }}
      open
    >
      {drawer}
    </Drawer>
  );
}

export default Sidebar;

{
  /* <Link to={"/manage-student"}>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedIndex === 1}
                onClick={() => handleListItemClick(1)}
              >
                <StyledListItemIcon>
                  <PeopleIcon fontSize="medium" sx={{ color: "#fff" }} />
                </StyledListItemIcon>
                <ListItemText
                  primary="Student"
                  primaryTypographyProps={{ fontSize: "16px", color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={"/manage-faculty"}>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedIndex === 2}
                onClick={() => handleListItemClick(2)}
              >
                <StyledListItemIcon>
                  <PeopleIcon fontSize="medium" sx={{ color: "#fff" }} />
                </StyledListItemIcon>
                <ListItemText
                  primary="Faculty"
                  primaryTypographyProps={{ fontSize: "16px", color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={"/manage-schedule"}>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedIndex === 3}
                onClick={() => handleListItemClick(3)}
              >
                <StyledListItemIcon>
                  <ReceiptIcon fontSize="medium" sx={{ color: "#fff" }} />
                </StyledListItemIcon>
                <ListItemText
                  primary="Schedule"
                  primaryTypographyProps={{ fontSize: "16px", color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={"/manage-thesis"}>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedIndex === 4}
                onClick={() => handleListItemClick(4)}
              >
                <StyledListItemIcon>
                  <ReceiptIcon fontSize="medium" sx={{ color: "#fff" }} />
                </StyledListItemIcon>
                <ListItemText
                  primary="Thesis"
                  primaryTypographyProps={{ fontSize: "16px", color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={"/manage-term"}>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedIndex === 5}
                onClick={() => handleListItemClick(5)}
              >
                <StyledListItemIcon>
                  <ReceiptIcon fontSize="medium" sx={{ color: "#fff" }} />
                </StyledListItemIcon>
                <ListItemText
                  primary="Term"
                  primaryTypographyProps={{ fontSize: "16px", color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={"/manage-major"}>
            <ListItem disablePadding>
              <ListItemButton
                selected={selectedIndex === 6}
                onClick={() => handleListItemClick(6)}
              >
                <StyledListItemIcon>
                  <ReceiptIcon fontSize="medium" sx={{ color: "#fff" }} />
                </StyledListItemIcon>
                <ListItemText
                  primary="Major"
                  primaryTypographyProps={{ fontSize: "16px", color: "#fff" }}
                />
              </ListItemButton>
            </ListItem>
          </Link> */
}
