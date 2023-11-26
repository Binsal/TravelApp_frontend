import { useState } from "react";
import {Navbar} from "../../Components/Navbar/Navbar"
import { useDate,useCategory} from "../../context"
import { HotelCard } from "../../Components";
import axios from "axios";
import { useEffect } from "react";


export const SearchResults = () =>{

    const {destination} = useDate();
    const { hotelCategory } = useCategory();
    const [hotels,setHotels] = useState([]);

    useEffect(()=>{
        (async()=>{

            try{
                const {data} = await axios.get(
                    `https://travelapp-kp6a.onrender.com/api/hotels?category=${hotelCategory}`
                );
              
                setHotels(data);
            }
            catch(err){
                console.log(err);
            }

        })()
    },[destination]);

    const filteredSearchResults = hotels.filter(
        ({ address, city, state}) =>
          address.toLowerCase() === destination.toLowerCase() ||
          city.toLowerCase() === destination.toLowerCase() ||
          state.toLowerCase() === destination.toLowerCase() 
      );

    return(

       <>
            <Navbar></Navbar>
                <section className="main d-flex align-center gap-larger">
                    {filteredSearchResults ? (
                            filteredSearchResults.map((hotel)=>(
                                <HotelCard key={hotel._id} hotel={hotel}/>
                            ))
                    ):(
                        <h3>Nothing Found</h3>
                    )
                    }
                </section>
       </>

    )


}