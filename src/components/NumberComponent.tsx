import { useSelector } from "react-redux";
import { getNumbers } from "../selectors";
import { RootState } from "../store";

export const NumberComponent: React.FC = () => {
  const numberData: string[] = useSelector((state: RootState) => getNumbers(state.appStore));

  return (
    <>
      {
        numberData.map((num, index) => (
          <dd key={index}>{ num }</dd>
        ))
      }
    </>
  )
};