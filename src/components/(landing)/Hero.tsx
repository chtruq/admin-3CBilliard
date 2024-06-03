import React from 'react'
import { Button } from '../ui/button'

function Hero() {
  return (
    <div className='container mx-auto px-0'>
      <div className="bg-[url('/assets/image/bg_hero.png')] w-full h-full">
        <section>
          <div className='py-5 md:py-10 flex flex-row justify-start items-center'>
            <p className='text-lg font-bold pl-5 mr-2 md:pl-0 md:ml-12 md:mr-5 md:font-bold md:text-xl'>Họp tác cùng với: </p>
            <div className='flex space-x-4 md:space-x-10'>
              <img className='w-8 md:w-14' src="/assets/image/facebook_icon.png" alt="logo" />
              <img className='w-8 md:w-14' src="/assets/image/zalo_icon.png" alt="logo" />
              <img className='w-8 md:w-14' src="/assets/image/insta_icon.png" alt="logo" />
              <img className='w-8 md:w-14' src="/assets/image/appstrore_icon.png" alt="logo" /></div>
          </div>
        </section>
        <section>
          <div className='grid md:grid-cols-2'>
            <div className='px-5 md:pl-12'>
              <p className='text-4xl font-bold md:pb-7'>Hãy cùng trải nghiệm với 3C Biliard</p>
              <p className='text-[#040F13] font-light text-2xl'>Tìm kiếm và đặt một bàn đơn giản tại các câu lạc bộ bida trong khu vực của bạn và tham gia cộng đồng bida!!
              </p>
              <p className='text-[#040F13] font-light text-2xl'>Hãy cùng nhau tạo ra những phút giây vui vẻ và tận hưởng niềm đam mê bida này nhé.</p>

              <div className='mx-auto flex flex-col justify-center items-center'>
                <div className='p-5 md:pt-20'>
                  <Button className='px-8 py-8 border-black rounded-md bg-gray-200 text-black hover:bg-gray-200'>Tải ứng dựng về máy của bạn</Button>
                </div>
                <p className=''>Ứng dụng hỗ trợ cho Android!</p>
              </div>
            </div>

            <div className='flex items-center p-5 md:pr-12'>
              <img src="/assets/image/hero_image.png" alt="hero--image" />
            </div>
          </div>
        </section>
      </div>


    </div>
  )
}

export default Hero