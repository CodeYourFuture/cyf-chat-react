import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import SendMessage from './SendMessage';


const testMessage = { 
  text: 'Hello', 
};

const server = setupServer(
  rest.post('https://chat-server-berkeli.herokuapp.com/api/v1/messages', (req, res, ctx) => {
    return res(ctx.json({
      
      id: '1',
      date: `${new Date()}`,
    }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('SendMessage Component', async () => {
  const triggerFetch = jest.fn();
  render(<SendMessage user='John' triggerFetch={triggerFetch} />)
  const sendMessageButton = screen.getByText('Send', { selector: 'button' });
  fireEvent.click(sendMessageButton);
  await waitFor(()=> expect(triggerFetch).toHaveBeenCalledTimes(1));
  const textBox = screen.getByRole('textbox');
  expect(textBox).toBeInTheDocument();
})