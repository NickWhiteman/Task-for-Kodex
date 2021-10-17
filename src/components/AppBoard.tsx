import { useDispatch, useSelector } from "react-redux";
import { exceptionForInput, exceptionForNumbers } from "../const";
import { AppAction } from "../reducer";
import { getIsSortAlphabet, getIsSortTime } from "../selectors";
import { RootState } from "../store";
import { HybridComponent } from "./HybridComponent"
import { NumberComponent } from "./NumberComponent"
import { StringComponent } from "./StringComponent"

export const AppBoard: React.FC = () => {
  const dispatch = useDispatch();

  const isSortTime: boolean = useSelector((state: RootState) =>
  getIsSortTime(state.appStore));

const isSortAlphabet: boolean = useSelector((state: RootState) =>
  getIsSortAlphabet(state.appStore));
  
  const valueValidation = (value: string) => {
    const numberValue: number = Number(value);
    if (
      /[0-9]/.test(value) &&
      !exceptionForInput.test(value) &&
      exceptionForNumbers.test(value)
    ) {
      dispatch(AppAction.setHybrids(value));
    } else if (
      /[0-9]/.test(value) &&
      typeof numberValue === 'number' &&
      !exceptionForNumbers.test(value) &&
      !exceptionForInput.test(value)
    ) {
      if (value.length > 10)
        dispatch(AppAction.setNumbers(value));
      else
        dispatch(AppAction.setNumbers(numberValue));
    } else if (
      exceptionForNumbers.test(value) &&
      !exceptionForInput.test(value)
    ) {
      dispatch(AppAction.setWords(value));
    };
  };

  const inputChangeHandler = (event: any) => {
    const value = event.target.value.trim();
    if (event.key === "Enter" && value !== '') {
      valueValidation(value);
      event.target.value = '';
    };
  };

  return (
    <div className="appBoard">
      <div className="inputData">
        <input type="text" required onKeyDown={(event) => {inputChangeHandler(event)}} />
      </div>
      <div className="stringData">
        <StringComponent
          isSortTime={isSortTime}
          isSortAlphabet={isSortAlphabet} />
      </div>
      <div className="numberData">
        <NumberComponent
          isSortTime={isSortTime}
          isSortAlphabet={isSortAlphabet} />
      </div>
      <div className="hybridData">
        <HybridComponent
          isSortTime={isSortTime}
          isSortAlphabet={isSortAlphabet} />
      </div>
    </div>
  )
};
