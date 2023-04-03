import Link from "./Link";
import React from "react";

/**
 * A link to some sort of portolio item.
 *
 * @param {LinkProps} props Properties.
 * @return {ReactElement} The portfolio link component.
 */
export default function PortfolioLink({
  description,
  url,
  urlId,
  issuerDescription,
  issuerUrl,
}: LinkProps) {
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

/**
 * A link to some sort of portolio item that is not issued by an organization.
 *
 * @param {LinkProps} props Properties.
 * @return {ReactElement} The portfolio link component.
 */
function LinkWithoutIssuer({ description, urlId, url }: LinkProps) {
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

/**
 * A link to some sort of portolio item that was issued by an organization, such as a certification.
 *
 * @param {LinkProps} props Properties.
 * @return {ReactElement} The portfolio link component.
 */
function LinkWithIssuer({
  description,
  url,
  urlId,
  issuerDescription = "",
  issuerUrl = "",
}: LinkProps) {
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

type LinkProps = {
  description: string;
  url: string;
  urlId: string;
  issuerDescription?: string;
  issuerUrl?: string;
};
