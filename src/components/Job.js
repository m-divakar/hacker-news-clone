/* eslint-disable react-hooks/exhaustive-deps */
import "../styles/Job.css";
import React, { useState, useEffect, memo } from "react";
import { mapTime } from "../utils/mapTime";
import { getJob } from "../services/hackerNewsAPI";

export const Job = memo(function Job({ jobId }) {
   const [job, setJob] = useState({});

   useEffect(() => {
      getJob(jobId).then((data) => data && data.url && setJob(data));
   }, []);

   return job && job.url ? (
      <>
         <div className="Job-Card">
            <p>{job.title}</p>
            <p>by: {job.by}</p>
            <p>posted: {mapTime(job.time)}</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
               click me
            </a>
         </div>
      </>
   ) : null;
});
