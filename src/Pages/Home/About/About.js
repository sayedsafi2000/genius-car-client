import React from 'react';
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" />
                <img src={parts} className="absolute w-3/5 rounded-lg shadow-2xl right-5  top-1/2 border-8" />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl font-bold  text-orange-600'>About Us</p>
                    <h1 className="text-5xl font-bold my-5">We are qualified <br />& of experience <br />in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corrupti odio tenetur. Ipsam perspiciatis vitae aut atque praesentium, dolorum commodi cupiditate veniam asperiores quae autem consequatur ut quidem, eaque quod.
                    </p>
                    <button className="btn btn-primary">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;