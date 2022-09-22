/* eslint-disable react-hooks/exhaustive-deps */

import "../styles/Story.css";
import React, { useState, useEffect } from "react";
import { mapTime } from "../utils/mapTime";
import { getStory } from "../services/hackerNewsAPI";

export const Story = ({ storyId }) => {
   const [story, setStory] = useState({});

   useEffect(() => {
      getStory(storyId).then((data) => data && data.url && setStory(data));
   }, []);

   return story && story.url ? (
      <>
         <div className="Story-Card">
            <p>{story.title}</p>
            <p>by: {story.by}</p>
            <p>posted: {mapTime(story.time)}</p>
         </div>
      </>
   ) : null;
};
