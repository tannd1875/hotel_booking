import React from "react";
import "./Banner.css";
const course = {
  data: [
    {
      image:
        "https://thietkeinanktp.com/wp-content/uploads/2022/05/50-mau-banner-dep-thu-hut-khach-hang-muc-tieu.jpg",
    },
  ],
};
function Render(props) {
  return (
    <div>
      <div className="container">
        <img src={props.image} alt="cousre" className="bannerer" />
      </div>
    </div>
  );
}
export const Banner = () => {
  return (
    <div className="banner">
      {course.data.map((value, index) => (
        <Render key={index} image={value.image} />
      ))}
    </div>
  );
};
