import React from "react";
import { useState } from "react";
import "./hearder.css";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
export const Hearder = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [Openopnion, setOpenopnion] = useState(false);
  const [options, setoptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setoptions((pre) => {
      return {
        ...pre,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  return (
    <div className="hearder">
      <div className="container">
        <div className="headertitle">
          <h1 className="headertitle">We Find the best Hotel For You</h1>
          <p className="heardernoidung">
            Our app takes into account your travel preferences, such as
            location, budget, amenities, and accommodation type, to offer
            tailored hotel recommendations that meet your specific needs.
            Whether you are looking for a luxurious resort, a cozy boutique
            hotel, or a budget-friendly accommodation, we have you covered.
          </p>
        </div>
        <div className="search">
          <div className="btnseach">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="text"
              placeholder="nơi bạn muốn đến"
              className="input"
            ></input>
          </div>
          <div className="btnseach">
            <FontAwesomeIcon icon={faBed} />
            <span
              onClick={() => setOpenDate(!openDate)}
              className="text"
            >{`${format(date[0].startDate, "dd/MM/yyy")} To ${format(
              date[0].endDate,
              "dd/MM/yyy"
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="Date"
              />
            )}
          </div>
          <div className="btnseach">
            <FontAwesomeIcon icon={faBed} />
            <span onClick={() => setOpenopnion(!Openopnion)} className="text">
              {`${options.adult} adult - ${options.children} children - ${options.room} room`}
            </span>
            {Openopnion && (
              <div className="options">
                <div className="opitem">
                  <span className="optiontext">adult</span>
                  <div className="counter">
                    <button
                      className="cong"
                      onClick={() => handleOption("adult", "d")}
                      disabled={options.adult <= 0}
                    >
                      -
                    </button>
                    <span className="optionnumber">{options.adult}</span>
                    <button
                      className="cong"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="opitem">
                  <span className="optiontext">children</span>
                  <div className="counter">
                    <button
                      className="cong"
                      disabled={options.children <= 0}
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span className="optionnumber">{options.children}</span>
                    <button
                      className="cong"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="opitem">
                  <span className="optiontext">room</span>
                  <div className="counter">
                    <button
                      className="cong"
                      onClick={() => handleOption("room", "d")}
                      disabled={options.room <= 0}
                    >
                      -
                    </button>
                    <span className="optionnumber">{options.room}</span>
                    <button
                      className="cong"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="btnseach2">
            <Button variant="contained" sx={{ backgroundColor: "gray" }}>
              tìm kiếm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
