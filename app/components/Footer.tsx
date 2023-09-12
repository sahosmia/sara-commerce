import { socialLinks, images, siteEnv } from '../data/dummy'
import {BiMapAlt,} from 'react-icons/bi'
import {BsTelephone,} from 'react-icons/bs'
import { MdOutlineMailOutline} from 'react-icons/md'
import { FaPaperPlane } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

type FooterTitlePropsType = {
    title: string;
}

const Footer = () => {

  const Title = ({title} : FooterTitlePropsType) => (
    <h2 className="text-xl font-bold mb-4 md:mb-8 text-white">{title}</h2>
  )

  const footerIcon = "text-2xl "
  const importantLinks = [
    {title: "Home", url:"/"},
    {title: "Shop", url:"/shop"},
    {title: "About Us", url:"/about-us"},
    {title: "Terms and condition", url:"/terms-condition"},
    {title: "Frequently Asked Questions", url:"/faq"},
  ]

  return (


 <div
      className="text-paragraf relative py-16 bg-cover bg-no-repeat bg-center after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-black after:bg-opacity-90 after:-z-10 z-10"
      style={{ backgroundImage: "url(/images/bg/footer-bg.png)" }}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16  md:gap-16">
        <div>
          <Image width={500} height={500} className='w-28 block mb-4' src={images.darkLogo} alt={siteEnv.name} />
          
          <p className='pb-8 text-paragraf'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque est suscipit aut corporis et laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque est suscipit aut corporis et laboriosam</p>
       
       
          <ul className="flex gap-2">
            {socialLinks.map((social, socialKey) => (
              <li key={socialKey}>
              <Link href={social.url}>
                <span  className=" bg-transparent hover:bg-white border w-8 h-8 flex items-center justify-center rounded text-white hover:text-black text-xl transition-all">
                  {social.icon}
                </span>
              </Link>
            </li>
            ) )}
           
          </ul>
        </div>

        <div>
          <Title title="Talk To Us"/>

          <div className='flex flex-col gap-4 pb-3'>
            <div className="flex gap-5">
             <span  className={footerIcon}><BiMapAlt/></span>
              <p>72/54 Link Road, Radison Area, Singapur</p>
            </div>

            <div className="flex gap-5">
              <span  className={footerIcon}>
                <BsTelephone/>
              </span>
              <ul>
                <li>+8801952827301</li>
                <li>+8801952827301</li>
              </ul>
            </div>

            <div className="flex gap-5">
              <span className={footerIcon}>
                <MdOutlineMailOutline/>
              </span>
              <p>sahosmia.webdv@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <Title title="Important Link" />
          <ul>
            {importantLinks.map((link, linkKey) => (
              <li key={linkKey} className="mb-2"><Link className='capitalize hover:text-main transition-all' href={link.url}>- {link.title}</Link></li>
            ))}
           
          </ul>
        </div>
        <div>
          <Title title="Newsletter"/>
          <p className="mb-6 text-paragraf">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, non. Eligendi autem maxime consequatur vero distinctio odio dolorem fugiat nihil.</p>
          <form action="" className='flex h-10'>
            <input type="text" placeholder="Your Email Address" className="bg-transparent border border-r-0 p-2 w-48"/>
            <button className="w-10 h-full border  bg-black py-2 flex justify-center  text-xl "><FaPaperPlane/></button>
          </form>
        </div>
      </div>
    </div>  )
}

export default Footer