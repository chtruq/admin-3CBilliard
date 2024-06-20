import React from 'react'

const Footer = () => {
    return (
        <div className='p-0 md:px-8 mx-auto bg-[#E1DADA]'>
            <div className='p-2 flex flex-col justify-between space-y-2'>
                <a href='tel:0912128057'>
                    <div className='flex flex-row'>
                        <img src="/assets/image/phone_icon.png" alt="logo" />
                        <p>+84912128057</p>
                    </div>
                </a>
                <a href='mailto:3cbilliardexe201@gmail.com'>
                    <div className='flex flex-row'>
                        <img src="/assets/image/mail_icon.png" alt="logo" />
                        <p>3cbilliardexe201@gmail.com</p>
                    </div>
                </a>
                <div className='flex flex-row space-x-4'>
                    <p>Thông tin thêm</p>
                    <a href='https://www.facebook.com/profile.php?id=61559047420622'>
                        <img src="/assets/image/face_icon.png" alt="logo" />
                    </a>
                    <a href='https://www.tiktok.com/@3c.billiard?_t=8moTf8qb8fX&_r=1'>
                        <img src="/assets/image/tiktok_icon.png" alt="logo" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer