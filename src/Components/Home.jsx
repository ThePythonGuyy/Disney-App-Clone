import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { styled } from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommended from "./Recommended";
import AddDoc from "../Firebase/AddDoc";
import { useDispatch, useSelector } from "react-redux";
import db from "../Firebase/firebase";
import { setMovies } from "../app/features/movie/movieSlice";
import { collection, doc, onSnapshot } from "firebase/firestore";
import NewOnDisney from "./NewOnDisney";
import Original from "./Original";
import Trending from "./Trending";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const [userEmail] = useOutletContext();
  const navigate = useNavigate();
  
  let recommended = [];
  let newOnDisney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    if (!userEmail) {
      // navigate("/");
    }
  }, []);

  const fetchState = () => {
    // const movies = useSelector((state) => state.movie.recommended);
    // console.log(movies)
    return null
  }

  useEffect(() => {
    
    if (!fetchState()){
    console.log('UseEffect')
    const movieSel = collection(db, "movies");

    onSnapshot(movieSel, (snap) => {
      snap.docs.map((doc) => {
        // console.log(doc.data())
        switch (doc.data().type) {
          case "recommended":
            // recommended.push({ id: doc.id, ...doc.data() });
            
            recommended = [...recommended, { id: doc.id, ...doc.data() }];
            
            // console.log(recommended);
            break;

          case "new":
            // newOnDisney.push({id: doc.id, ...doc.data()});
            newOnDisney = [...newOnDisney, { id: doc.id, ...doc.data() }];
            // console.log(newOnDisney);
            break;

          case "original":
            // original.push({ id: doc.id, ...doc.data() });
            original = [...original, { id: doc.id, ...doc.data() }];
            // console.log(original);
            break;

          case "trending":
            // trending.push({ id: doc.id, ...doc.data() });
            trending = [...trending, { id: doc.id, ...doc.data() }];
            // console.log(trending);
            break;

          default:
            console.log(null);
        }
      });
      
      dispatch(
        setMovies({
          recommended,
          original,
          trending,
          newOnDisney,
        })
      );
    });
  }
  }, [userEmail]);

  useEffect(() => {}, [newOnDisney]);

  // Navigation


  return (
    <HomeC>
      <ImgSlider />
      <Viewers />
      <Recommended />
      <NewOnDisney />
      <Original />
      <Trending />
    </HomeC>
  );
};

const HomeC = styled.main`
  min-width: 100%;
  position: relative;
  display: block;
  min-height: calc(100vh - 250px);
  background: url("/images/home-background.png") center center / cover no-repeat
    fixed;
  padding: 1vh 3vw;

  //
  /* background-color: pink; */
`;

export default Home;
