import "../styles/StoryModal.css";
import { Comments } from "./Comments";
import { mapTime } from "../utils/mapTime";

export const StoryModal = ({ toggleModal, story }) => {
   return (
      <>
         <div className="Story-modal">
            <div className="Story-overlay" onClick={toggleModal}>
               <div className="Story-content-modal">
                  <span className="Story-description-modal">
                     <span className="Story-title-modal">{story.title}</span>
                     <span className="Story-details-modal">
                        <div className="Story-by-modal">by: {story.by}</div>
                        <div className="Story-posted-modal">
                           posted: {mapTime(story.time)}
                        </div>
                     </span>
                  </span>
                  <span className="Story-comments">
                     {story.kids && <Comments commentsIds={story.kids} />}
                  </span>
                  <button className="Story-button-modal" onClick={toggleModal}>
                     Close
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};
