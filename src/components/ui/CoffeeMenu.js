import Image from "next/image";
import icon1 from "../../assets/images/menu-icon.png";
import icon2 from "../../assets/images/menu-icon1.svg";
import menu1 from "../../assets/images/menu1.png";
import menu2 from "../../assets/images/menu2.png";
import menu3 from "../../assets/images/menu3.png";
import menu4 from "../../assets/images/menu4.png";

const CoffeeMenu = () => {
  return (
    <section className="lg:mt-24 mt-10">
      <div className="container lg:px-20 px-5">
        <div className="">
          {/* <div className="relative before:bg-primaryWine before:block before:w-[50px]  before:h-[2px] after:bg-primaryWine  after:w-[50px]  after:h-[2px]">
            <h5 className="absolute left-16 top-[-10px] font-lemonada text-primaryWine">
              Why Choose Us
            </h5>
            
          </div> */}
          <div className="relative flex justify-center item-center" >
            <div>
            <h5 className=" font-lemonada text-primaryWine">
              Why Choose Us
            </h5>

            <div className=" before:block before:w-10 before:h-[2px] before:bg-primaryWine before:absolute before:left-[430px] before:top-1/2 before:transform before:-translate-y-1/2 after:block after:w-10 after:h-[2px] after:bg-primaryWine after:absolute after:right-[430px] after:top-1/2 after:transform after:-translate-y-1/2"></div>
            </div>
          </div>
          <p className="py-2 font-baklida text-2xl text-center">Unlocklive Coffee Menu</p>

          <div className="grid lg:grid-cols-2 gap-5 py-16 text-primaryWine1">
            <div className="border rounded-xl border-gray-300 shadow-md p-4">
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center space-x-5">
                  <div>
                    <Image
                      src={menu1}
                      width={70}
                      height={10}
                      alt="FooterLogo"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">Double Espresso x2</h2>
                    <p className="font-sanspro">
                      There are many variations of passages Lorem Ipsum form
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={icon2} width={50} height={10} alt="FooterLogo" />
                </div>
              </div>
            </div>
            <div className="border rounded-xl border-gray-300 shadow-md p-4">
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center space-x-5">
                  <div>
                    <Image
                      src={menu2}
                      width={70}
                      height={10}
                      alt="FooterLogo"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">Hazelnut Heaven Latte</h2>
                    <p className="font-sanspro">
                      There are many variations of passages Lorem Ipsum form
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={icon1} width={50} height={10} alt="FooterLogo" />
                </div>
              </div>
            </div>
            <div className="border rounded-xl border-gray-300 shadow-md p-4">
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center space-x-5">
                  <div>
                    <Image
                      src={menu3}
                      width={70}
                      height={10}
                      alt="FooterLogo"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">Salted Caramel Cold Brew</h2>
                    <p className="font-sanspro">
                      There are many variations of passages Lorem Ipsum form
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={icon1} width={50} height={10} alt="FooterLogo" />
                </div>
              </div>
            </div>
            <div className="border rounded-xl border-gray-300 shadow-md p-4">
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center space-x-5">
                  <div>
                    <Image
                      src={menu4}
                      width={70}
                      height={10}
                      alt="FooterLogo"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl">Coconut</h2>
                    <p className="font-sanspro">
                      There are many variations of passages Lorem Ipsum form
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={icon1} width={50} height={10} alt="FooterLogo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeMenu;
