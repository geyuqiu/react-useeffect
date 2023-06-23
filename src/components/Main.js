import { useEffect, useState } from "react";

export default function Main({ selectedBreed }) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    let ignoreRequest = false;

    const url = "https://dog.ceo/api/breed/" + selectedBreed + "/images/random";
    if (!ignoreRequest) {
      fetch(url)
        .then((res) => res.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
        .then((data) => setImageSrc(data.message));
    }

    return () => {
      ignoreRequest = true;
    };
  }, [selectedBreed]);

  return (
    <main className="main col-9">
      <div className="alert alert-primary">Selected Breed: {selectedBreed}</div>
      <img src={imageSrc} alt={selectedBreed} />
    </main>
  );
}
