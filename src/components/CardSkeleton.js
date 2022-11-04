import React from "react";
import Skeleton from "react-loading-skeleton";
import "../styles/CardSkeleton.css";
const CardSkeleton = () => {
   return (
      <div className="Card-Skeleton">
         <Skeleton
            count={2}
            style={{ marginBottom: ".2rem", fontSize: "1.6rem" }}
         />
         <Skeleton style={{ marginBottom: "2rem", fontSize: "1rem" }} />
         <Skeleton style={{ fontSize: "0.8rem" }} />
      </div>
   );
};

export default CardSkeleton;
