import { FETCH_SECTIONS, NEW_SECTION } from "./types";

export const fetchSections = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(sections =>
      dispatch({
        type: FETCH_SECTIONS,
        payload: sections
      })
    );
};
