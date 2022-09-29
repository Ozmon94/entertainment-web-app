import { createContext, useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "firebase-config";

export const VideoContext = createContext({});

const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const handleOnSetBookmarked = async (video) => {
    setVideos((prev) =>
      prev.map((item) => {
        return item.id === video.id
          ? { ...item, isBookmarked: !video.isBookmarked }
          : item;
      })
    );
    await updateDoc(doc(db, "videos", video.id), {
      isBookmarked: !video.isBookmarked,
    });
  };

  return (
    <VideoContext.Provider value={{ videos, setVideos, handleOnSetBookmarked }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider;
