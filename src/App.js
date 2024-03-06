import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Employees from "./scenes/employees";
// import Attendence from "./scenes/attendence";
// import Finance from "./scenes/finance";
// import Projects from "./scenes/projects";
// import Chat from "./scenes/chat";
// import Companydata from "./scenes/companydata";
// import Profile from "./scenes/profile";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/employees" element={<Employees />} />
              <Route path="/attendence" element={<Attendence />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/companydata" element={<Companydata />} />
              <Route path="/profile" element={<Profile />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
