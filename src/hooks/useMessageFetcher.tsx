/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';
import { default as TMessage } from '../types/message';
import { API_URL } from '../config';

interface IUseMessageFetcher {
  loading: boolean;
  messages: TMessage[];
  triggerFetch: () => void;
}

const useMessageFetcher = (): IUseMessageFetcher => {
  const [loading, setLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [triggerState, setTriggerState] = useState<boolean>(false);
  const toast = useToast();

  const notifier = (type:string): void => {
    switch (type) {
      case 'no-new-messages':
        toast({
          title: 'Info',
          description: 'There are no new messages',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        break;
      case 'success':
        toast({
          title: 'Success',
          description: 'Messages fetched successfully',
          status: 'success',
          duration: 3000,
        });
        break;
      case 'error':
        toast({
          title: 'Error',
          description: 'Failed to fetch messages',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        break;
      default:
        break;
    }
  }

  const triggerFetch = ():void => {
    setTriggerState(!triggerState);
  }

  useEffect(() => {
    fetch(`${API_URL}/messages`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setLoading(false);
          notifier('error');
        }
      })
      .then((data) => {
        if (data.length === messages.length && data.length > 0 && messages.length > 0) {
          notifier('no-new-messages');
        }
        setMessages(data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        notifier('error');
      });
  }, [triggerState]);

  return {
    loading,
    messages,   
    triggerFetch,
  };
};

export default useMessageFetcher;
