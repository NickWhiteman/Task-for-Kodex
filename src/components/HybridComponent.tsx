import { useSelector } from "react-redux";
import { getHybrids } from "../selectors";
import { RootState } from "../store";
import { renderJSX } from "./renderHelpers";

type HybridProps = {
  isSortTime: boolean
  isSortAlphabet: boolean
}

export const HybridComponent: React.FC<HybridProps> = ({
  isSortTime,
  isSortAlphabet
}) => {
  const hybridData: string[] = useSelector((state: RootState) =>
    getHybrids(state.appStore));

    // const renderJSX = (
    //   renderList: string[] = [],
    //   insertHtml: (name: string, index: number) => JSX.Element,
    //   isSortTime: boolean,
    //   isSortAlphabet: boolean) => {
    //   let sortRenderList: string[] = [];
    //   let temp: string[] = renderList.concat()
    //   if (isSortTime) {
    //     sortRenderList = temp.reverse();
    //     return sortRenderList.map((name, index) =>
    //     insertHtml(name, index));
    //   }
    //   if (isSortAlphabet)
    //     sortRenderList = temp.sort();
    //     return sortRenderList.map((name, index) =>
    //     insertHtml(name, index));
    // };
  
  const insertHtml = (hybrid: string | number, index: number): JSX.Element => (
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