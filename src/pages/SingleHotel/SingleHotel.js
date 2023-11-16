import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import { HotelDetails, Navbar } from '../../Components';
import { HotelImages } from '../../Components';
import "./SingleHotel.css";

export const SingleHotel = () =>{
  
    const {id} = useParams();

    const [singleHotel,setSingleHotel]=useState({});

    useEffect(()=>{
        (async () => {
            try{
                const {data} = await axios.get(`https://travelapp-kp6a.onrender.com/api/hotels/${id}`);
                setSingleHotel(data);
                console.log(data);
            }
            catch(err){
                console.log(err);
            }
        })()
    },[id]);

    const { name,country } = singleHotel;

    return(
        <>
          <Navbar/>
          <main className='single-hotel-page'>
            <p className='hotel-name-add'>{name},{country}</p>
            <HotelImages singleHotel={singleHotel}/>
            <div>
                <HotelDetails singleHotel={singleHotel}/>
            </div>
          </main>
        </>
    )
}