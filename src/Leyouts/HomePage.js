import React from "react";
import "../css/maine.css";

const HomePage = () => {
  return (
    <div className="home-page-wraper ">
      <div className="home-page-wraper__shadow-bacground"></div>

      <div className="titleHomPage  animated fadeInLeftBig delay-0.95s">
        <h1>Nasza specjalizacja</h1>
        <h2>Ford</h2>
        <h2>Renault</h2>
        <h3 className="titleHomPage__subtitel">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          saepe a ipsum. Assumenda maxime atque inventore eius ab, quam tenetur
          praesentium voluptatibus corporis quis illo voluptatem quibusdam,
          consequuntur dolores laborum.
        </h3>
      </div>
    </div>
  );
};

export default HomePage;
