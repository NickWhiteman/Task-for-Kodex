import { useSelector } from "react-redux";
import { getWords } from "../selectors";
import { RootState } from "../store";
import { renderJSX } from "./renderHelpers";

export const StringComponent: React.FC = () => {
  const stringData: string[] = useSelector((state: RootState) =>
    getWords(state.appStore));
  
  const renderWords: string[] = stringData.filter((item, index) => 
    stringData.indexOf(item) === index
  );

  const countRepeatWords = (word: string) => {
    let count = 0;
    stringData.forEach(item => item === word && count++)
    if (count > 1)
      return (
        <span> x { count }</span>
      )
    else return <></>
  };

  const insertHtml = (word: string, index: number): JSX.Element => (
    <dd key={index}>
      {word}
      {countRepeatWords(word)}
    </dd>
  );

  return (
    <>
      {
        renderJSX(
          renderWords,
          insertHtml
        )
      }
    </>
  )
};