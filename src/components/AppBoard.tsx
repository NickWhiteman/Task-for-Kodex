import { useDispatch } from "react-redux";
import { AppAction } from "../reducer";
import { HybridComponent } from "./HybridComponent"
import { NumberComponent } from "./NumberComponent"
import { StringComponent } from "./StringComponent"

export const AppBoard: React.FC = () => {
  const dispatch = useDispatch();
  const exceptionForNumbers = /[A-Za-zА-Яа-яЁё{}\\'><!@£$%^&*()_+?`#=€¡¢∞§¶[\]]/;
  const exceptionForInput = /[{}\\'><!@£$%^&*()_+`#=€¡¢?∞§¶§[\]]/;

  const valueValidation = (value: string) => {
    const temp: number = Number(value);

    if (
      value.match(/[0-9]/) &&
      isNaN(temp) &&
      !exceptionForInput.test(value)
    ) {
      dispatch(AppAction.setHybrids(value));
    } else if (
      typeof temp === 'number' &&
      !exceptionForNumbers.test(value)
    ) {
      dispatch(AppAction.setNumbers(value));
    } else if (
      isNaN(temp) &&
      !exceptionForInput.test(value)
    ) {
      dispatch(AppAction.setWords(value));
    };
  };

  const inputChangeHandler = (event: any) => {
    const value = event.target.value;
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
