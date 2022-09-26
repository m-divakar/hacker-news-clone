/* eslint-disable react-hooks/exhaustive-deps */

import "../styles/StoriesContainer.css";
import React, { useState, useEffect } from "react";
import { getData } from "../services/hackerNewsAPI";
import { Story } from "../components/Story";
import useInfinteScroll from "../utils/useInfiniteScroll";

const StoriesContainer = ({ url }) => {
   const [storyIds, setStoryIds] = useState([]);
   const { count } = useInfinteScroll(500);
   useEffect(() => {
      getData(url).then((data) => setStoryIds(data));
   }, [url]);

   return (
      <>
         <div className="Stories-Container">
            {storyIds.slice(0, count).map((storyid) => (
               <Story key={storyid} storyId={storyid} />
            ))}
         </div>
      </>
   );
};

export default StoriesContainer;
