import ItemCard from '@/components/ItemCard';
import { render } from '@testing-library/react-native';

const mockItem = { id: '1', name: 'mockName1', description: 'mockDescription1', image: null }


describe('<ItemCard />', () => {
  test('ItemCard renders item', () => {
    const { getByText } = render(<ItemCard item={mockItem} />);

    getByText(mockItem.name);
    getByText(mockItem.description);
  });
});
