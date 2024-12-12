import React from 'react'
import HeroImg from '../../assets/cafe/coffee2.png'
const Home = () => {
    return (
        <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark
        flex justify-center items-center text-white'>
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* Text content section */}
                    <div className='order-2 sm:order-1 flex flex-col
                    justify-center gap-6 pt-12 sm:pt-0
                    text-center sm:text-left'>
                        <h1 
                        data-aos="fade-up"
                        data-aos-once="true"
                        className='text-5xl sm:text-6xl
                        lg:text-7xl font-bold'>we serve the most delicious {" "}
                            <span 
                            data-aos="zoom-out"
                            data-aos-delay="300"
                            className='bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive'>Coffee</span>{" "}
                            in town 
                        </h1>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <button className='bg-gradient-to-r from-primary to-secondary
                            border-2 border-primary rounded-full px-4 py-2
                            text-white hover:scale-105 duration-200'>Coffee And Code</button>
                        </div>
                    </div>
                    {/* Image section */}
                    <div
                    data-aos="zoom-in"
                    data-aos-duration="300" 
                    className='min-h-[450px] flex justify-center
                    items-center order-1 sm:order-2 relative'>
                        <img
                        data-aos-once="true" 
                        src={HeroImg} alt="coffee img" 
                        className='w-[300px] sm:w-[450px]
                        sm:scale-125 mx-auto spin '/>
                        <div
                        data-aos="fade-right"
                        data-aos-offset="0"
                        className='bg-gradient-to-r
                        from-primary to-secondary
                        absolute bottom-10 right-10 p-3 rounded-xl'>
                            <h1 className='text-white'>Best Coffee</h1>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home