import { useEffect, useState } from "react";
import Second from "./Second";

const EyeShadow = () => {
  let [images, setUser] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:5000/EYESHADOW_PALETTES");
      let data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);

 

  return (
    <div className="videos">
      <Second EYESHADOW_PALETTES={images} />
    </div>
  );
};

export default EyeShadow;
