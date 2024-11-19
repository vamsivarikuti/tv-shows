import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const baseUrl = "https://api.tvmaze.com";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey: [url, params] }) => {
        if (typeof url === "string") {
          const { data } = await axios.get(`${baseUrl}/${url.toLowerCase()}`, {
            params,
          });
          return data;
        }
        throw new Error("Invalid QueryKey");
      },
    },
  },
});
