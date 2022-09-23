import { memo } from "react";
import { Comment } from "./Comment";

export const Comments = memo(({ commentsIds }) => {
   return (
      <>
         <div className="Story-comments">
            banana
            {commentsIds.slice(0, 3).map((comment) => (
               <Comment commentId={comment} />
            ))}
         </div>
      </>
   );
});
