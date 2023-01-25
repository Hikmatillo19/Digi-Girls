import React from "react";
import "./Home.scss";
import HeaderHome from "../../components/Home/HeaderHome/HeaderHome";
import Hero from "../../components/Home/Hero/Hero";
import Project from "../../components/Home/Project/Project";
import Direction from "../../components/Home/Direction/Direction";
import Project2 from "../../components/Home/Project-2/Project2";
import Tasks from "../../components/Home/Tasks/Tasks";
import Registration from "../../components/Home/Registration/Registration";
import Result from "../../components/Home/Result/Result";
import Location from "../../components/Home/Location/Location";
function Home() {
  return (
    <div>
      <div className="position__header">
        <HeaderHome />
        <Hero />
      </div>
      <div className="projectBg">
        <Project />
        <Direction />
        <Project2 />
      </div>
      <Tasks />
      <Registration />
      <Result />
      <Location />
    </div>
  );
}

export default Home;
