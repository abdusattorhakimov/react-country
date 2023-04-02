import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPadding, setIsPadding] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsPadding(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setError(null);
        setIsPadding(false);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setIsPadding(false);
      }
    };
    getData();
  }, [url]);
  return { data, error, isPadding };
};
export default useFetch;
