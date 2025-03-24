"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Heading from './common/Heading';
import Image from 'next/image';
import Description from './common/Description';

gsap.registerPlugin(ScrollTrigger);

const GsapScroll = () => {
    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".parent",
                start: 'top top',
                end: '+=800%',
                pin: true,
                scrub: 1,
            }
        });

        tl
            .to(".image-one", { scale: 0, opacity: 0, duration: 0.6 }, 0.5)
            .to(".image-two", { scale: 1, opacity: 1, duration: 0.6 }, 0.8)
            .to(".image-two", { scale: 0, opacity: 0, duration: 0.6 }, 1.4)
            .to(".image-three", { scale: 1, opacity: 1, duration: 0.6 }, 1.4)
            .to(".image-three", { scale: 0, opacity: 0, duration: 0.6 }, 2)
            .to(".image-four", { scale: 1, opacity: 1, duration: 0.6 }, 2)
    }, []);

    return (
        <section className="min-h-screen overflow-hidden">
            <div className="parent pt-5 px-4">
                <div className="relative max-w-[1140px] mx-auto">

                    <div className='absolute gap-4 image-one flex items-center'>
                        <div className='max-w-[519px] min-h-[674px] w-full bg-[#6FFFA8] rounded-2xl py-4 px-[26px]'>
                            <Heading heading="Real Time Tax" headingClass="!text-black" />
                            <Description descriptionClass="!text-black !mt-[26px]" customDescription="Our app will give you your live tax position which will be the actual tax amount owed across multiple income streams, to date. There will be no need to wait until the end of the year to see what you owe, taking all of the anxiety of the unknown away"/>
                            <Description descriptionClass="!text-black mt-2" customDescription="All incoming and outgoing transactions will be updated in real time, along with any deductions or credits, which means users will have the most up to date figure every time they open the app."/>
                            <Description descriptionClass="!text-black mt-2" customDescription="For most people their tax bill can be their biggest outgoing. Waiting up to 20 months from the point of income to finding out the final tax bill can make things hard to plan"/>
                            <Description descriptionClass="!text-black mt-2" customDescription="And with HMRC’s Making Tax Digital initiative, businesses will soon be required to report their income every quarter - making up to date record keeping a necessity"/>
                            <Heading headingClass="!text-black !mt-[26px]" heading="Live tracking of the tax return" />
                            <Description descriptionClass="!text-black !mt-[26px]" customDescription="Once submitted, users will be kept in the loop on the progress of their return, every step of the way. Our system is integrated with HMRC and alerts will be sent to the user to take action where and when required."/>

                        </div>
                        <div>
                            <Image width={604} height={675} src="/assets/images/image-one.png" alt='image one'/>
                        </div>
                    </div>
                    <div className='absolute gap-4 items-center scale-0 image-two flex'>
                        <div className='max-w-[519px] min-h-[674px] w-full bg-[#6621E9] rounded-2xl py-4 px-[26px]'>
                            <Heading heading="Multiple Incomes in one place" />
                            <Description descriptionClass="!mt-[26px]" customDescription="Importing income and outgoings across multiple income streams is currently not possible on any other software, and our app will automatically highlight expenses eligible for a refund."/>
                            <Description descriptionClass="!mt-2" customDescription="Multiple incomes can include anything from salary, property, capital gains, self employment, overseas income, dividends & interest or tax credits."/>
                            <Description descriptionClass="!mt-2" customDescription="We’ll show the tax breakdown per income type and our app will even calculate an overall aggregated tax calculation."/>
                            <Heading headingClass="!mt-[26px]" heading="Live tracking of the tax return" />
                            <Description descriptionClass="!mt-[26px]" customDescription="Users on the premium subscription tier will be paired with a tax advisor to help them with the entire process. Our experts will help plan their business and taxes to make sure they stay as tax efficient as possible. We will use our expertise to either save them money on their tax bill or get the best possible tax rebate so that they can keep more money in their pockets."/>
                            <Description descriptionClass="!mt-2" customDescription="Our in-app function will enable them to ask questions and get real time answers on any tax issues they may be facing, with sector specific tax assistants on hand to provide valuable insight around the relevant tax situation."/>
                            <Description descriptionClass="!mt-2" customDescription="We’ll show the tax breakdown per income type and our app will even calculate an overall aggregated tax calculation"/>

                        </div>
                        <div>
                            <Image width={604} height={675} src="/assets/images/image-two.png" alt='image one'/>
                        </div>
                    </div>
                    <div className='absolute items-center gap-4 scale-0 image-three flex'>
                        <div className='max-w-[519px] min-h-[674px] w-full bg-[#FFABC7] rounded-2xl py-4 px-[26px]'>
                            <Heading headingClass="!text-black" heading="Bookkeeping" />
                            <Description descriptionClass="!text-black !mt-[26px]" customDescription="We’ll enable people to reconcile all of their transactions in one place. Our app will import and categorise bank feeds to determine which of the expenses qualify. That means less time spent worrying about tax rules and more time spent doing the things they enjoy."/>
                            <Description descriptionClass="!text-black !mt-2" customDescription="Our banking level secure encryption cloud storage, will store expense receipts in order to ensure that the tax return is fully compliant in case of any HMRC enquiries."/>
                            <Heading headingClass="!text-black !mt-[26px]" heading="Live tax admin support" />
                            <Description descriptionClass="!text-black !mt-[26px]" customDescription="All of the income and outgoings will be tracked so that the self assessment income reporting can be completed in the app."/>
                            <Description descriptionClass="!text-black !mt-2" customDescription="Because Pie is a registered tax agent with HMRC, it will be able to send off your self-assessments directly to HMRC without needing to leave or download the data outside of the app."/>
                            
                            <Description descriptionClass="!text-black !mt-2" customDescription="Users will also have the option to pay a £59 checking fee to have their return reviewed and checked by tax assistants, that will have been trained and certified by our in house CIMA qualified accountancy practice."/>

                        </div>
                        <div>
                            <Image width={604} height={675} src="/assets/images/image-three.png" alt='image one'/>
                        </div>
                    </div>
                    <div className='absolute items-center max-md:flex-col scale-0 image-four gap-4 flex'>
                        <div className='max-w-[519px] min-h-[674px] w-full bg-[#026070] rounded-2xl py-4 px-[26px]'>
                            <Heading heading="Real Time Tax" />
                            <Description customDescription="Our app will give you your live tax position which will be the actual tax amount owed across multiple income streams, to date. There will be no need to wait until the end of the year to see what you owe, taking all of the anxiety of the unknown away"/>
                            <Description customDescription="Our app will give you your live tax position which will be the actual tax amount owed across multiple income streams, to date. There will be no need to wait until the end of the year to see what you owe, taking all of the anxiety of the unknown away"/>
                            <Description customDescription="Our app will give you your live tax position which will be the actual tax amount owed across multiple income streams, to date. There will be no need to wait until the end of the year to see what you owe, taking all of the anxiety of the unknown away"/>
                            <Description customDescription="Our app will give you your live tax position which will be the actual tax amount owed across multiple income streams, to date. There will be no need to wait until the end of the year to see what you owe, taking all of the anxiety of the unknown away"/>
                            <Heading heading="Live tracking of the tax return" />
                            <Description customDescription="Once submitted, users will be kept in the loop on the progress of their return, every step of the way. Our system is integrated with HMRC and alerts will be sent to the user to take action where and when required."/>

                        </div>
                        <div>
                            <Image className='max-w-[604px] w-full' width={604} height={675} src="/assets/images/image-four.png" alt='image one'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GsapScroll;
