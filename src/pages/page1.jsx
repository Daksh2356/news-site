import React from "react";
import DefaultLayoutHOC from "../layouts/DefaultLayout";

const Page1 = () => {
    return (
        <div className="flex flex-row gap-4 p-2 m-4 ">
          <div className="flex p-6 flex-col">
            <h1 className="text-9xl pb-2 font-bold ">
              NESS <br /> 
            </h1>
            <div className="flex flex-wrap">
              <h1 className="text-3xl">Lorem ipsum dolor sit amet.</h1>
              <p className="font-light">
                
              </p>
            </div>
            <br />
            <div className="flex items-start gap-5">
              
              <h3 className="text-center m-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            velit harum aut similique quia provident voluptatem, optio non sunt
            a fugit laudantium, placeat, qui expedita aspernatur molestias
            distinctio molestiae sed!
              </h3>
            </div>
            <div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

            <div className="flex gap-4 p-2 m-4">
              <div className=" w-1/2">
                <button className="bg-blue-400 p-3 rounded-3xl">Headline 1</button>
                Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolor, quibusdam asdasdia quod sequi doloribus id.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            velit harum aut similique quia provident voluptatem, optio non sunt
            a fugit laudantium, placeat, qui expedita aspernatur molestias
            distinctio molestiae sed!
              </div>
              <div className="w-1/2 p-2">
                <button className="bg-blue-400 p-3 rounded-3xl">Headline 2</button>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                dolorum. lorem50
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            velit harum aut similique quia provident voluptatem, optio non sunt
            a fugit laudantium, placeat, qui expedita aspernatur molestias
            distinctio molestiae sed!
              </div>
              <div className="w-1/2 p-2">
                <button className="bg-blue-400 p-3 rounded-3xl">Headline 3</button>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                dolorum. lorem50
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            velit harum aut similique quia provident voluptatem, optio non sunt
            a fugit laudantium, placeat, qui expedita aspernatur molestias
            distinctio molestiae sed!
              </div>
              <div className="w-1/2 p-2">
                <button className="bg-blue-400 p-3 rounded-3xl">Headline 4</button>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                dolorum. lorem50
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            velit harum aut similique quia provident voluptatem, optio non sunt
            a fugit laudantium, placeat, qui expedita aspernatur molestias
            distinctio molestiae sed!
              </div>
              
            </div>
          </div>
          <div className="flex p-9">
            <div className="bg-blue-400 font-medium p-9">
              
             
              <div className="bg-black font-medium p-9">
                <div className="flex gap-2 justify-around">
                  <div className="text-white w-1/2">
                    Lorem, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Dolor, quibusdam asdasdia quod sequi doloribus id.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                dolorum. lorem50
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            velit harum aut similique quia provident voluptatem, optio non sunt
            a fugit laudantium, placeat, qui expedita aspernatur molestias
            distinctio molestiae sed!
                  </div>
                  <div className="text-white w-1/2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                    dolorum.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
                dolorum. lorem50
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            velit harum aut similique quia provident voluptatem, optio non sunt
            a fugit laudantium, placeat, qui expedita aspernatur molestias
            distinctio molestiae sed!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default DefaultLayoutHOC(Page1); // passing the page1 page to the DefaultLayoutHOC
