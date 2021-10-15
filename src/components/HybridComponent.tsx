import { useSelector } from "react-redux";
import { getHybrids } from "../selectors";
import { RootState } from "../store";
import { renderJSX } from "./renderHelpers";

export const HybridComponent: React.FC = () => {
  const hybridData: string[] = useSelector((state: RootState) =>
    getHybrids(state));

  const insertHtml = (hybrid: string, index: number): JSX.Element => (
    <dd key={index + 1}>{hybrid}</dd>
  );

  return (
    <>
      {
        renderJSX(
          hybridData,
          insertHtml
        )
      }
    </>
  )
};