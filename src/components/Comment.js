import { useState, useEffect } from "react";
import { getComment } from "../services/hackerNewsAPI";
import { createMarkup } from "../utils/createMarkup";
import { mapTime } from "../utils/mapTime";
import { Comments } from "./Comments";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import "../styles/Comment.css";
import CommentSkeleton from "./CommentSkeleton";

export const Comment = ({ commentId }) => {
   const [comment, setComment] = useState({});
   const [commentFlag, setCommentFlag] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   const showComments = () => {
      setCommentFlag(!commentFlag);
   };

   useEffect(() => {
      getComment(commentId).then((data) => {
         setComment(data);
         setIsLoading(false);
      });
   }, [commentId]);

   return (
      <>
         {isLoading ? (
            <CommentSkeleton />
         ) : (
            !comment.deleted && (
               <div className="comment-container">
                  <div className="comment-card">
                     <div className="comment-card-header">
                        <div className="commented-by">{comment.by} </div>
                        <div className="posted-time">
                           {mapTime(comment.time)}ago
                        </div>
                     </div>
                     <p
                        className="comment-text"
                        id={commentId}
                        dangerouslySetInnerHTML={createMarkup(comment.text)}
                     ></p>
                     <div className="show-replies">
                        <p>
                           {comment.kids &&
                              ` ${comment.kids.length} ${
                                 comment.kids.length > 1 ? "replies" : "reply"
                              }`}
                        </p>
                        <div onClick={showComments}>
                           {comment.kids &&
                              (commentFlag ? (
                                 <IoIosArrowDropup size="1rem" />
                              ) : (
                                 <IoIosArrowDropdown size="1rem" />
                              ))}
                        </div>
                     </div>
                  </div>
                  {comment.kids && commentFlag && (
                     <Comments commentsIds={comment.kids} />
                  )}
               </div>
            )
         )}
      </>
   );
};
