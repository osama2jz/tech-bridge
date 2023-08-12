import { useDisclosure } from "@mantine/hooks";
import "./App.css";
import { Box } from "@mantine/core";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/about";
import Services from "./pages/services";
import Technology from "./pages/Technology";
import ContactUs from "./pages/contactUs";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const [opened, { toggle }] = useDisclosure(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <Box style={{ position: "relative" }}>
      {pathname !== "/signin" && pathname !== "/signup" && (
        <Header opened={opened} toggle={toggle} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technology-conferences" element={<Technology />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {pathname !== "/signin" && pathname !== "/signup" && <Footer />}
    </Box>
  );
}

export default App;
