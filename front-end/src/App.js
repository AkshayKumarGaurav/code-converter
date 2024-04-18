import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DisplayInformation from "./components/DisplayInformation";
import { useDisclosure } from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <DisplayInformation isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default App;