'use client'
import Image from "next/image";
import img1 from "../../assets/images/choose-pic.png";
import img2 from "../../assets/images/layer.png";
import cup from "../../assets/images/cup.svg";
import CountUp from 'react-countup';


const Choose = () => {
  return (
    <section className="lg:mt-52 mt-10 text-primaryWine1 relative">
      <div className=" absolute right-0 top-[-120px]">
      <Image src={cup} width={150} height={10} alt="chooseLogo" />
      </div>
      <div className="container lg:px-20 px-5">
        <div className="grid lg:grid-cols-2 gap-5 text-primaryWine1">
          <div>
            <div className="space-y-6">
              <div className="relative before:bg-primaryWine before:block before:w-[50px]  before:h-[2px] ">
                <h5 className="absolute left-16 top-[-10px] font-lemonada text-primaryWine">
                  Why Choose Us
                </h5>
              </div>
              <h2 className="text-4xl font-baklida">
                Choosing Unlocklive, A Taste of Perfection
              </h2>
              <p className="font-sanspro">
                Unlocklive takes pride in the art of roasting, transforming raw
                coffee beans into a symphony of aromatic notes and rich flavors.
              </p>

              <div className="flex space-x-5 items-center">
                <div className="flex justify-center items-center border p-4 font-sanspro rounded text-primaryWine1 ">
                  <div>
                    <h2 className="text-center text-2xl  font-baklida"><CountUp end={20} suffix="+" /></h2>
                    <h3>Years Experience</h3>
                   
                  </div>
                </div>
                <div className="relative flex justify-center items-center border p-4 font-sanspro rounded text-primaryWine1 ">
                  <div className="">
                    <h2 className="text-center text-2xl font-baklida"><CountUp end={100} suffix="+" className="number "/></h2>
                    <h3>Master Chefs</h3>
                  </div>
                  <div className="absolute inset-0  border top-[-4px] left-[-4px]  bottom-[-4px] right-[-4px] rotate-6 rounded"></div>
                </div>
               
                <div className="flex justify-center items-center border p-4 font-sanspro rounded text-primaryWine1 ">
                  <div>
                    <h2 className="text-center text-2xl  font-baklida"><CountUp end={30} suffix="+" className="number "/></h2>
                    <h3>Achievements</h3>
                  </div>
                </div>
              </div>
              <p>
                Your choice to savor our coffee is an invitation to experience
                the epitome of craftsmanship, flavor, and dedication.
              </p>
              <div>
                <button className="text-primaryWine border border-primaryWine   px-5 py-3 rounded-xl outline-none hover:bg-primaryWine ease-in-out hover:text-white cursor-pointer transition-all duration-300 delay-300">
                  Explore Our Menus
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative">
            <Image src={img1} width={400} height={10} alt="chooseLogo" className="z-10"/>
            <Image className="absolute lg:top-12 hidden lg:block top-16 lg:left-[55px] left-[15px] " src={img2} width={430} height={10} alt="chooseLogo" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
