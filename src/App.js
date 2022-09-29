import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Login from "pages/Login/Login";
import SignUp from "pages/SignUp/SignUp";
import Movies from "pages/Movies";
import TvSeries from "pages/TvSeries";
import Bookmarked from "pages/Bookmarked";
import styled from "styled-components";
import RequiredAuth from "components/RequiredAuth";
import Layout from "components/Layout/Layout";
import { onAuthStateChanged } from "firebase/auth";
import { db, firebaseAuth, storage } from "firebase-config";
import useAuth from "hooks/useAuth";
import { useContext, useEffect } from "react";
import { VideoContext } from "contex/VideoProvider";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const { setAuth } = useAuth();
  const { setVideos } = useContext(VideoContext);

  onAuthStateChanged(firebaseAuth, (user) => {
    setAuth(user);
  });

  useEffect(() => {
    getDocs(collection(db, "videos"))
      .then((data) => {
        setVideos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setVideos]);

  return (
    <Wrapper>
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route element={<RequiredAuth />}>
          <Route element={<Layout />}>
            <Route path={"/"} element={<Home />} />
            <Route path={"/movies"} element={<Movies />} />
            <Route path={"/tv-series"} element={<TvSeries />} />
            <Route path={"/book-marked"} element={<Bookmarked />} />
          </Route>
        </Route>
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  align-items: flex-start;
`;

export default App;
