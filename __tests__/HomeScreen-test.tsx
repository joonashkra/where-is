import { fireEvent, render } from '@testing-library/react-native';

import HomeScreen from '@/app/index';

describe('<HomeScreen />', () => {
  test('renders content correctly', () => {
    const { getByText } = render(<HomeScreen />);

    getByText('Where Is');
    getByText('Add Item');
    getByText('Items List');
  });
});
