import React, { useEffect, useState } from "react";

const NewMessage = () => {
  const [load, setLoaded] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9090/messages`)
      .then((res) => res.json())
      .then((data) => {
        setLoaded(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
console.log(load);
  return (
    <div>
      {load.map((item, index) => (
        <ul key={index}>
          <li>
            <div className="liDiv">
              <div>
                <p>{item.text}</p>
              </div>
              <div>
                <p>{item.form}</p>
              </div>
              <div>
                <button className="deleteBtn">Delete</button>
              </div>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default NewMessage;
