import { Button } from '@src/components/root';
import { BtnColorSchema, BtnSize } from '@src/types/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Component/Root/Button/All',
  component: Button,
  argTypes: {
    btnText: {
      control: 'text',
    },
    redirectLink: {
      control: 'text',
      if: {
        arg: 'redirectLink',
        exists: true,
      },
    },
    colorSchema: {
      control: 'text',
      options: [...Object.values(BtnColorSchema)],
    },
    btnSize: {
      control: 'text',
      options: [...Object.values(BtnSize)],
    },
    hoverColorSchema: {
      control: 'text',
      options: [...Object.values(BtnColorSchema)],
    },
    isOpenNewTab: {
      control: 'boolean',
      if: {
        arg: 'isOpenNewTab',
        exists: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

/**
 * Base Button Template
 *
 */
const ButtonTemplate: ComponentStory<typeof Button> = (arg) => {
  return (
    <div>
      <Button {...arg} />
    </div>
  );
};

/**
 *
 * Redirect Button Template
 *
 */
const RedirectButton: ComponentStory<typeof Button.RedirectButton> = (arg) => {
  return (
    <div>
      <Button.RedirectButton {...arg} />
    </div>
  );
};

/**
 * Normal Button
 *
 */
export const NormalButtonDemo = ButtonTemplate.bind({});

NormalButtonDemo.args = {
  colorSchema: BtnColorSchema.BrownBgTextWhite,
  btnSize: BtnSize.Small,
  btnText: 'Click Me',
  hoverColorSchema: BtnColorSchema.BrownBgTextWhite,
};

/**
 *
 * Redirect Button
 *
 */
export const RedirectButtonDemo = RedirectButton.bind({});
RedirectButtonDemo.args = {
  btnSize: BtnSize.ExtraLarge,
  btnText: 'Click Me',
  colorSchema: BtnColorSchema.BrownBgTextWhite,
  hoverColorSchema: BtnColorSchema.BrownBgTextWhite,
  isOpenNewTab: true,
  redirectLink: 'https://chat.openai.com/',
};
