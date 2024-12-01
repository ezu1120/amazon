import { useState } from "react";
import "./App.css";
import CarouselEffect from './components/Carousel/Carousel'
import Headerr from "./components/Headerr/Headerr";
import Category from "./components/Category/Category";

function App() {
  return (
    <div>
      <Headerr />
      <CarouselEffect />
      <Category/>
    </div>
  );
}

export default App;
