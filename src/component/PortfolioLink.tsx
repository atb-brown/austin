

export default function PortfolioLink(
    props: LinkProps
) {
    if (props.issuerDescription && props.issuerLink) {
        return <LinkWithIssuer description={props.description} link={props.link} linkId={props.linkId} issuerDescription={props.issuerDescription} issuerLink={props.issuerLink} />;
    }
    return <LinkWithoutIssuer description={props.description} link={props.link} linkId={props.linkId} />;
}

function LinkWithoutIssuer(props: LinkProps) {
    // TODO: it's a bad idea to have <div/> elements that are children of <p/> elements
    return (
        <div>
            <div>
                {props.description}
            </div>
            <div>
                <a className='App-link' href={props.link}>{props.linkId}</a>
            </div>
            <br />
        </div>
    );
}

function LinkWithIssuer(props: LinkProps) {
    return (
        <div>
            <div>
                {props.description}
            </div>
            <div>
                <a className='App-link' href={props.link}>{props.linkId}</a>
            </div>
            <div className='App-soft-text'>
                Issued by: <a className='App-soft-text' href={props.issuerLink}>{props.issuerDescription}</a>
            </div>
            <br />
        </div>
    )
}

type LinkProps = {
    description: string;
    link: string;
    linkId: string;
    issuerDescription?: string;
    issuerLink?: string;
}