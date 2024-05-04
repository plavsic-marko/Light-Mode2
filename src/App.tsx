import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Card,
  CardContent,
  CardMedia,
  Switch,
  Typography,
} from "@mui/material";

export default function App() {
  // state to manage the dark mode
  const [darkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!darkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Toggle Dark mode</h2>
        <Switch checked={darkMode} onChange={toggleDarkTheme} />
        {/* rendering the card component with card content */}
        <Card sx={{ width: "30%", borderRadius: 3, padding: 1 }}>
          <CardContent>
            <CardMedia
              sx={{ height: 180, borderRadius: 3 }}
              image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
              title="semaphore"
            />
            <Typography variant="h4" component="div" sx={{ marginTop: 3 }}>
              Programiranje je lako
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              by Marko
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              dignissimos odit vitae magnam sint, incidunt minima molestiae
              quisquam dolores, deserunt esse voluptas, quod beatae! Iure aut
              adipisci consectetur minima saepe!
            </Typography>
          </CardContent>
        </Card>
      </div>
    </ThemeProvider>
  );
}
