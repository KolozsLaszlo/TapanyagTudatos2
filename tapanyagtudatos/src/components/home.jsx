// src/components/Home.js
import React from "react";
import "../App.css";

function Home() {
  return (
    <main className="cursor:">
      <section id="home" className="relative h-[850px] px-20">
        <div className="py-20 w-full px-4">
          <div className="flex flex-col items-center z-20 md:flex-row">
            <div className="text-center mb-12 md:text-left md:w1/2 md:pr-10">
              <h1 className="title mb-4 text-white">Tápanyagtudatos: Fedezd fel a finom és egészséges recepteket minden napra!</h1>
              <p className="leading-relaxed mb-10 text-white max-w-3xl">Könnyen kereshetsz tápanyagdús és ínycsiklandó ételek között, hogy minden fogás tápláló és finom legyen. Találd meg a legjobb recepteket a saját igényeidhez!</p>
            </div>
            <div className="w-3xs md:w-1/2 ">
              <img src="../src/assets/icon.png" alt="Icon" />
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="bg-emerald-900 ">
        <div className="py-20 w-full px-4">
          <div className="text-center m-auto mb-20 md:w-1/2 text-white">
            <h4 className="font-bold text-green-600 mb-4">Funkciók</h4>
            <h1 className="title">Könnyen használható netes recept kereső</h1>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 text-white">
            <div className="border-2 border-solid  border-green-950 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-green-950 ease-in duration-300">
              <div className="bg-green-700 inline-block rounded-2xl py-5 px-6">
                <i className="fa-solid fa-check text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold py-4">Megbízható forrás!</h3>
              <p className="leading-relaxed">Fedezze fel az ízek világát megbízható forrásból!</p>
            </div>
            {/* 2.kártya */}
            <div className=" border-2 border-solid  border-green-950 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-green-950 ease-in duration-300">
              <div className="bg-green-700 inline-block rounded-2xl py-5 px-6">
                <i className="fa-solid fa-check text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold py-4">Megbízható forrás!</h3>
              <p className="leading-relaxed">Fedezze fel az ízek világát megbízható forrásból!</p>
            </div>
            {/* 3.kártya */}
            <div className=" border-2 border-solid  border-green-950 text-center py-20 px-5 rounded-2xl cursor-pointer hover:bg-green-950 ease-in duration-300">
              <div className="bg-green-700 inline-block rounded-2xl py-5 px-6">
                <i className="fa-solid fa-check text-4xl"></i>
              </div>
              <h3 className="text-xl font-bold py-4">Megbízható forrás!</h3>
              <p className="leading-relaxed">Fedezze fel az ízek világát megbízható forrásból!</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
