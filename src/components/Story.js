/* eslint-disable react-hooks/exhaustive-deps */

import "../styles/Story.css";
import React, { useState, useEffect, memo } from "react";
import { StoryModal } from "./StoryModal";
import { mapTime } from "../utils/mapTime";
import { getStory } from "../services/hackerNewsAPI";
import { FaExternalLinkAlt } from "react-icons/fa";
import CardSkeleton from "./CardSkeleton";

export const Story = memo(function Story({ storyId }) {
   const [story, setStory] = useState({});
   const [modal, setModal] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   const toggleModal = () => {
      setModal(!modal);
   };

   if (modal) {
      document.body.classList.add("active-modal");
   } else {
      document.body.classList.remove("active-modal");
   }

   useEffect(() => {
      getStory(storyId).then((data) => {
         data && data.url && setStory(data);
         setIsLoading(false);
      });
   }, []);
   return (
      <>
         {isLoading ? (
            <CardSkeleton />
         ) : story && story.url ? (
            <>
               <div className="Story-Card">
                  <a href={story.url} target="_blank" rel="noopener noreferrer">
                     <FaExternalLinkAlt size="1rem" />
                  </a>
                  <div className="Story-Contents" onClick={toggleModal}>
                     <p className="Story-Title">{story.title}</p>
                     <p className="Story-Author">- {story.by}</p>
                     <div className="Story-Details">
                        <p> {mapTime(story.time)} ago</p>
                        <p>{(story.kids && story.kids.length) || 0} comments</p>
                     </div>
                  </div>
               </div>
               {modal && <StoryModal toggleModal={toggleModal} story={story} />}
            </>
         ) : null}
      </>
   );
});
