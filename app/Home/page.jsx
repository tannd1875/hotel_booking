import "./page.css";
import { Feature } from "./components/feature/Feature.jsx";
import { List } from "./components/List/List.jsx";
import { Love } from "./components/Love/Love.jsx";
import { Mail } from "./components/mail/mail.jsx";
import { Banner } from "./components/banner/Banner.jsx";

import { Footer } from "../../components/footer/Footer.jsx";

import React from "react";

export default function page() {
  return (
    <div>
      <Hearder />
      <div className="Homecontanier">
        <h1 className="Hometitle">Địa điểm nổi bật </h1>
        <Feature />
        <h1 className="Hometitle">Khách sạn nổi bật</h1>
        <List />
        <h1 className="Hometitle">Khách sạn Được Yêu Thích</h1>
        <Love />
        <Banner />
        <Mail />
      </div>
      <Footer />
    </div>
  );
}
