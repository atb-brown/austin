import React from "react";

/**
 * A basic, clickable link for a URL.
 *
 * @param {LinkProps} props Properties.
 * @return {ReactElement} The link component.
 */
export default function Link({ description, url }: LinkProps): JSX.Element {
  return (
    <a className="App-link" href={url}>
      {description}
    </a>
  );
}

type LinkProps = {
  readonly description: string;
  readonly url: string;
};
