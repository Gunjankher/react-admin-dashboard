import React from "react";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

export default function Widget({ heading, value, percent, color, amount }) {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp /> + {percent}% {""}
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {percent}$ {""}
          </span>
        )}
      </div>

      <div className="widgetcircle">
<span 
color={color}
>{percent}%</span>

      </div>
    </article>
  );
}
