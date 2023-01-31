import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="h-screen"></div>
      <Footer />
    </div>
  );
}

export default App;
