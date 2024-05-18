import React from 'react'
import useFetch from '../../hooks/useFetch'

const PropertyList = () => {

    const { data, loading, error  } = useFetch("/api/hotels/countByType")
    const images=[
        "https://www.home-designing.com/wp-content/uploads/2017/09/LED-light-striped-bedroom-unique-accent-walls.jpg",
        "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
        "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
        "https://www.tollbrothers.com/blog/wp-content/uploads/2022/06/Edgewood-East_Roswell_Exterior_1_conversion1.jpg"
    ]

    return (
        <div className="plist flex gap-5 ml-44 mt-4">
            {loading ? ("Loading") 
            : (
            <>
                {data && images.map((img,i) =>(
                    <div className="pListItems" key={i}>
                        <img src={img} alt="" className="pListImage rounded-lg h-40 w-52"/>
                        <div className="PlistTITLE capitalize">
                            <h1 className="font-bold">{data[i]?.type}</h1>
                            <h2>{data[i]?.count} {data[i]?.type}</h2>
                        </div>
                    </div>
                ))}
            </>)}
        </div>
    )
}

//             <div className="pListItems">
//                 <img src="https://www.home-designing.com/wp-content/uploads/2017/09/LED-light-striped-bedroom-unique-accent-walls.jpg" alt="" className="pListImage rounded-lg h-40 w-48" />
//                 <div className="PlistTITLE">
//                     <h1 className="font-bold">Hotels</h1>
//                     <h1>233 Hotels</h1>
//                 </div>
//             </div>
//             <div className="pListItems">
//                 <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" className="pListImage rounded-lg h-40 w-48"/>
//                 <div className="PlistTITLE">
//                     <h1 className="font-bold">Apartments</h1>
//                     <h1>233 Apartments</h1>
//                 </div>
//             </div>
//             <div className="pListItems">
//                 <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" className="pListImage rounded-lg h-40 w-48" />
//                 <div className="PlistTITLE">
//                     <h1 className="font-bold">Resorts</h1>
//                     <h1>233 Resorts</h1>
//                 </div>
//             </div>
//             <div className="pListItems">
//                 <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" alt="" className="pListImage rounded-lg h-40 w-48" />
//                 <div className="PlistTITLE">
//                     <h1 className="font-bold">Cottages</h1>
//                     <h1>233 Cottages</h1>
//                 </div>
//             </div>
//             <div className="pListItems">
//                 <img src="https://www.tollbrothers.com/blog/wp-content/uploads/2022/06/Edgewood-East_Roswell_Exterior_1_conversion1.jpg" alt="" className="pListImage rounded-lg h-40 w-48" />
//                 <div className="PlistTITLE">
//                     <h1 className="font-bold">FarmHouse</h1>
//                     <h1>233 Farmhouse</h1>
//                 </div>
//             </div></>)}
//         </div>
//     );
// };

export default PropertyList