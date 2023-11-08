import { useEffect, useState } from "react"
import axios from "axios"
import "./Categories.css";

export const Categories = () =>{

    const [catergories,setCategories] = useState([]);
    const [numberOfCategoryToShow,setNumberOfCategoryToShow]=useState(0);

    const handleShowMoreRightClick = () =>{
        setNumberOfCategoryToShow(prev=>prev+10)
    };

    const handleShowMoreLeftClick = () =>{
        setNumberOfCategoryToShow(prev=>prev-10)
    };

    const handleCategoryClick = () =>{

    }

    useEffect(()=>{
        (async ()=> {
            try{
                const {data} = await axios.get("https://travelapp-kp6a.onrender.com/api/category");
                const categoriesToShow = data.slice(
                    numberOfCategoryToShow + 10 >data.length ? data.length-10:numberOfCategoryToShow,
                    numberOfCategoryToShow > data.length 
                    ? data.length
                    :numberOfCategoryToShow + 10
                );
                setCategories(categoriesToShow);
            }
            catch(err){
                console.log(err);
            }
        })()
    },[numberOfCategoryToShow]);

    return (
       <section className="categories d-flex align-center gap-large cursor-pointer">
            {
                numberOfCategoryToShow>=10 && (
                    <button 
                        className="button btn-category btn-left fixed cursor-pointer"
                        onClick={handleShowMoreLeftClick}>
                        <span class="material-symbols-outlined">&lt;</span>
                    </button>)
            }
            
            {
                catergories && 
                catergories.map(({_id,category}) => (
                    <span key={_id}  onClick={()=>handleCategoryClick(category)}>{category}</span>
              ))}
            {
                numberOfCategoryToShow - 10 < catergories.length && (
                    <button
                        className="button btn-category btn-right fixed cursor-pointer" 
                        onClick={handleShowMoreRightClick}>
                        <span class="material-symbols-outlined">&gt;</span>
                    </button>
                )
            }
            
       </section>
    )
};

