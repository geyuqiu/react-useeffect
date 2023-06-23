import "./styles.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [selectedBreed, setSelectedBreed] = useState("australian");
  const [allBreeds, setAllBreeds] = useState([
    "poodle",
    "dachshund",
    "labrador"
  ]);

  useEffect(() => {
    let ignoreRequest = false;

    if (!ignoreRequest) {
      fetch("https://dog.ceo/api/breeds/list/all")
        .then((res) => res.json())
        .then((data) => setAllBreeds(Object.keys(data.message).slice(0, 10)));
    }
    return () => {
      ignoreRequest = true;
    };
  }, [setAllBreeds]);

  return (
    <div className="App">
      <Header />
      <div className="row">
        <Sidebar
          allBreeds={allBreeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        />
        <Main selectedBreed={selectedBreed} />
      </div>
      <Footer />
    </div>
  );
}
