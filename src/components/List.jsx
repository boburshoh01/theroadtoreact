import React from "react";

export default function List(props) {
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </ul>
  );
}
const Item = (props) => {
  return (
    <li>
      <span>
        <a href={props.item.url}>{props.item.title} </a>
      </span>
      <span>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
};
