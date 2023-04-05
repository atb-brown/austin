import React from "react";
import Link from "../Link";
import { PortfolioLinkProps } from "./PortfolioLinkProps";

/**
 * A link to some sort of portolio item that is not issued by an organization.
 *
 * @param {PortfolioLinkProps} props Properties.
 * @return {ReactElement} The portfolio link component.
 */
export default function LinkWithoutIssuer({
  description,
  urlId,
  url,
}: PortfolioLinkProps) {
  return (
    <div>
      <div>{description}</div>
      <div>
        <Link description={urlId} url={url} />
      </div>
      <br />
    </div>
  );
}
