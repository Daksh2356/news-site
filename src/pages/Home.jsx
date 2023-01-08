import React from "react";
import DefaultLayoutHOC from "../layouts/DefaultLayout";

const Home = () => {
  return (
    <div className="flex flex-row gap-4 p-2 m-4 ">
      <div className="flex p-4 flex-col">
        <h1 className="text-5xl pb-2 font-bold ">
          NEWS <br /> NISSHES
        </h1>
        <div className="flex flex-wrap">
          <h3 className="text-xl">Lorem ipsum dolor sit amet.</h3>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            quaerat quos quam iste culpa doloribus accusamus magni omnis
            consequuntur, vero, similique quibusdam ad! Minus omnis est facere
            repellat reiciendis laudantium odio ducimus eligendi velit veritatis
            deserunt quod qui, deleniti nulla ut corporis labore tempora? At
            eaque explicabo asperiores velit accusantium!
          </p>
        </div>
        <br />
        <div className="flex items-start gap-5">
          <button className="bg-black text-white p-4 rounded-2xl">
            NEWS SEARCH
          </button>
          <h3 className="text-center m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          </h3>
        </div>
        <div className="flex gap-4 p-2 m-4">
          <div className=" w-1/2">
            <button className="bg-blue-400 p-3 rounded-3xl">news 1</button>
            Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolor, quibusdam asdasdia quod sequi doloribus id.
          </div>
          <div className="w-1/2 p-2 border-black border-l-2">
            <button className="bg-blue-400 p-3 rounded-3xl">news 2</button>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
            dolorum. lorem50
          </div>
        </div>
      </div>
      <div className="flex p-4">
        <div className="bg-blue-400 font-medium p-3">
          <h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, asperiores!
          </h3>
          <br />
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            velit harum aut similique quia provident voluptatem, optio non sunt
            a fugit laudantium, placeat, qui expedita aspernatur molestias
            distinctio molestiae sed!
          </p>
          <br />
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            velit harum aut similique quia provident voluptatem, optio non sunt
            a fugit laudantium, placeat, qui expedita aspernatur molestias
            distinctio molestiae sed!
          </p>
          <div className="bg-black font-medium p-4">
            <div className="flex gap-2 justify-around">
              <div className="text-white w-1/2">
                Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolor, quibusdam asdasdia quod sequi doloribus id.
              </div>
              <div className="text-white w-1/2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                dolorum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayoutHOC(Home); // passing the Home page to the DefaultLayoutHOC
