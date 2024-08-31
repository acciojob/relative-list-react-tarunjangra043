import React from "react";

const App = () => {
  const relatives = ["Aunt A", "Uncle B", "Cousin C", "Grandma D", "Grandpa E"];

  return (
    <div id="main">
      <h2>Relatives to Visit for Diwali</h2>
      <ol key="relativeList" id="relativeList">
        {relatives.map((relative, index) => {
          <li key={`relativeListItem${index + 1}`}>{relative}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
