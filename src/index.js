import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {popularMovieList1, popularMovieList2 ,popularMovieList3} from './data';
import { PopularMovieList } from  './components/popularMovieList/popularMovieList';
import {filmTvList1, filmTvList2, filmTvList3} from './data';
import {FilmTv}  from './components/filmTv/filmTv';
import "./assets/css/style.css";
import "./assets/css/fontawesome/fontawesome.css";
import "./assets/css/fontawesome/brands.css";
import "./assets/css/fontawesome/regular.css";
import "./assets/css/fontawesome/solid.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <PopularMovieList data= {popularMovieList1}  title="محبوب ترین های فیلیمو 1"></PopularMovieList>
    <PopularMovieList data= {popularMovieList2}  title="محبوب ترین های فیلیمو 2"></PopularMovieList>
    <PopularMovieList data= {popularMovieList3}  title="محبوب ترین های فیلیمو 3"></PopularMovieList>
    <FilmTv data={filmTvList1} ></FilmTv>
    <FilmTv data={filmTvList2} ></FilmTv>
    <FilmTv data={filmTvList3} ></FilmTv>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
