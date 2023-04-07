import { PortfolioLinkProps } from "./PortfolioLinkProps";
import LinkWithoutIssuer from "./PortfolioLinkWithIssuer";
import LinkWithIssuer from "./PortfolioLinkWithoutIssuer";
import React from "react";

/**
 * A link to some sort of portolio item.
 *
 * @param {PortfolioLinkProps} props Properties.
 * @return {ReactElement} The portfolio link component.
 */
export default function PortfolioLink({
  description,
  url,
  urlId,
  issuerDescription,
  issuerUrl,
}: PortfolioLinkProps) {
  if (issuerDescription && issuerUrl) {
    return (
      <LinkWithIssuer
        description={description}
        issuerDescription={issuerDescription}
        issuerUrl={issuerUrl}
        url={url}
        urlId={urlId}
      />
    );
  }
  return (
    <LinkWithoutIssuer description={description} url={url} urlId={urlId} />
  );
}
