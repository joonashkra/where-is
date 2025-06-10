import NewItemForm from '@/components/NewItemForm';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';
const mockItem = { id: '1', name: 'mockName1', description: 'mockDescription1', image: null }

const mockHandleSubmit = jest.fn();
jest.spyOn(Alert, 'alert');
const errorMessageText = 'Please provide both name and description.'

describe('<NewItemForm />', () => {
  test('NewItemForm calls handleSubmit with correct data', () => {
    const { getByPlaceholderText, getByTestId } = render(<NewItemForm handleSubmit={mockHandleSubmit} />);

    const nameField = getByPlaceholderText('Enter item name');
    const descriptionField = getByPlaceholderText('Enter description');
    const submitButton = getByTestId('submit-button');

    fireEvent.changeText(nameField, mockItem.name);
    fireEvent.changeText(descriptionField, mockItem.description);
    fireEvent.press(submitButton);

    expect(mockHandleSubmit).toHaveBeenCalled()
  });
  test('Error alert is called with incorrect data', () => {
    const { getByPlaceholderText, getByTestId } = render(<NewItemForm handleSubmit={mockHandleSubmit} />);

    const nameField = getByPlaceholderText('Enter item name');
    const descriptionField = getByPlaceholderText('Enter description');
    const submitButton = getByTestId('submit-button');

    fireEvent.changeText(nameField, mockItem.name);
    fireEvent.changeText(descriptionField, '');
    fireEvent.press(submitButton);

    expect(Alert.alert).toHaveBeenCalledWith(errorMessageText)
  });
});
