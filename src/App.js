import React from "react";
import Navbar from'./components/Navbar'
import Hero from "./components/Hero"
import HeadlineCards from "./components/HeadlineCards"
import  PRODUCT  from "./components/ PRODUCT";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <PRODUCT/>
    </div>
  );
}

export default App;
