import { baseUrl } from "../config";
import axios from "axios";
import { useState, useContext } from "react";

export const UseloginHook = () => {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<unknown>(null);

  const postLogin = async (payload: any) => {
    const url = `${baseUrl}login`;
    try {
      const response = await axios.post(url, payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      setData(response.data);
      return response.data;
    } catch (err: unknown) {
      setError(err?.message ?? "Unknown error");
      setData(null);
    } finally {
    }
  };

  return {
    postLogin,
    error,
    data,
  };
};
