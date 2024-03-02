import { ButtonUnstyled } from "./Button";
import type { ButtonDataProps } from "./Button";

export function Button(props: ButtonDataProps) {
  const skinnyStyles = {
    width: "fit-content",
  };
  return (
    <ButtonUnstyled {...props} styles={props.skinny ? skinnyStyles : {}} />
  );
}
