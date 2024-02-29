import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState();

  useEffect(async () => {
    const Getdata = async () => {
      await fetch(url);
      const data = await response.json();
      return data;
    };

    try {
      const data = await Getdata();
      setdata(data);
    } catch (error) {
      // throw new Error(error);
    }
  }, []);
  return data;
};
export default useFetch;
