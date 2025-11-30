import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const drawerWidth = 250;
const appBarHeight = '7vh'; // matches your header height

function SideBar({ lessons = [], setActiveLesson, activeLesson }) {
  const [message, setMessage] = useState("");
  
  useEffect(() => {
    if (lessons.length === 0) {
      setMessage("No lessons available.");
    } else {
      setMessage("");
    }
  }, [lessons]);
  
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: appBarHeight,
          height: `calc(100% - ${appBarHeight})`,
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Lessons</Typography>
      </Box>
      {message && (
        <Box sx={{ p: 2 }}>
          <Typography variant="body1">{message}</Typography>
        </Box>
      )}
      <List>
        {lessons.map((lesson, idx) => {
          const key = idx;
          const isActive = activeLesson === lesson;
          return (
            <ListItem key={key} disablePadding>
              <ListItemButton
                onClick={() => setActiveLesson(lesson)}
                sx={{
                  backgroundColor: isActive ? 'rgba(25, 118, 210, 0.12)' : 'transparent',
                  '&:hover': {
                    backgroundColor: isActive 
                      ? 'rgba(25, 118, 210, 0.18)' 
                      : 'rgba(0, 0, 0, 0.04)',
                  },
                }}
              >
                <Box sx={{ width: "100%", p: 1 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ 
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? 'primary.dark' : 'text.primary',
                    }}
                  >
                    {lesson?.title}
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}

export default SideBar;
