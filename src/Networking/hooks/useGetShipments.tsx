import axios from "axios";
import { useState, useContext } from "react";
import { baseUrl } from "../config";

export const useGetShipments = () => {
  const [error, setError] = useState<string>();
  const [data, setData] = useState<unknown>(null);

  const getShipments = async (payload) => {
    try {
      const url = `${baseUrl}frappe.client.get_list`;
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
    } finally {
    }
  };

  return {
    getShipments,
    error,
  };
};
