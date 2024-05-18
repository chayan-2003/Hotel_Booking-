import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'


const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error,reFetch} = useFetch(`/api/hotels?city=${destination}&min=${min || 1}&max=${max || 40000}`);

  const handleClick = () =>{
    reFetch();
  }

  return (
    <div>
      <div className="bg-cyan-600 pb-6">
        <Navbar />
        <Header type="list" />
      </div>
      <div className="ListContainer">
        <div className="ListWrapper flex gap-8">
          <div className="ListSearch rounded-lg ml-28 bg-orange-400 mt-5 py-2 pl-4 h-fit text-blue-900 ">
            <h1 className="isTitle mb-2 font-bold text-2xl">Search</h1>
            <div className="isItem font-semibold h-7">
              <label>Destination</label>
              <input placeholder={destination} type="text" className="destItem flex mb-4 mt-2 w-64 px-2 h-10" />
            </div>
            <div className="isItem font-semibold h-7 mb-12 mt-11">
              <label className="checkinDate flex py-1">Check-in Date </label>
              <span onClick={() => setOpenDate(!openDate)} className="checkItem flex bg-white mt-1 px-2 py-2 w-64 mb-2">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />)}
            </div>
            <div className="isItem py-2 text-md">
              <label className="font-semibold ">Options</label>
              <div className="isOptionItem flex justify-between px-4 mt-3">
                <span className="isOptionText">Min price<small> per night</small></span>
                <input type="number" onChange = {e=>setMin(e.target.value)} className="isOptionInput mb-4 w-16 mr-4 px-2 rounded-sm" />
              </div>
              <div className="isOptionItem flex justify-between px-4">
                <span className="isOptionText">Max price<small> per night</small></span>
                <input type="number" onChange = {e=>setMax(e.target.value)} className="isOptionInput mb-4 mr-4 w-16 px-2 rounded-sm" />
              </div>
              <div className="isOptionItem flex justify-between px-4">
                <span className="isOptionText">Adult</span>
                <input type="number" min={1} className="isOptionInput mb-4 mr-4 w-16 px-2 pl-2 rounded-sm" placeholder={options.adult} />
              </div>
              <div className="isOptionItem flex justify-between px-4">
                <span className="isOptionText">Children</span>
                <input type="number" min={0} className="isOptionInput mb-4 mr-4 px-2 w-16 rounded-sm" placeholder={options.children} />
              </div>
              <div className="isOptionItem flex justify-between px-4">
                <span className="isOptionText">Room</span>
                <input type="number" min={1} className="isOptionInput mb-4 w-16 mr-4 px-2 rounded-sm" placeholder={options.room} />
              </div>
            </div>
            <button onClick={handleClick} className="searchLast text-center mt-4 text-lg bg-sky-700 py-1 font-semibold text-white  w-fit ml-20 px-16 relative right-12 ">Search</button>
          </div>
          <div className="ListResult ml-6">
            {loading ? "loading" : <>
            {data?.map(item => (
              <SearchItem item={item} key={item._id}/>
            ))}
            </>}
            {/* <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List