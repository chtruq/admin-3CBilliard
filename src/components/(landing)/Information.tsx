import React from 'react'

const Information = () => {
    return (
        <div className='mb-10 mx-auto p-0'>
            <section className='m-10 flex justify-center'>
                <p className='text-5xl font-semibold'>Nổi bật</p>
            </section>
            <section className='flex flex-col space-y-10 md:space-y-0 mx-5 md:mx-12 md:my-6 md:grid grid-cols-3'>
                <div className='flex flex-col text-center items-center'>
                    <img className='w-32 h-32 md:w-40 md:h-40' src="/assets/image/good-feedback.png" alt="" />
                    <p className='text-xl font-light'>Cung cấp các đánh giá thực tế từ khách hàng giúp niềm tin và uy tín cho 3C billiard.</p>
                </div>
                <div className='flex flex-col text-center items-center'>
                    <img className='w-32 h-32 md:w-40 md:h-40' src="/assets/Image/time.png" alt="" />
                    <p className='text-xl font-light'>Tối ưu quy trình đặt bàn và thanh toán giúp cho trải nghiệm người dùng trên thuận lợi và nhanh chóng.</p>
                </div>
                <div className='flex flex-col text-center items-center'>
                    <img className='w-32 h-32 md:w-40 md:h-40' src="/assets/image/user-experience.png" alt="" />
                    <p className='text-xl font-light'>Tạo trải nghiệm thú vị và độc đáo cho người dùng, từ đặt bàn đến đăng bài chia sẻ trên ứng dụng.</p>
                </div>
            </section>
        </div>
    )
}

export default Information