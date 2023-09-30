// lib
import {
  useCallback,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

const useToggle = (initialState: boolean = false) => {
  const [componentState, setComponentState]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState<boolean>(initialState);

  const toggle = useCallback(
    () => setComponentState(!componentState),
    [componentState]
  );

  return [componentState, toggle, setComponentState] as const;
};

export default useToggle;
