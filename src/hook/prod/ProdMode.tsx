import React from "react";
import useProdMode from "./useProdMode";

/**
 * This component registers that the project is running in production mode.
 *
 * @return {ReactElement} React Component
 */
export default function ProdMode(): JSX.Element {
  useProdMode();
  return <div />;
}
