/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import { debounce } from "./debounce";

const useInfiniteScroll = (maxCount) => {
   const [loading, setLoading] = useState(false);
   const [count, setCount] = useState(30);

   const handleScroll = debounce(() => {
      if (
         document.documentElement.scrollTop +
            document.documentElement.clientHeight >=
            document.documentElement.scrollHeight ||
         loading

         //  window.innerHeight + document.documentElement.scrollTop !==
         //     document.documentElement.offsetHeight ||
         //  loading
      ) {
         return false;
      } else setLoading(true);
   }, maxCount);

   useEffect(() => {
      if (!loading) {
         return;
      }
      if (count + 30 >= maxCount) {
         setCount(maxCount);
      } else {
         setCount(count + 30);
      }
      setLoading(false);
   }, [loading]);

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   //    console.log(count);
   //    console.log(window.innerHeight);
   //    console.log(document.documentElement.scrollTop);
   //    console.log(document.documentElement.offsetHeight);

   return { count };
};

export default useInfiniteScroll;
