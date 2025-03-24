"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const ImageAnimation = () => {
    useEffect(() => {
        gsap.from(".image", {
            opacity: 0,
            y: 80,
            rotationY: 180,
            stagger: 0.3,
            duration: 1,
            ease: "power4.out",
        });
    }, []);

    return (
        <section className='px-4 min-h-screen flex items-center justify-center py-10 bg-[#191423]'>
                <div className="relative max-w-[1140px] flex flex-col mx-auto">
                    <p className='text-[46px] max-lg:text-4xl max-md:text-3xl font-semibold text-white mb-9'>Vertical Integration - In house Tech and IP</p>
                    <div className='flex gap-4 flex-wrap justify-center'>
                        <Image
                            className="image max-w-[273px] max-sm:max-w-[400px] w-full"
                            width={273}
                            height={311}
                            src="/assets/images/mobile-app.png"
                            alt='mobile app'
                        />
                        <Image
                            className="image max-w-[273px] max-sm:max-w-[400px] w-full"
                            width={273}
                            height={311}
                            src="/assets/images/hmrc-api.png"
                            alt='mobile app'
                        />
                        <Image
                            className="image max-w-[273px] max-sm:max-w-[400px] w-full"
                            width={273}
                            height={311}
                            src="/assets/images/ai.png"
                            alt='mobile app'
                        />
                        <Image
                            className="image max-w-[273px] max-sm:max-w-[400px] w-full"
                            width={273}
                            height={311}
                            src="/assets/images/customer-kyc.png"
                            alt='mobile app'
                        />
                        <Image
                            className="image max-w-[273px] max-sm:max-w-[400px] w-full"
                            width={273}
                            height={311}
                            src="/assets/images/messaging.png"
                            alt='mobile app'
                        />
                        <Image
                            className="image max-w-[273px] max-sm:max-w-[400px] w-full"
                            width={273}
                            height={311}
                            src="/assets/images/hnrc.png"
                            alt='mobile app'
                        />
                        <Image
                            className="image max-w-[273px] max-sm:max-w-[400px] w-full"
                            width={273}
                            height={311}
                            src="/assets/images/employee.png"
                            alt='mobile app'
                        />
                        <Image
                            className="image max-w-[273px] max-sm:max-w-[400px] w-full"
                            width={273}
                            height={311}
                            src="/assets/images/company-dashboard.png"
                            alt='mobile app'
                        />
                    </div>
                </div>
        </section>
    );
};

export default ImageAnimation;
