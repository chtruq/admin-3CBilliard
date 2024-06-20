import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Narbar = () => {
    return (
        <div className="px-6 py-4 bg-[#E1DADA]">
            <div className="flex justify-between items-center">
                <img src="/assets/image/logo.svg" alt="logo" className="w-32 md:w-23" />
                <Link href="/signin" className='invisible md:visible'>
                    <Button className='w-0 rounded-3xl px-14 bg-white text-[#2657FF] text-sm border-1 border-black hover:bg-gray-200'>Sign in</Button>
                </Link>
            </div>
        </div>
    )
}

export default Narbar