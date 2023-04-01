import Link from "./Link";
import React from "react";

/**
 * A link to some sort of portolio item.
 *
 * @param {LinkProps} props Properties.
 * @return {ReactElement} The portfolio link component.
 */
export default function PortfolioLink(props: LinkProps) {
  if (props.issuerDescription && props.issuerUrl) {
    return (
      <LinkWithIssuer
        description={props.description}
        url={props.url}
        urlId={props.urlId}
        issuerDescription={props.issuerDescription}
        issuerUrl={props.issuerUrl}
      />
    );
  }
  return (
    <LinkWithoutIssuer
      description={props.description}
      url={props.url}
      urlId={props.urlId}
    />
  );
}

/**
 * A link to some sort of portolio item that is not issued by an organization.
 *
 * @param {LinkProps} props Properties.
 * @return {ReactElement} The portfolio link component.
 */
function LinkWithoutIssuer(props: LinkProps) {
  // TODO: it's a bad idea to have <div/> elements that are children of <p/> elements
  return (
    <div>
      <div>{props.description}</div>
      <div>
        <Link description={props.urlId} url={props.url} />
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
function LinkWithIssuer(props: LinkProps) {
  return (
    <div>
      <div>{props.description}</div>
      <div>
        <Link description={props.urlId} url={props.url} />
      </div>
      <div className="App-soft-text">
        Issued by:{" "}
        <Link
          description={props.issuerDescription ?? ""}
          url={props.issuerUrl ?? ""}
        />
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
