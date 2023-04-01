import React from "react";

/**
 * A basic, clickable link for a URL.
 *
 * @param {LinkProps} props Properties.
 * @return {ReactElement} The link component.
 */
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
