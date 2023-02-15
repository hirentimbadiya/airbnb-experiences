import React from "react";
import ButtonsGrp from "./components/ButtonsGrp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewWeek from "./components/NewWeek";
import styles from "./style";
const App = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <hr />
      <div className={`${styles.paddingX}`}>
        <div>
          <NewWeek />
        </div>
        <div className="flex overflow-auto hidesb mt-4">
          <Hero />
        </div>
        <div>
          <ButtonsGrp />
        </div>
      </div>
    </div>
  );
};

export default App;
