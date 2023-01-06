import axios from "axios";

const URL = "https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app";
const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || URL,
   });

export const fetchThreads = () => api.get("activities");
