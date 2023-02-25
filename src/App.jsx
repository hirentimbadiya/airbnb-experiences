import React from "react";
import ButtonsGrp from "./components/ButtonsGrp";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewWeek from "./components/NewWeek";
import OnlineExp from "./components/OnlineExp";
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
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <OnlineExp />
      </div>
      <div className={` sm:pl-[4rem] pl-[1.5rem]`}>
        <Card />
      </div>
    </div>
  );
};

export default App;
