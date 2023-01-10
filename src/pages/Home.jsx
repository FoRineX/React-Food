import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Preloader  } from "../Components/Preloader";
import { CategoriesList } from "../Components/CategoriesList";
import { Search } from "../Components/Search";
import { Scroll } from "../Components/Scroll"

 export function Home () {
   const [catalog, setCatalog] = useState([]);
   const [filteredCatalog, setFilteredCatalog] = useState([]); 

   const [scrollShow, setScrollShow] = useState('');

   const handleSearch = (str) => {
      setFilteredCatalog(
         catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())
         )
      );
   }; 

   useEffect(() => {
      getAllCategories().then(data => {
         setCatalog(data.categories);
         setFilteredCatalog(data.categories);
      })
   }, []);

   // CUSTOM SCROLL //
   const handleScroll = () => { 
      window.scrollTo({top: 0, behavior: "smooth" });
      setScrollShow(0);
    };
    const handleScrollShow = () => setScrollShow(window.scrollY);

    useEffect(() => {window.addEventListener('scroll', handleScrollShow);
      return () => window.removeEventListener('scroll', handleScrollShow);
}, []);

   return <>
   <Search callBack={handleSearch}/>
   {!catalog.length ? <Preloader/> : <CategoriesList catalog = {filteredCatalog}/>}
   {scrollShow && <Scroll handleScroll = {handleScroll}/>}
   </>
 };