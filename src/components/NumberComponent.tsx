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

  const renderHtml = () => {
    return renderJSX(
      numberData,
      insertHtml,
      isSortTime,
      isSortAlphabet
    );
  };

  return (
    <>
      {
        renderHtml()
      }
    </>
  )
};