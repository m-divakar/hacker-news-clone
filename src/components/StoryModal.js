import "../styles/StoryModal.css";
import { Comments } from "./Comments";
import { mapTime } from "../utils/mapTime";
import { AiOutlineClose } from "react-icons/ai";

export const StoryModal = ({ toggleModal, story }) => {
   return (
      <>
         <div className="Story-modal " key={story.by}>
            <div className="Story-overlay">
               <button className="Story-button-modal" onClick={toggleModal}>
                  <AiOutlineClose />
               </button>
               <div className="Story-content-modal">
                  <div className="Story-description-modal">
                     <p className="Story-title-modal">{story.title}</p>
                     {/* <div className="Story-post-details-modal"> */}
                     <p className="Story-by-modal">- {story.by}</p>
                     <p className="Story-posted-modal">
                        {mapTime(story.time)} ago
                     </p>
                     {/* </div> */}
                  </div>

                  <span className="Story-comments">
                     <div className="comment-wrappers">
                        {story.kids ? (
                           <Comments commentsIds={story.kids} />
                        ) : null}
                     </div>
                  </span>
               </div>
            </div>
         </div>
      </>
   );
};
