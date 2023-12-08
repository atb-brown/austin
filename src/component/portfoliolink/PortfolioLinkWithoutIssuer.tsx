import Link from "../Link";
import { PortfolioLinkProps } from "./PortfolioLinkProps";
import React from "react";

/**
 * A link to some sort of portolio item that was issued by an organization,
 * such as a certification.
 *
 * @param {PortfolioLinkProps} props Properties.
 * @return {ReactElement} The portfolio link component.
 */
export default function PortfolioLinkWithIssuer({
  description,
  url,
  urlId,
  issuerDescription = "",
  issuerUrl = "",
}: PortfolioLinkProps): JSX.Element {
  return (
    <div className="App-text">
      <div>{description}</div>
      <div>
        <Link description={urlId} url={url} />
      </div>
      <div className="App-soft-text">
        {"Issued by: "}
        <Link description={issuerDescription} url={issuerUrl} />
      </div>
      <br />
    </div>
  );
}
