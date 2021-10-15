import { useSelector } from "react-redux";
import { getHybrids, getIsSortAlphabet, getIsSortTime } from "../selectors";
import { RootState } from "../store";
import { renderJSX } from "./renderHelpers";

export const HybridComponent: React.FC = () => {
  const hybridData: string[] = useSelector((state: RootState) =>
    getHybrids(state.appStore));

  const isSortTime: boolean = useSelector((state: RootState) =>
    getIsSortTime(state.appStore));
  
  const isSortAlphabet: boolean = useSelector((state: RootState) =>
    getIsSortAlphabet(state.appStore));

  const insertHtml = (hybrid: string, index: number): JSX.Element => (
    <dd key={index + 1}>{hybrid}</dd>
  );

  return (
    <>
      {
        renderJSX(
          hybridData,
          insertHtml,
          isSortTime,
          isSortAlphabet
        )
      }
    </>
  )
};