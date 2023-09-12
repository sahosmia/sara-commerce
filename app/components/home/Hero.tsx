import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

const Hero = () => {

  return (
    <section className='pt-40 pb-40 relative'>

      <div className=' absolute right-[9%] -z-10'>
        <Image  width={500} height={500} src="/images/hero/shape-1.svg" alt="" />
      </div>
      <div className=' absolute right-[16%] -z-10'>
        <Image  width={500} height={500} src="/images/hero/shape-2.svg" alt="" />
      </div> 
      <div className='absolute w-10 h-10  bg-main bg-opacity-30 rounded-full home-shap-1'></div>
      <div className='absolute w-4 h-4  bg-green-800 bg-opacity-90 rounded-full home-shap-2'></div>
      <div className='absolute w-4 h-4  bg-red-400 bg-opacity-30 rounded-full home-shap-3'></div>
      <div className='absolute w-6 h-6  bg-yellow-400 bg-opacity-60 rounded-full home-shap-4'></div>
      <div className='absolute w-6 h-6  bg-indigo-400 bg-opacity-30 rounded rotate-45 home-shap-5'></div>
      <div className='absolute w-6 h-6 border border-pink-500 bg-opacity-30 rounded rotate-45 home-shap-5'></div>
      <div className='absolute w-6 h-6 border border-violet-500 bg-opacity-30 rounded rotate-45 home-shap-6'></div>



       <div className="container flex  max-lg:flex-col-reverse md:justify-between items-center gap-10">
        <div className="mr-20 flex-1">
          <h2 className="font-secondary font-extrabold text-6xl pb-6">Take best shopping excpriece with us</h2>

          <p className="mb-6 font-primary text-gray-600 leading-relaxed">
            At 4U Logistics, we are more than just a logistics company - we are
            your reliable partner in navigating the complexities of supply chain
            management. With a passion for excellence and a commitment to your
            success, we offer tailored logistics solutions designed to streamline
            your operations and propel your business forward.
          </p>
          <Link href="/about-us" className="btn-fill">Shop Now <span className='transition-all duration-1000 ease-in-out animate-bounce inline-block'><BiChevronDown/></span></Link>
        </div>

        <div className="grid grid-cols-3 md:pl-20 gap-5 flex-1">
          <div className="rounded-box col-span-2 max-h-60">
            <Image  width={500} height={500} className="w-full h-full object-cover rounded-xl" src="/images/hero/hero-4.png" alt="" />
          </div>
          <div className="rounded-box max-h-60">
            <Image  width={500} height={500} className="w-full h-full object-cover rounded-xl" src="/images/hero/hero-1.png" alt="" />
          </div>
          <div className="rounded-box h-48">
            <Image  width={500} height={500} className="w-full h-full object-cover rounded-xl" src="/images/hero/hero-3.png" alt="" />
          </div>
          <div className="rounded-box col-span-2 h-48">
            <Image  width={500} height={500} className="w-full h-full object-cover rounded-xl" src="/images/hero/hero-2.png" alt="" />
          </div>
        </div>
    </div>
    </section>
  )
}

export default Hero