import {
  mock_data_normalButton,
  mock_data_redirectButton,
} from '@root/__mock-props__/component/root/button';
import { Button } from '@src/components/root';
import { BtnColorSchema, BtnSize, INormalButton } from '@src/types/root';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'tailwindcss/tailwind.css';

export default {
  title: 'Component/Root/Buttons',
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
      control: {
        type: 'select',
      },
      options: [...Object.values(BtnColorSchema)],
    },
    btnSize: {
      control: {
        type: 'select',
      },
      options: [...Object.values(BtnSize)],
    },
    hoverColorSchema: {
      control: {
        type: 'select',
      },
      options: [...Object.values(BtnColorSchema)],
    },
    isOpenNewTab: {
      control: 'boolean',
      if: {
        arg: 'isOpenNewTab',
        exists: true,
      },
    },
    isUpperCased: {
      type: 'boolean',
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Button>;

/**
 * Base Button Template
 *
 */
const ButtonTemplate: ComponentStory<typeof Button> = (arg) => {
  return (
    <div className="container">
      <div className={`h-screen flex justify-center items-center`}>
        <div>
          <Button {...arg} />
        </div>
      </div>
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
    <div className="container">
      <div className={`h-screen flex justify-center items-center`}>
        <div>
          <Button.RedirectButton {...arg} />
        </div>
      </div>
    </div>
  );
};

/**
 * Normal Button Demos
 *
 */
export const NormalButtonDemoOne = ButtonTemplate.bind({});

NormalButtonDemoOne.args = mock_data_normalButton[0];

export const NormalButtonDemoTwo = ButtonTemplate.bind({});

NormalButtonDemoTwo.args = mock_data_normalButton[1];
export const NormalButtonDemoThree = ButtonTemplate.bind({});

NormalButtonDemoThree.args = mock_data_normalButton[2];

/**
 *
 * Redirect Button Demos
 *
 */
export const RedirectButtonDemoOne = RedirectButton.bind({});
RedirectButtonDemoOne.args = mock_data_redirectButton[0];

export const RedirectButtonDemoTwo = RedirectButton.bind({});
RedirectButtonDemoTwo.args = mock_data_redirectButton[1];

export const RedirectButtonDemoThree = RedirectButton.bind({});
RedirectButtonDemoThree.args = mock_data_redirectButton[2];

export const RedirectButtonDemoFour = RedirectButton.bind({});
RedirectButtonDemoFour.args = mock_data_redirectButton[3];
