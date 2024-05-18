import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../context/SearchContext';

const Header = ({ type }) => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });

    const navigate= useNavigate()

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const {dispatch}= useContext(SearchContext)
    
    const handleSearch = ()=>{
        dispatch({type:"NEW_SEARCH", payload:{destination, date, options}})
        navigate("/hotels",{state:{destination, date, options}})
    }

    return (
        <div className="header pl-16 pt-6">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerlist flex gap-5 px-1 text-white text-sm font-bold">
                    <div className="headerListItem  border rounded-2xl p-2 ">
                        <FontAwesomeIcon icon={faBed} />
                        <span class="px-1 ">   stays</span>
                    </div>
                    <div className="headerListItem border rounded-2xl p-2">
                        <FontAwesomeIcon icon={faPlane} />
                        <span class="px-1">  flights</span>
                    </div>
                    <div className="headerListItem border rounded-2xl p-2">
                        <FontAwesomeIcon icon={faCar} />
                        <span class="px-1">  car rentals</span>
                    </div>
                    <div className="headerListItem border rounded-2xl p-2">
                        <FontAwesomeIcon icon={faBed} />
                        <span class="px-1">  attractions</span>
                    </div>
                    <div className="headerListItem border rounded-2xl p-2">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span class="px-1"> airport taxis</span>
                    </div>
                </div>
                {type !== "list" &&
                    <><h1 className="headertitle text-5xl text-white pt-10 font-bold">WELCOME TO DEBAYAN!!</h1>
                    <p className="headerDescription text-white pt-8" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae tenetur eum saepe magnam nulla optio doloremque quae, perferendis</p>
                    <button className="headerbtn font-semibold mt-8 p-2 bg-blue-900 hover:bg-violet-800 text-white mb-4 ">Sign in/Register</button>
                    <div className="headerSearch flex gap-10 border-yellow-300 border-4 bg-white p-2 relative top-8 px-8 py-1 mx-36 ml-24 justify-between" >
                        <div className="headerSearchItem pt-3">
                            <FontAwesomeIcon icon={faBed} className="Header Icon" />
                            <input type="text" placeholder=" Where are you going" className="HeaderSearchInput ml-2 outline-none" onChange={(e)=>setDestination(e.target.value)}/>
                        </div>
                        <div className="headerSearchItem pt-3">
                            <FontAwesomeIcon icon={faCalendarDays} className="Header Icon" />
                            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText ml-2 text-gray-400">{format(date[0].startDate, "dd/MM/yyyy")} to {format(date[0].endDate, "dd/MM/yyyy")}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={new Date()}
                            />}
                        </div>
                        <div className="headerSearchItem pt-3">
                            <FontAwesomeIcon icon={faPerson} className="Header Icon" />
                            <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText ml-2  text-gray-400">{options.adult} adult . {options.children} children . {options.room} room</span>
                            {openOptions && <div className="options flex gap-10 border-2 py-2 px-1 rounded-md text-sm text-black">
                                <div className="optionItem justify-between">
                                    <span className="optionText">{options.adult} </span>
                                    <div className="optionContainer">
                                        <button disabled={options.adult <= 1} className="optionCounterButton bg-white border-2 border-cyan-700 px-1 rounded-sm" onClick={() => handleOption("adult", "d")}>-</button>
                                        <button className="optionCounterNumber px-1 py-0.5 rounded-sm">1</button>
                                        <button className="optionCounterButton bg-white border-2 border-cyan-700 px-1 rounded-sm" onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">{options.children}</span>
                                    <div className="optionContainer">
                                        <button disabled={options.children <= 0} className="optionCounterButton bg-white border-2 border-cyan-700 px-1 rounded-sm" onClick={() => handleOption("children", "d")}>-</button>
                                        <button className="optionCounterNumber px-1 py-0.5 rounded-sm">0</button>
                                        <button className="optionCounterButton bg-white border-2 border-cyan-700 px-1 rounded-sm" onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">{options.room}</span>
                                    <div className="optionContainer ">
                                        <button disabled={options.room <= 1} className="optionCounterButton bg-white border-2 border-cyan-700 px-1 rounded-sm" onClick={() => handleOption("room", "d")}>-</button>
                                        <button className="optionCounterNumber px-1 py-0.5 rounded-sm ">1</button>
                                        <button className="optionCounterButton bg-white border-2 border-cyan-700 px-1 rounded-sm" onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <button className="headerSearch my-2 ml-12 border bg-slate-400 rounded font-semibold py-1 px-2 hover:bg-slate-600" onClick={handleSearch}> Search</button>
                    </div></>}
                </div>
            </div>
    );
};

export default Header