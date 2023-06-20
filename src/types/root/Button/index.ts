export enum BtnColorSchema {
  BrownBgTextWhite = 'BrownBgTextWhite',
  WhiteBgText = 'WhiteBgText',
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
}
export interface INormalButton extends IButton {
  clickHandler?: (e: MouseEvent, ...a: any[]) => void;
}
export interface IRedirectButton extends IButton {
  isOpenNewTab: boolean;
  redirectLink: string;
}
