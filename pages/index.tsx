import { fetchFuelRequest } from "@/api/request";
import { Fuel } from "@/types/fuel";
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState<Fuel[]>([]);
  const router = useState();
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFuelRequest();
        setData(response);
      } catch (error) {
        console.error("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col text-center justify-center">
        <h1 className="text-3xl font-bold font-mono">Fuel Inventory</h1>
      <div className="flex gap-2 flex-wrap mt-4 justify-center">
        {data.map((d: any) => (
          <div key={d.id} className="mt-5 flex">
            <div className="card bg-base-100 w-130 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Request ID: {d.request_id}</h2>
                <p className="text-left font-bold text-lg">
                  {d.requestor_name}
                </p>
                <p className="text-left text-sm">
                  {d.formatted_date}
                </p>
                <p className="text-left text-sm">
                 Fuel Type: {d.fuel_type}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
