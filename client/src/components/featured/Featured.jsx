import React from 'react';
import useFetch from '../../hooks/useFetch.js';

const Featured = () => {

    const { data, loading, error } = useFetch("api/hotels/countByCity?cities=Berlin,New York,London")
    console.log(data);
    return (
        <div className="featured flex gap-10 relative top-16 ml-56">
           
            {loading ? ("Loading please wait") 
            : (
            <>
            <div className="featuredItem">
                <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/526000/526877-dublin.jpg" className="featuredImage rounded-3xl border-2 h-60 w-80" />
                <div className="featuredTitle relative bottom-24 text-3xl pl-7  text-white  font-bold">
                    <h1 className="font-serif">Berlin</h1>
                    <h1 className='text-lg pt-1'>{data[0]} properties</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-688899881-1519413300.jpg?resize=1200:*" className="featuredImage rounded-3xl border-2 h-60 w-80" />
                <div className="featuredTitle relative bottom-24 text-3xl pl-7  text-white  font-bold">
                    <h1 className="font-serif">New York</h1>
                    <h1 className='text-lg pt-1'>{data[1]} properties</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/57/44/0c/filename-img-1097-jpg.jpg?w=700&h=-1&s=1" className="featuredImage rounded-3xl border-2 h-60 w-80" />
                <div className="featuredTitle relative bottom-24 text-3xl pl-7  text-white  font-bold">
                    <h1 className="font-serif">London</h1>
                    <h1 className='text-lg pt-1'>{data[2]} properties</h1>
                </div>
            </div></>)}
        </div>
    );
};

export default Featured