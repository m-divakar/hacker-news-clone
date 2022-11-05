import React from "react";
import Skeleton from "react-loading-skeleton";
import "../styles/CommentSkeleton.css";
const CommentSkeleton = () => {
   return (
      <div className="Comment-Skeleton">
         <Skeleton count={5} style={{ marginBottom: ".2rem" }} />
      </div>
   );
};

export default CommentSkeleton;
