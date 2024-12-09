import { useEffect, useState } from 'react';

export const useCustomHook = (apiCall: () => Promise<any>) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    apiCall().then(setData);
  }, [apiCall]);

  return data;
};
