import "../styles/StoryModal.css";
import { Comments } from "./Comments";
import { mapTime } from "../utils/mapTime";

export const StoryModal = ({ toggleModal, story }) => {
   return (
      <>
         <div className="Story-modal " key={story.by}>
            <div className="Story-overlay">
               <button className="Story-button-modal" onClick={toggleModal}>
                  Close
               </button>
               <div className="Story-content-modal">
                  <div className="Story-description-modal">
                     <span className="Story-title-modal">{story.title}</span>
                     <span className="Story-details-modal">
                        <div className="Story-by-modal">by: {story.by}</div>
                        <div className="Story-posted-modal">
                           posted: {mapTime(story.time)}
                        </div>
                     </span>
                  </div>
                  <span className="Story-comments">
                     <div className="comment-wrapper">
                        {story.kids && <Comments commentsIds={story.kids} />}
                     </div>
                  </span>
               </div>
            </div>
         </div>
      </>
   );
};
