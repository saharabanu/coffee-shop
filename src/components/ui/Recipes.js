/* eslint-disable react/no-unescaped-entities */
import img1 from "../../assets/images/recepi1.png";
import img2 from "../../assets/images/recepi2.png";
import img3 from "../../assets/images/recepi3.png";

import Image from "next/image";

const Recipes = () => {
  return (
    <section className="bg-purple py-12 lg:my-16 my-5">
      <div className="container lg:pl-20 ">
        <div className="grid lg:grid-cols-2">
          <div className="lg:pr-32 lg:px-0 px-10 lg:pb-0 pb-10">
            <div className="relative before:bg-primaryWine before:block before:w-[50px]  before:h-[2px] ">
              <h5 className="absolute left-16 top-[-10px] font-lemonada text-primaryWine">
                New Recipes
              </h5>
            </div>
            <h2 className="lg:text-4xl text-3xl font-baklida py-5">Taste Our New Recipe</h2>
            <p className="font-sanspro">
              Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
              malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
              porttitor scelerisque amet dolor et. Nisi ac vitae tortor
              lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis
              nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing
              eu sit ornare imperdiet viverra sit vel.
            </p>
            <p className="font-sanspro pt-5">
              There are many variations of passages of Lorem Ipsum form any
              injected humour, or randomised words which don't look slightly
              believable.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 lg:ml-[-60px]">
            <div className="">
              <Image src={img1} width={300} height={10} alt="FooterLogo" className="h-[320px] w-full"/>
            </div>
            <div className="">
              <Image src={img2} width={500} height={10} alt="FooterLogo" className="h-[320px] w-full"/>
            </div>
            <div className="">
              <Image src={img3} width={300} height={10} alt="FooterLogo" className="h-[320px] w-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
