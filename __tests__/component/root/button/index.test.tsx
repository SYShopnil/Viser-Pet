import {
  mock_data_normalButton,
  mock_data_redirectButton,
} from '@root/__mock-props__/component/root/button';
import { Button } from '@src/components/root';
import { describe } from 'node:test';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('When Normal button has rendered', () => {
  it.each(mock_data_normalButton)(
    `Expect successfully rendered`,
    (btnMockData) => {
      const { getByTestId } = render(<Button {...btnMockData} />);
      const btn = getByTestId(btnMockData.dataTestId || '');
      expect(btn).toBeInTheDocument();
      expect(btn).toMatchSnapshot();
    }
  );
});

describe('When Redirect Button has rendered', () => {
  it.each(mock_data_redirectButton)(
    'Expect successfully rendered',
    (mockButtonData) => {
      const { getAllByTestId } = render(
        <Button.RedirectButton {...mockButtonData} />
      );
      const redirectButton = getAllByTestId(mockButtonData.dataTestId || '');
    }
  );
});
// To Do
/**
 * 1. Check button size
 * 2. Check button title works perfectly or not
 * 3. Check isUppersCase worked or not
 *  4. Check bg theme class
 *
 */
