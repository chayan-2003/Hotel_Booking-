import React, { useState , useContext} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from "../../context/AuthContext";
import Reserve from '../../components/reserve/Reserve';

const Hotel = () => {
  const location=useLocation();
  const id=location.pathname.split("/")[2];
  const [slideNumber,setSlideNumber]=useState(0);
  const [open,setOpen]=useState(false);
  const [openModal,setOpenModal]=useState(false);

  const {data,loading,error}=useFetch(`/api/hotels/find/${id}`);
  const { user } = useContext(AuthContext);

  const navigate=useNavigate();
  const {date , options}= useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }


  const days= dayDifference(date[0]?.endDate, date[0]?.startDate);


  // const photos = [
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
  //   },
  // ];

  const handleOpen=(i) =>{
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove= (direction) =>{
    let newslideNumber
    if(direction==="l"){
      newslideNumber= slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newslideNumber= slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newslideNumber)
  }

  const handleClick=()=>{
    if(user){
      setOpenModal(true);
    }else{
      navigate("/");
    }
  }

  return (
    <div>
      <div className="bg-blue-700 pb-16"><Navbar />
        <Header type="list" />
      </div>
      {loading ? ("loading") :
      (<div className="HotelContainer">
        {open && <div className="slider flex items-center sticky top-0 left-0 w-full h-full z-50 ">
          <FontAwesomeIcon icon={faCircleXmark} className="close position absolute top-6 right-8 text-3xl cursor-pointer text-gray-400" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow text-4xl cursor-pointer text-gray-400 ml-7" onClick={()=>handleMove("l")}/>
          <div className="slideWrapper h-full w-full flex justify-center items-center">
            <img src={data.photos[slideNumber]} alt="" className="sliderImg ml-48 mr-52 mt-20 px-48" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow text-4xl cursor-pointer text-gray-400 mr-7" onClick={()=>handleMove("r")}/>

        </div>}
        < div className="HotelWrapper ml-20">
          <button className="booknow position absolute right-44 bg-blue-800 text-white mt-4 rounded py-2 px-5 mr-2">Reserve or Book Now!</button>
          <div class=" ml-24">
          <h1 className="HotelTitle font-bold text-2xl mt-7">
            {data.name}
          </h1>
          <div className="hotelAdress mt-2 text-sm">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="ml-2 font-semibold">  {data.address}</span>
          </div>
          <div className="hotelDistance font-semibold mt-4  text-blue-700">
            Excellent location – {data.distance}m from center
          </div>
          <div className="hotelPriceHighlight text-green-700 font-bold mt-2">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </div>
          </div>
          <div className="hotelImages grid grid-cols-3 mr-52 gap-2 ml-28 scale-105 mt-9">
            {data.photos?.map((photo,i) => (
            <div className="HotelImageWrapper ">
              <img onClick={()=>handleOpen(i)} src={photo} alt="" className="hotelIMg h-56  scale-100   " />
            </div>))}
          </div>
          < div className="HotelDetails mt-14 ml-20 px-2 flex gap-10">
          <div className="HotelDetailsText ">
          <h1 className="hotelTitle text-3xl font-bold">{data.title}</h1>
          <p className="hotelDesc mt-7 font-normal ">
                {/* Located a 5-minute walk from St. Florian's Gate in Krakow,
                 Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service. */}
                {data.desc}
              </p>
               </div>
            <div className="HotelDetailPrice bg-cyan-100 mr-44 ">
            <h1 className="text-lg font-bold text-gray-500 pt-4 w-64 px-4 ">Perfect for a {days}-night stay!</h1>
              <div className="mt-4 px-3 text-sm font-semibold ">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
             </div>
              <h2 className="asd text-2xl mt-4 px-3">
                <b >${days * data.cheapestPrice * options.room}</b> ({days}{" "} nights)
              </h2>
              <button onClick={handleClick} className="sad bg-blue-600 text-white px-8 py-2 ml-4 mt-5 rounded-md">Reserve and book now</button>
            </div>   
          </div>
        </div>
      </div>
      )}
      <MailList/>
      <Footer/>
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  )
}

export default Hotel