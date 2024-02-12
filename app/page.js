import Card from "@/components/Card";
import Company from "@/components/Company";
import Crousel from "@/components/Crousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="main-block flex flex-wrap justify-evenly items-center ">
        <div className="my-12 max-w-80">
          <h1 className="text-white font-bold text-3xl">
            WHERE QUALITY DEFINES EXCELLENCE
          </h1>
          <ul className="my-2">
            <li className="" id="list">
              <strong className="text-white font-bold"> Delivered with</strong>
              <p className="text-white">
                Domain expertise, Unbiased evaluation and 100+ QA experts
              </p>
            </li>
            <li id="list">
              <strong className="text-white font-bold"> Delivered with</strong>
              <p className="text-white">
                Domain expertise, Unbiased evaluation and 100+ QA experts
              </p>
            </li>
            <li id="list">
              <strong className="text-white font-bold"> Delivered with</strong>
              <p className="text-white">
                Domain expertise, Unbiased evaluation and 100+ QA experts
              </p>
            </li>
          </ul>
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Explore Quality.Catalyzed
          </button>
        </div>
        <div className="my-12">
          <img
            className="max-w-96 max-h-96"
            src="https://www.testrigtechnologies.com/wp-content/uploads/2023/08/Testrig-Hero-Logo1-768x785-1.png"
          ></img>
        </div>
      </div>
      <div className="second-block flex flex-wrap justify-evenly items-center my-2">
        <div className="max-w-80">
          <h2 className="font-bolder text-3xl">Here, Early QA Catches The Bug</h2>
          <h3 className="text-xl my-2 font-light">Testrig defined in a few lines</h3>
          <p>
            Experts at Testrig are competent in addressing quality issues early
            in the development cycle. As an Esteemed Software Testing Company,
            We take Testing as a Proactive Quality Function than Reactive Task,
            helping <strong>Reduce Development Costs and Risks</strong>, besides <strong>Improving the
            Overall Software Quality with our cutting-edge Software QA Testing
            Services.</strong>
          </p>
        </div>
        <div>
          <h6>3 Pillars That Help Us Outperform</h6>
          <img src="https://www.testrigtechnologies.com/wp-content/uploads/2023/03/3-Pillars-Info005.svg"/>
        </div>
      </div>
      <div className="third-block">
       <div className="text-center">
       <h1 className="font-bold text-2xl">All Roads Lead To Robust Testing</h1>
        <h3 className="text-xl my-2">Popular QA offerings</h3>
       </div>
      <div>
       <div className="flex flex-wrap justify-around">
       <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
       </div>
      </div>
      </div>
      <div className="forth-block text-center">
        <h2 className="font-bold text-2xl my-2">In Testrig They Trust</h2>
        <h3 className="text-xl my-2">Our Clients</h3>
        <div className="flex flex-wrap">
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
          <Company/>
        </div>
      </div>
      <div className="fifth-block flex flex-wrap justify-evenly items-center">
        <div>
        <p>
        We are a relationships-first company, and the hallmark of this core value is our
         continued association with our first customer since inception.
        </p>
        <strong  className="block">Let’s connect to forge a new relationship.</strong>
        <button className="px-4 py-2 bg-green-400">Start Your Trial Period</button>
        </div>
        <div className="min-W-90"></div>
      </div>
      <div className="six-block min-h-52">
        <h2>Where There’s A Tool There’s A Way</h2>
        <h3>Proficiency in multiple testing platforms</h3>
        <Crousel/>
      </div>
    </div>
  );
}
