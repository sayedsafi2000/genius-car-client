import React from 'react';
import "./Banner.css"
const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="caurosel-img">
                <img src={image} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
                <h1 className='text-6xl font-bold text-white'>Affordable <br />Price for car <br />
                    Servising
                </h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-1/2">
                <p className='w-2/5 text-xl text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsum laboriosam. Quod harum magnam autem consectetur illo </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24  top-3/4">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;