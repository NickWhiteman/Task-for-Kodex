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