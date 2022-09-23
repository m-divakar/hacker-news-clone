/* eslint-disable react-hooks/exhaustive-deps */

import "../styles/Story.css";
import React, { useState, useEffect, memo } from "react";
import { StoryModal } from "./StoryModal";
import { mapTime } from "../utils/mapTime";
import { getStory } from "../services/hackerNewsAPI";

export const Story = memo(function Story({ storyId }) {
   const [story, setStory] = useState({});
   const [modal, setModal] = useState(false);

   const toggleModal = () => {
      setModal(!modal);
   };

   if (modal) {
      document.body.classList.add("active-modal");
   } else {
      document.body.classList.remove("active-modal");
   }

   useEffect(() => {
      getStory(storyId).then((data) => data && data.url && setStory(data));
   }, []);
   return story && story.url ? (
      <>
         <div className="Story-Card" onClick={toggleModal}>
            <p>{story.title}</p>
            <p>by: {story.by}</p>
            <p>posted: {mapTime(story.time)}</p>
            <p>comments: {story.kids && story.kids.length}</p>
         </div>
         {modal && <StoryModal toggleModal={toggleModal} story={story} />}
      </>
   ) : null;
});
