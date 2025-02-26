import { useEffect, useState } from "react";

export const Luke = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const url = "";
    let ignore = false;
    const fetchData = async () => {
      const result = await fetch(url);
      const data = await result.json();

      if (!ignore) {
        setName(data.name);
        setLoading(false);
      }
    };
    fetchData();
    //cleanup
    return () => {
      ignore = true;
    };
  }, []);

  return <></>;
};
