import Image from 'next/image'

const NewsLetter = () => {
  return (
      <section className="tp-subscribe-area pt-20 pb-20 bg-main relative z-10">
          <div className="tp-subscribe-shape ">
            <div className="absolute opacity-30 mix-blend-luminosity z-10 top-0	"> 
              <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}  src="/images/subscribe/subscribe-shape-1.png" alt="shape"/>
            </div>
            
            <div className="absolute opacity-30  z-10 top-2/4 left-[8%]">               
              <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}  src="/images/subscribe/subscribe-shape-2.png" alt="shape"/>
            </div>

            <div className="absolute mix-blend-luminosity opacity-20 z-10 top-3/4 left-[10%] ">               
              <Image width={0} height={0} sizes="100vw"  style={{ width: '100%', height: 'auto' }}  src="/images/subscribe/subscribe-shape-3.png" alt="shape"/>
            </div>

            <div className="absolute -top-4 right-[10%] -z-10">               
              <Image width={0} height={0} sizes="100vw"  style={{ width: '100%', height: '100%' }}  src="/images/subscribe/subscribe-shape-4.png" alt="shape"/>            
        </div>
        
          </div>
        <div className="container">
            <div className="flex justify-between">
                    <div className="tp-subscribe-content">
                        <span className='uppercase font-medium text-white text-lg'>Sale 20% off all store</span>
                        <h3 className="text-4xl text-white font-bold">Subscribe our Newsletter</h3>
                    </div>
                    <div>
                        <form action="#">
                            <div className="relative">
                              <input className='bg-white border-0 rounded shadow h-14 pr-72 pl-3 w-full' type="email" placeholder="Enter Your Email" />

                              <button className=' bg-black rounded-r shadow text-white font-medium px-10 py-4 absolute right-0 top-0 h-full' type="submit">Subscribe</button>

                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default NewsLetter;