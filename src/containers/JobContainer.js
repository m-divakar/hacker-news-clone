/* eslint-disable react-hooks/exhaustive-deps */

import "../styles/JobContainer.css";
import React, { useState, useEffect } from "react";
import { getData } from "../services/hackerNewsAPI";
import { Job } from "../components/Job";
import useInfinteScroll from "../utils/useInfiniteScroll";

const JobContainer = ({ url }) => {
   const [jobIds, setJobIds] = useState([]);
   const { count } = useInfinteScroll(123);
   useEffect(() => {
      getData(url).then((data) => setJobIds(data));
   }, []);

   return (
      <>
         <div className="Job-Container">
            {jobIds.slice(0, count).map((jobid) => (
               <Job key={jobid} jobId={jobid} />
            ))}
         </div>
      </>
   );
};

export default JobContainer;
