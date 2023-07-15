import {
  BtnColorSchema,
  BtnSize,
  INormalButton,
  IRedirectButton,
} from '@src/types/root';

export const mock_data_normalButton: INormalButton[] = [
  {
    colorSchema: BtnColorSchema.BrownBgTextWhite,
    btnSize: BtnSize.Small,
    btnText: 'Normal Button One',
    hoverColorSchema: BtnColorSchema.WhiteBgTextBrown,
    isUpperCased: false,
    clickHandler: (e) => {
      console.log(`Clicked Normal button`);
    },
    dataTestId: 'btn-normal-one',
  },
  {
    colorSchema: BtnColorSchema.WhiteBgTextBrown,
    btnSize: BtnSize.Small,
    btnText: 'Normal Button Two',
    hoverColorSchema: BtnColorSchema.BrownBgTextWhite,
    isUpperCased: false,
    clickHandler: (e) => {
      console.log(`Clicked Normal button`);
    },
    dataTestId: 'btn-normal-two',
  },
  {
    colorSchema: BtnColorSchema.WhiteBgTextGray,
    btnSize: BtnSize.Small,
    btnText: 'Normal Button Three',
    hoverColorSchema: BtnColorSchema.WhiteBgTextBrown,
    isUpperCased: false,
    clickHandler: (e) => {
      console.log(`Clicked Normal button`);
    },
    dataTestId: 'btn-normal-three',
  },
];

export const mock_data_redirectButton: IRedirectButton[] = [
  {
    btnSize: BtnSize.Small,
    btnText: 'Redirect Button one',
    colorSchema: BtnColorSchema.BrownBgTextWhite,
    hoverColorSchema: BtnColorSchema.WhiteBgTextBrown,
    isOpenNewTab: true,
    redirectLink: 'https://chat.openai.com/',
    isUpperCased: true,
    dataTestId: 'Redirect Button One',
  },
  {
    btnSize: BtnSize.Large,
    btnText: 'Redirect Button two',
    colorSchema: BtnColorSchema.WhiteBgTextBrown,
    hoverColorSchema: BtnColorSchema.BrownBgTextWhite,
    isOpenNewTab: true,
    redirectLink: 'https://chat.openai.com/',
    isUpperCased: false,
    dataTestId: 'Redirect Button Two',
  },
  {
    btnSize: BtnSize.Medium,
    btnText: 'Redirect Button Three',
    colorSchema: BtnColorSchema.WhiteBgTextGray,
    hoverColorSchema: BtnColorSchema.WhiteBgTextGray,
    isOpenNewTab: true,
    redirectLink: 'https://chat.openai.com/',
    isUpperCased: false,
    dataTestId: 'Redirect Button Three',
  },
  {
    btnSize: BtnSize.Small,
    btnText: 'Redirect Button Four',
    colorSchema: BtnColorSchema.BrownBgTextWhite,
    hoverColorSchema: BtnColorSchema.WhiteBgTextBrown,
    isOpenNewTab: true,
    redirectLink: 'https://chat.openai.com/',
    isUpperCased: false,
    dataTestId: 'Redirect Button Five',
  },
];
