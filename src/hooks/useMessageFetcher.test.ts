import { rest } from 'msw';
import { setupServer } from 'msw/node';
import useMessageFetcher from './useMessageFetcher';
import { renderHook } from '@testing-library/react-hooks';

const testMessage = { 
  from: 'John', 
  text: 'Hello', 
  date: `${new Date()}`, 
  id: 0 };

const server = setupServer(
  rest.get('https://chat-server-berkeli.herokuapp.com/api/v1/messages', (req, res, ctx) => {
    return res(ctx.json([testMessage]));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('useMessageFetcher Hook test', async ()=>{
  const { result, waitForNextUpdate } = renderHook(()=> useMessageFetcher());
  await waitForNextUpdate();
  expect(result.current.messages).toEqual([testMessage]);
  expect(result.current.loading).toEqual(false);
})