import { fireEvent, render } from '@testing-library/react-native';
import { screen } from 'expo-router/testing-library';

import HomeScreen from '@/app/index';

describe('<HomeScreen />', () => {
  test('HomeScreen renders content correctly', () => {
    const { getByText } = render(<HomeScreen />);

    getByText('Where Is');
    getByText('Add Item');
    getByText('Items List');
  });
});
