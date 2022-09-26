import { memo } from "react";
import { Comment } from "./Comment";

export const Comments = memo(({ commentsIds }) => {
   return (
      <>
         {commentsIds.slice(0, 5).map((comment) => (
            <Comment commentId={comment} key={comment} />
         ))}
      </>
   );
});
