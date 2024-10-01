import { getAuth } from "firebase/auth";

export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDYzMjIwNDVlNzQ2YzMwNmVmMGE2MWM5ODgyMGYyMyIsIm5iZiI6MTcyNjU2OTkzMC40NjgxMTYsInN1YiI6IjY2ZTE2MzJlMDAwMDAwMDAwMDIyYWQ2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CcR_hKpi3-6CGkp4bUrJePOo65UCDh3kZu8cSAormw4",
  },
};

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "hindi" },
  { identifier: "spanish", name: "Spanish" },
];
