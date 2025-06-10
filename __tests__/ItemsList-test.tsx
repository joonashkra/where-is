import ItemsList from '@/components/ItemsList';
import { render, fireEvent, screen } from '@testing-library/react-native';

const mockItems = [
    { id: '1', name: 'mockName1', description: 'mockDescription1', image: null },
    { id: '2', name: 'mockName2', description: 'mockDescription2', image: null },
    { id: '3', name: 'mockName3', description: 'mockDescription3', image: null }
]


describe('<ItemsList />', () => {
  test('renders items', () => {
    const { getByText } = render(<ItemsList items={mockItems} />);

    mockItems.forEach(item => {
      getByText(item.name);
    })
  });
});
