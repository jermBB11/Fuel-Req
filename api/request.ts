import { api } from "@/api";
import { ApiResponse } from "@/types/api-response";
import { Fuel } from "@/types/fuel";

export const fetchFuelRequest = async (): Promise<Fuel[]> => {
  const response = await api.get("fuel-requests").json<ApiResponse<Fuel[]>>();
  console.log(response.data);
  return response.data ?? [];
};
