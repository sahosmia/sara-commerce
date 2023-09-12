'use client'
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BiChevronDown, BiChevronRight} from 'react-icons/bi'
import logo from "../../public/images/core/logo.png"
import { categories } from '../data/dummy'

const Header = () => {

    const [isCategory, setIsCategory] = useState(false);
  const categoryCard = useRef<any>(null);

    useEffect(() => {
      const clickHandler = ( {target} : MouseEvent) => {
      console.log(isCategory);
      
      if (!categoryCard.current) return;
      if (!isCategory || categoryCard.current.contains(target)) return;
      setIsCategory(false)
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });


  const siteEnv = "sara";
  return (
      <header className=" bg-transparent absolute top-0 right-0 left-0 z-50">
      <nav className="container h-20 flex justify-between items-center gap-1 ">
        {/* logo  */}
        <div className="flex items-center gap-5">
          <Link 
          href="/">
            <Image width={500} height={500} className="w-24"  src="/images/core/logo.png" alt={siteEnv} />
          </Link>
         <div ref={categoryCard}  className='relative '>
            <button onClick={() => setIsCategory(!isCategory)} className='btn-fill flex items-center'>Category <span className='text-2xl  '><BiChevronDown /></span></button>
            
            {isCategory && (
              <div className=' absolute bg-white shadow w-60 h-auto  rounded'>
                <ul className=' divide-y divide-gray-200 '>
                  {categories.map(category => (
                    <li className='group' key={category.id}>
                      <div className='flex justify-between p-2 px-6 font-semibold text-gray-800 hover:text-main relative '
                      >
                        <h6 className=' block'>{category.title}</h6>

                        <span className='text-2xl  transition-all'><BiChevronRight /></span>
                       
                        {category.subcategories && category.subcategories.length > 0 && (
                            <ul className=' hidden group-hover:block absolute w-full h-auto p-2  px-5 top-0 left-60 bg-white shadow  transition-all duration-300  divide-y divide-gray-200 '>
                              {category.subcategories.map(subcategory => (
                                <li key={subcategory.id} className=''>
                                  <Link href="#" key={subcategory.id} className='text-gray-800 hover:text-main py-2 block'>{subcategory.title }</Link>
                                </li>
                              ))}
                          </ul>
                         )} 
                      </div>
                     
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div> 
        </div>
        
        <ul className="hidden lg:flex gap-3 lg:gap-8 items-center font-roboto">
        
          <li className="group relative transition-all">
            <Link
              className="text-main flex gap-1 font-semibold hover:text-secondary transition-all"
              href="/about-us"
            >
              About
            </Link>
          </li>

          <li className="group relative transition-all">
            <Link
              className="text-main flex gap-1 font-semibold hover:text-secondary transition-all"
              href="shop"
            >
              Shop
            </Link>
          </li>

          <li className="group relative transition-all">
            <Link
              className="text-main flex gap-1 font-semibold hover:text-secondary transition-all"
              href="#"
            >
              Category
              <div className="flex items-center transition-all bg-light-gray">
                <span className="group-hover:hidden text-sm">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
                <span className="hidden group-hover:block text-sm">
                  <i className="fa-solid fa-angle-up"></i>
                </span>
              </div>
            </Link>

            <ul className="absolute top-6 left-0 w-56 border bg-main text-light rounded p-2 hidden transition-all duration-1000 group-hover:block">
              <li className="p-2 border-b last:border-none">
                <Link href="/protfolio">Protfolio</Link>
              </li>
              <li className="p-2 border-b last:border-none">
                <Link href="/team">Team</Link>
              </li>
            </ul>
          </li>

          

          <li className="group relative transition-all">
            <Link
              className="text-main flex gap-1 font-semibold hover:text-secondary transition-all"
              href="news"
            >
              News
            </Link>
          </li>

     
        </ul>

        <div className="flex lg:hidden">
          <span>
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header