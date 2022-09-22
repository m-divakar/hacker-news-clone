import "../styles/StoriesContainer.css";
import React, { useState, useEffect } from "react";
import { getTopStories } from "../services/hackerNewsAPI";
import { Story } from "../components/Story";
import useInfinteScroll from "../utils/useInfiniteScroll";

const StoriesContainer = () => {
   const [storyIds, setStoryIds] = useState([]);
   const { count } = useInfinteScroll();
   useEffect(() => {
      getTopStories().then((data) => setStoryIds(data));
   }, []);

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
