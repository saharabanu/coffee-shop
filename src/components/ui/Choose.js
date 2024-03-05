import Image from "next/image";
import img1 from '../../assets/images/choose-pic.png'


const Choose = () => {
    return (
        <section  className="mt-52">
         <div className="container lg:px-20 px-5">
            <div className="grid lg:grid-cols-2 gap-5">
                <div >
                     <div className="space-y-6" >
                        <div className="relative before:bg-primaryWine before:block before:w-[50px]  before:h-[2px] ">
                        <h5 className="absolute left-16 top-[-10px] font-lemonada text-primaryWine">Why Choose Us</h5>
                        </div>
                        <h2 className="text-4xl font-baklida" >Choosing Unlocklive, A Taste of Perfection</h2>
                        <p className="font-sanspro">Unlocklive takes pride in the art of roasting, transforming raw coffee beans into a symphony of aromatic notes and rich flavors.</p>
                     </div>
                </div>
                <div className='flex'>
                    <Image src={img1} width={400} height={10} alt='FooterLogo'/>
                   

                </div>
            </div>

         </div>
    </section>
    );
};

export default Choose;