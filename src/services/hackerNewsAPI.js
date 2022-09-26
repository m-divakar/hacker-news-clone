import axios from "axios";
import { selectFields } from "../utils/selectFields";

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
// export const jobsUrl = `${baseUrl}jobstories.json`;
// export const newStoriesUrl = `${baseUrl}newstories.json`;
// export const topStoriesUrl = `${baseUrl}topstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getData = async (url) => {
   const result = await axios
      .get(`${baseUrl + url}.json`)
      .then(({ data }) => data);
   return result;
};
// export const getNewStories = async () => {
//    const result = await axios.get(newStoriesUrl).then(({ data }) => data);
//    return result;
// };
// export const getJobs = async () => {
//    const result = await axios.get(jobsUrl).then(({ data }) => data);
//    return result;
// };

export const getStory = async (storyId) => {
   const result = await axios
      .get(`${storyUrl + storyId}.json`)
      .then(({ data }) => data && selectFields(data));
   return result;
};
export const getComment = async (commentId) => {
   const result = await axios
      .get(`${storyUrl + commentId}.json`)
      .then(({ data }) => data);
   return result;
};

export const getJob = async (jobId) => {
   const result = await axios
      .get(`${storyUrl + jobId}.json`)
      .then(({ data }) => data && selectFields(data));
   return result;
};
