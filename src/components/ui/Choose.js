import Image from "next/image";
import img1 from "../../assets/images/choose-pic.png";

const Choose = () => {
  return (
    <section className="lg:mt-52 mt-10">
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
                    <h2 className="text-center text-2xl  font-baklida">20+</h2>
                    <h3>Years Experience</h3>
                  </div>
                </div>
                <div className="relative flex justify-center items-center border p-4 font-sanspro rounded text-primaryWine1 ">
                  <div className="">
                    <h2 className="text-center text-2xl font-baklida">100+</h2>
                    <h3>Master Chefs</h3>
                  </div>
                  <div className="absolute inset-0  border top-[-4px] left-[-4px]  bottom-[-4px] right-[-4px] rotate-6 rounded"></div>
                </div>
               
                <div className="flex justify-center items-center border p-4 font-sanspro rounded text-primaryWine1 ">
                  <div>
                    <h2 className="text-center text-2xl  font-baklida">30+</h2>
                    <h3>Achievements</h3>
                  </div>
                </div>
              </div>
              <p>
                Your choice to savor our coffee is an invitation to experience
                the epitome of craftsmanship, flavor, and dedication.
              </p>
              <div>
                <button className="text-primaryWine border border-primaryWine   px-5 py-3 rounded-xl outline-none ">
                  Explore Our Menus
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Image src={img1} width={400} height={10} alt="chooseLogo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
