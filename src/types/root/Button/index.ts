export enum BtnColorSchema {
  BrownBgTextWhite = 'BrownBgTextWhite',
  WhiteBgTextBrown = 'WhiteBgTextBrown',
  WhiteBgTextGray = 'WhiteBgTextGray',
}
export enum BtnSize {
  Small = 'btn-sm',
  Medium = 'btn-md',
  Large = 'btn-lg',
  ExtraLarge = 'btn-ex-lg',
}
export interface IButton {
  btnText: string;
  colorSchema: BtnColorSchema;
  btnSize: BtnSize;
  hoverColorSchema: BtnColorSchema;
  isUpperCased: boolean;
  dataTestId?: string;
}
export interface INormalButton extends IButton {
  clickHandler?: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => void;
}
export interface IRedirectButton extends IButton {
  isOpenNewTab: boolean;
  redirectLink: string;
}
