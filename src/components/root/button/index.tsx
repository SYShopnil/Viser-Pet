import {
  BtnColorSchema,
  BtnSize,
  IButton,
  INormalButton,
  IRedirectButton,
} from '@src/types/root';
import Link from 'next/link';
import React, { MouseEvent } from 'react';
import ModuleStyle from './button.module.scss';

//Common layout
const BaseButton = ({
  btnSize,
  btnText,
  colorSchema,
  hoverColorSchema,
  isUpperCased,
}: IButton) => {
  /**Not fixed */
  const common_btn_txt_wrapper_style = `inline-block !font-secondary`;
  const common_btn_main_wrapper_style = `w-[100%] h-[auto]  flex justify-center items-center cursor-pointer  rounded-[1.875rem]`;
  const bg_theme: string =
    Object.keys(BtnColorSchema).find((color: string) => color == colorSchema) ||
    'BrownBgTextWhite';

  const bg_hover_theme: string =
    Object.keys(BtnColorSchema).find(
      (color: string) => color == hoverColorSchema
    ) || 'WhiteBgTextBrown';

  const btn_size: string =
    Object.values(BtnSize).find((size: string) => btnSize == size) ||
    BtnSize.Small;

  const isUpperCaseOrCapitalized = isUpperCased
    ? 'text-transform-uppercase'
    : 'text-transform-capitalized';

  return (
    // button main wrapper
    <span
      className={`${common_btn_main_wrapper_style}   ${ModuleStyle[bg_theme]} ${
        ModuleStyle['mainWrapper']
      } ${ModuleStyle[`${bg_hover_theme}Hover`]} ${
        ModuleStyle[`${btn_size}-wrapper`]
      }`}
    >
      {/* btn text part wrapper */}
      <span
        className={`${common_btn_txt_wrapper_style} ${ModuleStyle[btn_size]} ${ModuleStyle[isUpperCaseOrCapitalized]}`}
      >
        {btnText}
      </span>
    </span>
  );
};

//Normal Button
export const Button = (props: INormalButton) => {
  return (
    <span
      onClick={(
        e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
      ) => props.clickHandler?.(e)}
      data-testid={props.dataTestId}
    >
      <BaseButton {...props} />
    </span>
  );
};

//Redirect Button
Button.RedirectButton = (props: IRedirectButton) => {
  return (
    <Link href={props.redirectLink} passHref>
      <a
        target={props.isOpenNewTab ? '_blank' : '_self'}
        data-testid={props.dataTestId}
      >
        <BaseButton {...props} />
      </a>
    </Link>
  );
};
export default Button;
