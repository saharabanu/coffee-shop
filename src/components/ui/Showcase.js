/* eslint-disable react/no-unescaped-entities */

import img1 from "../../assets/images/showcase1.png";
import img2 from "../../assets/images/showcase2.png";
import img3 from "../../assets/images/showcase3.png";
import img4 from "../../assets/images/showcase4.png";
import img5 from "../../assets/images/showcase5.png";

import Image from "next/image";

const Showcase = () => {
  return (
    <section className="my-10 text-primaryWine1 font-sanspro">
      <div className=" container lg:px-20 px-5">
        {/* first heading */}
        <div className="flex justify-center items-center">
          <div className="text-center space-y-3">
        
            <div className="relative before:bg-primaryWine before:block before:w-[50px]  before:h-[2px] flex justify-center ">
              
              <h5 className="absolute bottom-0 font-lemonada text-primaryWine pb-2">Showcase</h5>
            </div>
           
            <h2 className="text-3xl font-baklida">Our Chefs New Creations</h2>
            <p className="font-sanspro text-justify">
              Behold the extraordinary creations born from the synergy of our
              users' ingenuity <br />{" "}
              <span className="lg:px-6">
                and the transformative power of AI, a testament to boundless
                innovation.
              </span>
            </p>
          </div>
        </div>

        {/* filter btn */}

        <div className="py-10 flex justify-center items-center">
          <div className="lg:flex flex-wrap space-x-5 space-y-3">
            <button className="text-primaryWine border border-primaryWine   px-2 py-1 rounded-xl outline-none ">
              All
            </button>
            <button className="text-primaryWine border border-primaryWine   px-2 py-1 rounded-xl outline-none ">
              Burger
            </button>
            <button className="text-primaryWine border border-primaryWine   px-2 py-1 rounded-xl outline-none ">
              Drinks
            </button>
            <button className="text-primaryWine border border-primaryWine   px-2 py-1 rounded-xl outline-none ">
              Pizza
            </button>
            <button className="text-primaryWine border border-primaryWine   px-2 py-1 rounded-xl outline-none ">
              Dinner
            </button>
            <button className="text-primaryWine border border-primaryWine   px-2 py-1 rounded-xl outline-none ">
              Lunch
            </button>
            <button className="text-primaryWine border border-primaryWine   px-2 py-1 rounded-xl outline-none ">
              Cookies
            </button>
            <button className="text-primaryWine border border-primaryWine   px-2 py-1 rounded-xl outline-none ">
              Bakery
            </button>
          </div>
        </div>

        {/*showcase image gallery */}

        <div className="flex justify-center items-center lg:pl-16">
          <div>
          <div className="grid lg:grid-cols-6 gap-5">
            <div className="lg:col-span-2  overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={img1}
                width={600}
                height={10}
                alt="chooseLogo"
                className="h-[300px] transition duration-300 ease-in-out hover:scale-125"
              />
            </div>
            <div className="lg:col-span-4 overflow-hidden bg-cover bg-no-repeat">
              <Image
                src={img2}
                width={600}
                height={10}
                alt="chooseLogo"
                className="h-[300px] transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
          {/* second section */}

          <div className="grid lg:grid-cols-6 gap-5 pt-5">
            <div className="lg:col-span-1">
              <Image
                src={img4}
                width={400}
                height={10}
                alt="chooseLogo"
                className="h-[250px] transition duration-300 ease-in-out hover:scale-110 w-full"
              />
            </div>
            <div className="lg:col-span-2">
              <Image
                src={img3}
                width={400}
                height={10}
                alt="chooseLogo"
                className="h-[250px] transition duration-300 ease-in-out hover:scale-110 w-full"
              />
            </div>
            <div className="lg:col-span-3">
              <Image
                src={img5}
                width={400}
                height={10}
                alt="chooseLogo"
                className="h-[250px] transition duration-300 ease-in-out hover:scale-110 w-full lg:w-[420px]"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
