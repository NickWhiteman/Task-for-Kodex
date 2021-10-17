import React from 'react';
import { useSelector } from "react-redux";
import { getNumbers } from "../selectors";
import { RootState } from "../store";
import { renderJSX } from './renderHelpers';

type NumbersProps = {
  isSortTime: boolean
  isSortAlphabet: boolean
}

export const NumberComponent: React.FC<NumbersProps> = ({
  isSortTime,
  isSortAlphabet
}) => {
  const numberData: number[] | string[] = useSelector((state: RootState) => getNumbers(state.appStore));

  const insertHtml = (num: string | number, index: number): JSX.Element => (
    <dd key={index + 1}>{ num }</dd>
  );

  // const renderJSX = (
  //   renderList: string[],
  //   insertHtml: (name: string, index: number) => JSX.Element,
  //   isSortTime: boolean,
  //   isSortAlphabet: boolean): JSX.Element[] => {
  //   let sortRenderList: string[] = [];
  //   let temp: string[] = [];
  //   if (isSortTime) {
  //     temp = renderList.concat();
  //     sortRenderList = temp.reverse();
  //     return sortRenderList.map((name, index) =>
  //     insertHtml(name, index));
  //   }
  //   if (isSortAlphabet)
  //     temp = renderList.concat();
  //     sortRenderList = temp.sort();
  //     return sortRenderList.map((name, index) =>
  //     insertHtml(name, index));
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