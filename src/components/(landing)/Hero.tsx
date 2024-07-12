import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className=" mx-auto px-0">
      <div className="bg-[url('/assets/image/bg_hero.png')] w-full h-full">
        {/* <section>
          <div className='py-5 md:py-10 flex flex-row justify-start items-center'>
            <p className='text-lg font-bold pl-5 mr-2 md:pl-0 md:ml-12 md:mr-5 md:font-bold md:text-xl'>Họp tác cùng với: </p>
            <div className='flex space-x-4 md:space-x-10'>
              <img className='w-8 md:w-14' src="/assets/image/facebook_icon.png" alt="logo" />
              <img className='w-8 md:w-14' src="/assets/image/zalo_icon.png" alt="logo" />
              <img className='w-8 md:w-14' src="/assets/image/insta_icon.png" alt="logo" />
              <img className='w-8 md:w-14' src="/assets/image/appstrore_icon.png" alt="logo" /></div>
          </div>
        </section> */}
        <section>
          <div className="grid md:grid-cols-2 pt-4 md:pt-10">
            <div className="px-5 md:pl-12">
              <p className="text-4xl font-bold md:pb-7">
                Hãy cùng trải nghiệm với 3C Biliard
              </p>
              <p className="text-[#040F13] font-light text-2xl mt-6 mb-2 md:pb-4">
                Tìm kiếm và đặt bàn đơn giản tại câu lạc bộ bida và tham gia
                cộng đồng bida trong khu vực của bạn!!
              </p>
              <p className="text-[#040F13] font-light text-2xl">
                Hãy cùng nhau tạo ra những phút giây vui vẻ và tận hưởng niềm
                đam mê bida này nhé.
              </p>

              <div className="mx-auto flex flex-col justify-center items-center">
                <a
                  href={
                    "https://drive.usercontent.google.com/download?id=13uIPvjIJUEnAQPb4Ththjgmhy5mMi4XC&export=download&authuser=4&confirm=t&uuid=15057d1c-47f4-41b4-85cb-d93781231649&at=APZUnTWluyDhQ5u1pu2CNEPVZ9sF:1720761619565"
                  }
                  className="p-5 md:pt-40"
                >
                  <Button className="px-8 py-8 border-black rounded-md bg-gray-200 text-black hover:bg-gray-200">
                    Tải ứng dụng về máy của bạn
                  </Button>
                </a>
                <p className="">Ứng dụng hỗ trợ cho Android!</p>
              </div>
            </div>

            <div className="flex items-center p-5 md:pr-12">
              <img src="/assets/image/hero_image.png" alt="hero--image" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
