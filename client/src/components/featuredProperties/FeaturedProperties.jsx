import React from 'react'
import useFetch from '../../hooks/useFetch'

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/api/hotels?featured=true&min=4&max=3000000000")
    const images=[
            "https://media-cdn.tripadvisor.com/media/vr-splice-j/02/fd/34/58.jpg",
         "https://www.hotelscombined.in/himg/72/65/11/leonardo-67120291-Tower_178558_O-359871.jpg",
         "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1000,h_800/crm/cooperstownny/13090501_27_0_a0f2590b-5056-a36a-076e7c5cf8418ac0.jpg",
         "https://ak-d.tripcdn.com/images/200t10000000og9nd2120_R_960_660_R5_D.jpg"
    ]
    return (
        <div className="fp flex gap-8 ml-40 mt-4 mb-11">
        {loading ? ("Loading") 
            : (
            <>
                {data && images.map((img,i) =>(
                    <div className="fpItem" key={i}>
                        <img src={img} alt="" className="fpImg rounded-lg h-52 w-64"/>
                        <h1 className="fpName font-bold mt-2">{data[i]?.name}</h1>
                        <span className="fpCity"> {data[i]?.city}</span>
                        <br/>
                        <span className="fpPrice font-semibold"> Starting from ${data[i]?.cheapestPrice}</span>
                        {data[i]?.rating && <div className="fpRating">
                            <button className="fpbutton  bg-cyan-600 border-s-2 border-black px-1 rounded-sm mr-1 my-1">{data[i]?.rating}</button>
                            <span> Excellent</span>
                        </div>}
                    </div>
                ))}
            </>)}
        </div>
    )
}


// {/* <div className="fp flex gap-6 ml-20 mt-4 mb-11"></div>
//                     <div className="fpItem">
//                 <img src="https://media-cdn.tripadvisor.com/media/vr-splice-j/02/fd/34/58.jpg" alt="" className="fpImg rounded-lg h-52 w-64" />
//                 <h1 className="fpName font-bold mt-2">The James Connolly Mews</h1>
//                 <span className="fpCity"> Dublin</span>
//                 <br/>
//                 <span className="fpPrice font-semibold"> Starting from $542.48</span>
//                 <div className="fpRating">
//                     <button className="fpbutton  bg-cyan-600 border-s-2 border-black px-1 rounded-sm mr-1 my-1">8.9</button>
//                     <span> Excellent</span>
//                 </div>
//             </div>
//             <div className="fpItem">
//                 <img src="https://www.hotelscombined.in/himg/72/65/11/leonardo-67120291-Tower_178558_O-359871.jpg" alt="" className="fpImg rounded-lg h-52 w-64" />
//                 <h1 className="fpName font-bold mt-2">The Tower Hotel</h1>
//                 <span className="fpCity"> London</span>
//                 <br/>
//                 <span className="fpPrice font-semibold"> Starting from $221.10</span>
//                 <div className="fpRating">
//                     <button className="fpbutton bg-cyan-600 border-s-2 border-black px-1 rounded-sm mr-1 my-1">8.9</button>
//                     <span> Excellent</span>
//                 </div>
//             </div>
//             <div className="fpItem">
//                 <img src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1000,h_800/crm/cooperstownny/13090501_27_0_a0f2590b-5056-a36a-076e7c5cf8418ac0.jpg" alt="" className="fpImg rounded-lg h-52 w-64" />
//                 <h1 className="fpName font-bold mt-2">The Otesaga Resort Hotel</h1>
//                 <span className="fpCity"> New York</span>
//                 <br/>
//                 <span className="fpPrice font-semibold"> Starting from $820</span>
//                 <div className="fpRating">
//                     <button className="fpbutton  bg-cyan-600 border-s-2 border-black px-1 rounded-sm mr-1 my-1">8.9</button>
//                     <span> Excellent</span>
//                 </div>
//             </div>
//             <div className="fpItem">
//                 <img src="https://ak-d.tripcdn.com/images/200t10000000og9nd2120_R_960_660_R5_D.jpg" alt="" className="fpImg rounded-lg h-52 w-64" />
//                 <h1 className="fpName font-bold mt-2">Woodview Farmhouse</h1>
//                 <span className="fpCity"> Dublin</span>
//                 <br/>
//                 <span className="fpPrice font-semibold"> Starting from $420</span>
//                 <div className="fpRating">
//                     <button className="fpbutton bg-cyan-600 border-s-2 border-black px-1 rounded-sm mr-1 my-1">8.9</button>
//                     <span> Excellent</span>
//                 </div>
//             </div>
//         </div>

//     )
// } */}

export default FeaturedProperties