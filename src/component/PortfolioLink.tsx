import Link from "./Link";
import React from "react";

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
