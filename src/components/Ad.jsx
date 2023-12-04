import React from "react";
import umcAd from "../img/umcAd.svg";
export default function Ad({ adState }) {
  if (!adState) return null;
  else
    return (
      <div>
        <img src={umcAd}></img>
      </div>
    );
}
