import React from 'react';
import { useSelector } from "react-redux";
import { getIsSortAlphabet, getIsSortTime, getNumbers } from "../selectors";
import { RootState } from "../store";
import { renderJSX } from "./renderHelpers";

export const NumberComponent: React.FC = () => {
  const numberData: string[] = useSelector((state: RootState) => getNumbers(state.appStore));

  const isSortTime: boolean = useSelector((state: RootState) =>
    getIsSortTime(state.appStore));

  const isSortAlphabet: boolean = useSelector((state: RootState) =>
    getIsSortAlphabet(state.appStore));
  
  const insertHtml = (num: string, index: number): JSX.Element => (
    <dd key={index + 1}>{ num }</dd>
  );

  // const renderJSX = (
  //   renderList: string[],
  //   insertHtml: (name: string, index: number) => JSX.Element
  // ) => {
  //   if(isSortTime)
  //     return numberData.reverse().map((name, index) =>
  //       insertHtml(name, index));
  //   if (isSortAlphabet)
  //     return numberData.sort((a, b) => a > b ? 1 : -1).map((name, index) =>
  //       insertHtml(name, index));
  // };

  return (
    <>
      {
        renderJSX(
          numberData,
          insertHtml,
          isSortTime,
          isSortAlphabet
        )
      }
    </>
  )
};