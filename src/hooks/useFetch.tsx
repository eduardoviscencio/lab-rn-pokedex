import {useEffect, useState} from 'react';

export const useFetch = <T,>(url: string, enabled: boolean = true) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);

        const result: T = await response.json();

        if (!isMounted) {
          return;
        }

        setData(result);
      } catch (_) {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    enabled && fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, enabled]);

  return {loading, data, error};
};
