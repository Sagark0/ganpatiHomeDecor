import React from "react";
import "./pages.css";

import a from "../assets/ImgGallery/img (1).jpg";
import b from "../assets/ImgGallery/img (2).jpg";
import c from "../assets/ImgGallery/img (3).jpg";
import d from "../assets/ImgGallery/img (4).jpg";
import e from "../assets/ImgGallery/img (5).jpg";
import f from "../assets/ImgGallery/img (6).jpg";
import g from "../assets/ImgGallery/img (7).jpg";
import h from "../assets/ImgGallery/img (8).jpg";
import i from "../assets/ImgGallery/img (9).jpg";
import j from "../assets/ImgGallery/img (10).jpg";
import k from "../assets/ImgGallery/img (11).jpg";
import l from "../assets/ImgGallery/img (12).jpg";
import m from "../assets/ImgGallery/img (13).jpg";
import n from "../assets/ImgGallery/img (14).jpg";
import o from "../assets/ImgGallery/img (15).jpg";
import p from "../assets/ImgGallery/img (16).jpg";
import q from "../assets/ImgGallery/img (17).jpg";
import r from "../assets/ImgGallery/img (18).jpg";
import s from "../assets/ImgGallery/img (19).jpg";
import t from "../assets/ImgGallery/img (20).jpg";
import Gallery from "../components/imgGallery";
export const Decor = () => {
  const images = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t];

  return (
    <>
      <div className="page"></div>
      <Gallery images={images} />
    </>
  );
};
