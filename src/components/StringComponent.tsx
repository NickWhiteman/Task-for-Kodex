import { useSelector } from "react-redux";
import { getWords } from "../selectors";
import { RootState } from "../store";

export const StringComponent: React.FC = () => {
  const stringData: string[]= useSelector((state: RootState) => getWords(state.appStore));
  return (
    <>
      {
        stringData?.map((word, index) => (
          <dd key={index}>{ word }</dd>
        ))
      }
    </>
  )
};