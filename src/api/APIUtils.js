import Axios from "axios";
// setting proxy
const proxy = "https://cors-anywhere.herokuapp.com/";

// for VideoContainer Component
export const getVideoHashAPI = (uid = "") => {
  return Axios.get(
    `${proxy}https://www.aparat.com/etc/api/video/videohash/${uid}`
  );
};

// for SearchResult Component
export const getTagNameAPI = (offset = 0, query) => {
  return Axios.get(
    `${proxy}https://www.aparat.com/etc/api/videoBySearch/text/${query}/perpage/16/curoffset/${offset *
      16}`
  );
};

/* for Category Component:
    1.default category page
    2.next page category 
*/

// 1.default category page
export const getDefaultCategoryAPI = category_id => {
  return Axios.get(
    `${proxy}https://www.aparat.com//etc/api/categoryvideos/cat/${category_id}/perpage/16`
  );
};

// 2.next page category
export const getNextPageCategoryAPI = url => {
  return Axios.get(`${proxy}${url}`);
};

// for videoSection Component
export const getVideoTagAPI = () => {
  return Axios.get(
    `${proxy}https://www.aparat.com/etc/api/videobytag/text/popular`
  );
};

// for DashboardContainer Component
export const getCategoriesListAPI = () => {
  return Axios.get(`${proxy}https://www.aparat.com/etc/api/categories`);
};

// for VideoSidebar Component
export const getSidebarListAPI = name => {
  return Axios.get(
    `${proxy}https://www.aparat.com/etc/api/videobytag/text/${name}`
  );
};
