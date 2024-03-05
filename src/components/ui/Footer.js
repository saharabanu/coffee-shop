import Image from 'next/image';
import footerLogo from '../../assets/images/footer-logo.png';

import { FaFacebookF ,FaLinkedinIn,FaTwitter} from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
  return (
    <>
    <footer className=" bg-footer-bg bg-no-repeat bg-cover bg-center py-5 text-white mix-blend-overlay">
        <div className=" lg:px-20 px-5">
             <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 sm:c gap-4 items-center">

                <div className='flex'>
                    <Image src={footerLogo} width={150} height={10} alt='FooterLogo'/>
                   

                </div>
                <div>
                    <ul className='flex items-center space-x-10'>
                        <li className=''>
                            <Link href="/">Terms</Link>
                        </li>
                        <li>
                            <Link href="/">Privacy</Link>
                        </li>
                        <li>
                            <Link href="/">Cookies</Link>
                        </li>
                        
                    </ul>
                </div>
                <div className='lg:pl-40 md:pl-20'>
                    <ul className='flex items-center space-x-2'>
                        <li className='border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200'>
                            <Link href='/'>
                            <span><FaFacebookF /></span>
                            </Link>
                        </li>
                        <li className='border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200'>
                            <Link href='/'>
                            <span><FaLinkedinIn /></span>
                            </Link>
                        </li>
                        <li className='border rounded-full border-white flex justify-center items-center p-2 transition-all duration-300 delay-300 hover:text-red-200'>
                            <Link href='/'>
                            <span><FaTwitter /></span>
                            </Link>
                        </li>
                    </ul>
                </div>
             </div>
        </div>
      
    
      </footer>
    </>
  )
};

export default Footer;
