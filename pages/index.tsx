import { fetchFuelRequest } from "@/api/request";
import { Fuel } from "@/types/fuel";
import { useEffect, useState } from "react";


export default function Home() {
  const [data, setData] = useState<Fuel[]>([]);
  const router = useState();
  //   const [date, setDate] = useState<any[]>([]);

  // const DisplayDate = async () => {
  //   const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/fuel-requests`);
  //   const resdate = await response.json();
  //   console.log(resdate);
  //   setDate(resdate.date);
  // }
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
      {/* <h1 className="text-3xl font-bold">Fuel Inventory</h1>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> */}

      {/* <table className="border-1 border-black">
          <thead className="border-1 border-black p-2 bg-black">
            <tr className="border-1 border-black text-center">
              <th className="border-1 border-white p-2 text-center text-white">
                Request ID
              </th>
              <th className="border-1 border-white p-2 text-center text-white">
                Date Requested
              </th>
              <th className="border-1 border-white p-2 text-center text-white">
                Requestor
              </th>
              <th className="border-1 border-white p-2 text-center text-white">
                Requestor Office
              </th>
              <th className="border-1 border-white p-2 text-center text-white">
                Office Head
              </th>
              <th className="border-1 border-white p-2 text-center text-white">
                Plate #
              </th>
              <th className="border-1 border-white p-2 text-center text-white">
                Vehicle
              </th>
              <th className="border-1 border-white p-2 text-center text-white">
                Status
              </th>
              <th className="border-1 border-white p-2 text-center text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody> */}
        <h1 className="text-3xl font-bold font-mono">Fuel Inventory</h1>
      <div className="flex gap-2 flex-wrap mt-4 justify-center">
        {data.map((d: any) => (
          <tr key={d.id} className="mt-5 flex">
            <div className="card bg-base-100 w-130 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Request ID: {d.request_id}</h2>
                <p className="text-left font-bold text-lg">
                  {d.requestor_name}
                </p>
                <p className="text-left text-sm">
                  {d.formatted_date}
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View</button>
                </div>
              </div>
            </div>
            {/* <td className="border-1 border-black p-2 text-center">
                  {d.request_id}
                </td>
                <td className="border-1 border-black p-2 text-center">
                  {d.date_requested}
                </td>
                <td className="border-1 border-black p-2 text-center">
                  {d.requestor_name}
                </td>
                <td className="border-1 border-black p-2 text-center">
                  {d.requestor_office}
                </td>
                <td className="border-1 border-black p-2 text-center">
                  {d.requestor_head_office}
                </td>
                <td className="border-1 border-black p-2 text-center">
                  {d.plate_no}
                </td>
                <td className="border-1 border-black p-2 text-center">
                  {d.vehicle}
                </td>
                <td className="border-1 border-black p-2 text-center">
                  {d.status}
                </td>
                <td className="border-1 border-black p-2 text-center">
                  <div className="flex gap-2">
                    <button className="rounded px-3 border-1 border-black bg-green-600 text-white">
                      Approve
                    </button>
                    <button className="rounded px-3 border-1 border-black bg-red-500 text-white">
                      Reject
                    </button>
                  </div>
                </td> */}
          </tr>
        ))}
        {/* </tbody>
        </table>
       */}
      </div>
    </div>
  );
}
