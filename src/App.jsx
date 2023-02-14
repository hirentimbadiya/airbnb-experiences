import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
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
      <div className="flex overflow-x-auto hidesb mt-4">
        <Hero/>
      </div>
    </div>
    </div>
  );
};

export default App;
