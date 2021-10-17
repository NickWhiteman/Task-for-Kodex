import { useDispatch } from "react-redux";
import { exceptionForInput, exceptionForNumbers } from "../const";
import { AppAction } from "../reducer";
import { HybridComponent } from "./HybridComponent"
import { NumberComponent } from "./NumberComponent"
import { StringComponent } from "./StringComponent"

export const AppBoard: React.FC = () => {
  const dispatch = useDispatch();
  
  const valueValidation = (value: string) => {
    if (
      /[0-9]/.test(value) &&
      !exceptionForInput.test(value) &&
      exceptionForNumbers.test(value)
    ) {
      dispatch(AppAction.setHybrids(value));
    } else if (
      /[0-9]/.test(value) &&
      !exceptionForNumbers.test(value) &&
      !exceptionForInput.test(value)
    ) {
      dispatch(AppAction.setNumbers(value));
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
        <StringComponent />
      </div>
      <div className="numberData">
        <NumberComponent />
      </div>
      <div className="hybridData">
        <HybridComponent />
      </div>
    </div>
  )
};
