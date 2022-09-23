import { useState, useEffect } from "react";
import { getComment } from "../services/hackerNewsAPI";
import { createMarkup } from "../utils/createMarkup";
import { Comments } from "./Comments";

export const Comment = ({ commentId }) => {
   const [comment, setComment] = useState({});
   useEffect(() => {
      getComment(commentId).then((data) => setComment(data));
   }, []);
   console.log(comment.text);
   const { text, kids } = comment;

   return (
      <>
         <div
            className="comment"
            dangerouslySetInnerHTML={createMarkup(text)}
         />
         {/* {comment.text} */}
         <br />
         {kids && <Comments commentsIds={kids} />}
      </>
   );
};
