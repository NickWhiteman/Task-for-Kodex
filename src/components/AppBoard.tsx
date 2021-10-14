import { useDispatch } from "react-redux";
import { AppAction } from "../reducer";
import { HybridComponent } from "./HybridComponent"
import { NumberComponent } from "./NumberComponent"
import { StringComponent } from "./StringComponent"

export const AppBoard: React.FC = () => {
  const dispatch = useDispatch();

  const valueValidation = (value: string) => {
    const temp: number = Number(value);

    if (value.match(/[0-9]/) && isNaN(temp)) {
      dispatch(AppAction.setHybrids(value));        
    } else if (typeof temp === 'number' && !value.match(/[A-Za-zА-Яа-яЁё]/)) {
      dispatch(AppAction.setNumbers(value));
    } else if (isNaN(temp)) {
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
