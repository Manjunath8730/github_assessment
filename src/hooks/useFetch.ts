import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (
  searchQuery: string,
  page: number,
  sortParam: string,
  sortOrder: string
) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setData([]);
      setTotalCount(0);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    axios
      .get('https://api.github.com/search/users', {
        params: {
          q: searchQuery,
          page: page,
          per_page: 10,
          sort: sortParam,
          order: sortOrder,
        },
      })
      .then((response) => {
        setData(response.data.items || []);
        setTotalCount(response.data.total_count || 0);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, [searchQuery, page, sortParam, sortOrder]);

  return { data, loading, totalCount, error };
};

export default useFetch;
