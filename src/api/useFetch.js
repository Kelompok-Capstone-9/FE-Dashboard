import { useState, useEffect } from "react";
// how to use
/*
  const { response, isLoading } = useAxios({
    api: yourAPI,
    method: yourMethod(get,post,put,delete),
    url: yourURL ('/membership'),
  });

*/

const useFetch = ({ api, method, url}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        api[method.toLowerCase()](url)
          .then((res) => {
            setResponse(res.data);
          })
          .finally(() => {
            setIsLoading(false);
          });
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [api, , method, url]);

  return { response, error, isLoading };
};
export default useFetch;
