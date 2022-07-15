import "./styles.css";
import React from "react";
import MyAuth from "./MyAuth";
import SweetCard from "./SweetCard";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <MainContent />
        <SweetCard />
        <MyAuth />
        <Footer />
      </div>
    );
  }
}

export default App;
