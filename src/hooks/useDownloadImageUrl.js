import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "firebase-config";
import { useEffect, useState } from "react";

const useDownloadImageUrl = (url) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getDownloadURL(ref(storage, url)).then((data) => {
      setImageUrl(data);
    });
  }, [url]);

  return imageUrl;
};

export default useDownloadImageUrl;
