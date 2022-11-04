/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/Job.css";
import React, { useState, useEffect, memo } from "react";
import { mapTime } from "../utils/mapTime";
import { getJob } from "../services/hackerNewsAPI";
import CardSkeleton from "./CardSkeleton";

export const Job = memo(function Job({ jobId }) {
   const [job, setJob] = useState({});
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      getJob(jobId).then((data) => {
         data && data.url && setJob(data);
         setIsLoading(false);
      });
   }, []);

   return (
      <>
         {isLoading ? (
            <CardSkeleton />
         ) : job && job.url ? (
            <>
               <div className="Job-Card">
                  <p className="Job-Title">{job.title}</p>
                  <p className="Job-Provider">- {job.by}</p>
                  <div className="Job-Card-Link">
                     <p className="Job-Post-Time">{mapTime(job.time)} ago</p>
                     <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Apply
                     </a>
                  </div>
               </div>
            </>
         ) : null}
      </>
   );
});
