import React from "react";

export default function Link(props: LinkProps) {
  return (
    <a className="App-link" href={props.url}>
      {props.description}
    </a>
  );
}

type LinkProps = {
  description: string;
  url: string;
};
