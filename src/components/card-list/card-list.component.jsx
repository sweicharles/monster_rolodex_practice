import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";
// export default function CardList() {}

export const CardList = (props) => {
  // console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster, index) => (
        <Card key={index} monster={monster} />
      ))}
    </div>
  );
};
