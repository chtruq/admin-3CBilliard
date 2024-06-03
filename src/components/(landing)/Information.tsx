import React from 'react'

const Information = () => {
    return (
        <div className='container mb-10 mx-auto p-0'>
            <section className='m-10 flex justify-center'>
                <p className='text-5xl font-semibold'>Nổi bật</p>
            </section>
            <section className='flex flex-col space-y-10 md:space-y-0 mx-5 md:mx-12 md:my-6 md:grid grid-cols-3'>
                <div className='flex flex-col text-center items-center'>
                    <img className='w-40' src="/assets/image/good-feedback.png" alt="" />
                    <p className='text-xl font-light'>Cung cấp các đánh giá và đánh giá tích cực từ khách hàng để tạo niềm tin và uy tín cho 3C Billiard.</p>
                </div>
                <div className='flex flex-col text-center items-center'>
                    <img className='w-40' src="/assets/Image/time.png" alt="" />
                    <p className='text-xl font-light'>Tối ưu hóa quy trình đặt bàn và thanh toán cọc để làm cho trải nghiệm người dùng trở nên thuận lợi và nhanh chóng.</p>
                </div>
                <div className='flex flex-col text-center items-center'>
                    <img className='w-40' src="/assets/image/user-experience.png" alt="" />
                    <p className='text-xl font-light'>Tạo ra một trải nghiệm thú vị và độc đáo cho người dùng, từ việc đặt bàn tới việc đăng bài giao lưu trên ứng dụng</p>
                </div>
            </section>
        </div>
    )
}

export default Information