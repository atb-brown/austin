import React from "react";
import { PortfolioLinkProps } from "./PortfolioLinkProps";
import LinkWithIssuer from "./PortfolioLinkWithoutIssuer";
import LinkWithoutIssuer from "./PortfolioLinkWithIssuer";

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
