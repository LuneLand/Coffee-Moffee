import React from 'react'
import Img2 from "../../assets/cafe/2.png";
import Img3 from "../../assets/cafe/3.png";
import Img4 from "../../assets/cafe/4.png";
const ServicesData = [{
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
    "Espresso is a delicious concentrated form of coffee, served in shots. ",
    aosDelay: "100",},
    {
    id: 2,
    img: Img3,
    name: "Cappuccino",
    description:"cappuccino is a balanced coffee that’s served in a large cup with a dusting of chocolate on top.",
    aosDelay: "300",},
{
    id: 3,
    img: Img4,
    name: "mocha",
    description:"Deliciously sweet, nutty and chocolate.This creamy coffee drink is an espresso-based beverage ",
    aosDelay: "500",
},
];
const Services = () => {
    return (
        <>
        <span id="services"></span>
        <div className="py-10">
            <div className="container">
              {/* Heading section  */}
            <div data-aos="fade-up"
            className="text-center mb-20">
                <h1 className="text-4xl font-bold font-cursive text-gray-800">
                Best Coffee For You
                </h1>
            </div>
              {/* Services Card section  */}
            <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-20 md:gap-4 place-items-center'>
                {ServicesData.map((service) =>(
                    <div className='rounded-2xl bg-white
                    hover:bg-primary hover:text-white relative
                    shadow-xl duration-high group max-w-[300px]'>
                        <div className='h-[200px]'>
                            <img src={service.img} alt=""
                            className='max-w-[200px] block mx-auto
                            transform translate-y-5 group-hover:rotate-6
                            duration-300 rounded'/>
                        </div>
                        <div className='p-4 text-center -translate-y-1'>
                            <div className='w-full'></div>
                            <h1 className='text-xl font-bold'>{service.name}</h1>
                            <p className='text-gray-500 group-hover:text-white
                            duration-high text-sm line-clamp-2'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </>);
    };
    

export default Services