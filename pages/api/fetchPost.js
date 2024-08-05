import axios from "axios";
import { toast } from "react-toastify";
require("dotenv").config();

export const fetchPost = async (
  shortcode,
  setIsLoading,
  setShowVideo,
  setPosts,
  savePostToDB,
  theme
) => {
  try {
    const options = {
      method: "GET",
      url: `https://instagram-bulk-scraper-latest.p.rapidapi.com/media_download_by_shortcode/${shortcode}`,
      headers: {
        "x-rapidapi-key": "26e4081c63mshb3102badf90dd0bp111763jsn94c599f128e9",
        "x-rapidapi-host": "instagram-bulk-scraper-latest.p.rapidapi.com",
      },
    };

    const response = await axios(options);
    setPosts(response.data.data);
    setIsLoading(false);
    toast.success("Successfully fetched posts.", {
      theme,
      autoClose: 1500,
      hideProgressBar: true,
    });

    savePostToDB(response.data.data,shortcode);
  } catch (error) {
    console.log(error);
    setIsLoading(false);

    setShowVideo(true);

    toast.error("Something is wrong");
  }
};
export const fetchPostDetails = async (shortcode) => {
  try {
    const options = {
      method: "GET",
      url: `https://instagram-bulk-scraper-latest.p.rapidapi.com/media_info_from_shortcode/${shortcode}`,
      headers: {
        "x-rapidapi-key": "26e4081c63mshb3102badf90dd0bp111763jsn94c599f128e9",
        "x-rapidapi-host": "instagram-bulk-scraper-latest.p.rapidapi.com",
      },
    };

    const response = await axios(options);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
