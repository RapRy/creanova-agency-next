import React from 'react'
import TitlePill from '../TitlePill'

type Props = {}

const FeaturedWorks = (props: Props) => {
  return (
    <div className='mt-32'>
        <div>
            <TitlePill title='Works' />
            <h2 className="text-secondary text-4xl w-full font-semibold my-2 leading-normal">
                Featured Works
            </h2>
            <p className="text-text-color-2 text-lg">
                Find our latest works here
            </p>
        </div>
        <div className='mt-14 flex flex-wrap gap-[32px]'>
            <div className="w-full h-[486px] rounded-2xl relative bg-[url('/images/featured-works-works.png')]">
                <div className="absolute top-0 right-0 w-[300px] h-[70px]">
                    <div className="relative w-full h-full">
                        <div className='bg-transparent absolute top-0 right-[300px] w-[100px] h-[40px] rounded-se-2xl shadow-[7px_-20px_0px_0px_#f3f3f3]' />
                        <div className='bg-primary w-[300px] h-[70px] absolute top-0 right-0 rounded-es-2xl' />
                        <div className='bg-transparent absolute w-14 h-[60px] top-[70px] right-[0px] rounded-se-2xl shadow-[7px_-7px_0px_0px_#f3f3f3]' />
                    </div>
                </div>
                <div className="absolute top-[23px] left-[25px]">
                    <TitlePill title='WORKS' bg="bg-text-color-1/50" border="border-2 border-white" textColor='text-white' />
                </div>
                <div className='absolute bottom-[25px] left-[25px] bg-white/75 p-4 rounded-md'>
                    <p className='text-secondary text-2xl font-medium'>Website Design for Digital Agency</p>
                </div>
            </div>     
            <div className="w-[calc(50%-16px)] h-[460px] rounded-2xl relative bg-[url('/images/featured-works-social-media.png')]">
                <div className="absolute top-[23px] left-[25px]">
                    <TitlePill title='SOCIAL MEDIA' bg="bg-text-color-1/50" border="border-2 border-white" textColor='text-white' />
                </div>
                <div className='absolute bottom-[25px] left-[25px] right-[25px] bg-white/75 p-4 rounded-md'>
                    <p className='text-secondary text-2xl font-medium text-center'>Social Media Strategy for Restaurant</p>
                </div>
            </div>       
            <div className="w-[calc(50%-16px)] h-[460px] rounded-2xl relative bg-[url('/images/featured-works-marketing.png')]">
                <div className="absolute top-[23px] left-[25px]">
                    <TitlePill title='MARKETING' bg="bg-text-color-1/50" border="border-2 border-white" textColor='text-white' />
                </div>
                <div className='absolute bottom-[25px] left-[25px] right-[25px] bg-white/75 p-4 rounded-md'>
                    <p className='text-secondary text-2xl font-medium text-center'>Branding a New Startup</p>
                </div>
            </div>       
        </div>
    </div>
  )
}

export default FeaturedWorks