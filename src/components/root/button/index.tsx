import { IButton, INormalButton, IRedirectButton } from '@src/types/root';
import Link from 'next/link';
import React from 'react';

//Common layout
const BaseButton = ({
  btnSize,
  btnText,
  colorSchema,
  hoverColorSchema,
}: IButton) => {
  return (
    <span>
      <span>{btnText}</span>
    </span>
  );
};

//Normal Button
export const Button = (props: INormalButton) => {
  return (
    <span>
      <BaseButton {...props} />
    </span>
  );
};

//Redirect Button
Button.RedirectButton = (props: IRedirectButton) => {
  return (
    <Link href={props.redirectLink} passHref>
      <span>
        <BaseButton {...props} />
      </span>
    </Link>
  );
};
export default Button;
