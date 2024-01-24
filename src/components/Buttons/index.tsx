import { ButtonHTMLAttributes } from "react";
import { MainButton } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...props }: Props) {
  return <MainButton {...props}>{label}</MainButton>;
}
