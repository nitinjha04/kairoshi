import axios from "axios";
import { toast } from "react-toastify";

export const fetchPost = async (
  shortcode,
  setIsLoading,
  setShowVideo,
  setPosts,
  savePostToDB,
  theme
) => {
  console.log({ shortcode });
  try {
    const options = {
      method: "GET",
      url: `https://instagram-bulk-scraper-latest.p.rapidapi.com/media_download_by_shortcode/${shortcode}`,
      headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY,
        "x-rapidapi-host": process.env.RAPID_API_HOST,
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

    savePostToDB(response.data.data);
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
        "x-rapidapi-key": process.env.RAPID_API_KEY,
        "x-rapidapi-host": process.env.RAPID_API_HOST,
      },
    };

    const response = await axios(options);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
