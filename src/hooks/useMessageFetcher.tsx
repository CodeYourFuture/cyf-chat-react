import { useState, useEffect } from 'react';
import { default as TMessage } from '../types/message';

interface IUseMessageFetcher {
  loading: boolean;
  error: string;
  messages: TMessage[];
  triggerFetch: () => void;
}

const useMessageFetcher = (): IUseMessageFetcher => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [triggerState, setTriggerState] = useState<boolean>(false);

  const triggerFetch = ():void => {
    setTriggerState(!triggerState);
  }

  useEffect(() => {
    fetch(`${API_URL}/messages`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError(res.statusText);
          setLoading(false);     
        }
      })
      .then((data) => {
        setMessages(data);
        setError(''); 
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [API_URL, triggerState]);

  return {
    loading,
    error,
    messages,   
    triggerFetch,
  };
};

export default useMessageFetcher;
