import React from "react";
import Link from "../Link";
import { PortfolioLinkProps } from "./PortfolioLinkProps";

/**
 * A link to some sort of portolio item that was issued by an organization, such as a certification.
 *
 * @param {PortfolioLinkProps} props Properties.
 * @return {ReactElement} The portfolio link component.
 */
export default function LinkWithIssuer({
  description,
  url,
  urlId,
  issuerDescription = "",
  issuerUrl = "",
}: PortfolioLinkProps) {
  return (
    <div>
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
