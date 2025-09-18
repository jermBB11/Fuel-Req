import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res =  await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/fuel-requests`);
  //       const data = await res.json();
  //       console.log("Fetched data:", data);
  //       setData(data.data);
  //     } catch (error) {
  //       console.error('error', error);
  //     }

  //   }

  //   fetchData();
  // }, []);

  return (
    
    <div
      className={`font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <h1 className="text-3xl font-bold">Fuel Inventory</h1>

      <div>
        <table className="border-1 border-black">
          <thead className="border-1 border-black p-2 bg-black">
            <tr className="border-1 border-black text-center">
              <th className="border-1 border-white p-2 text-center text-white">Request ID</th>
              <th className="border-1 border-white p-2 text-center text-white">Date Requested</th>
              <th className="border-1 border-white p-2 text-center text-white">Requestor</th>
              <th className="border-1 border-white p-2 text-center text-white">Requestor Office</th>
              <th className="border-1 border-white p-2 text-center text-white">Office Head</th>
              <th className="border-1 border-white p-2 text-center text-white">Plate #</th>
              <th className="border-1 border-white p-2 text-center text-white">Vehicle</th>
              <th className="border-1 border-white p-2 text-center text-white">Status</th>
              <th className="border-1 border-white p-2 text-center text-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d:any) => (
              <tr key={d.id}>
              <td className="border-1 border-black p-2 text-center">{d.request_id}</td>
              <td className="border-1 border-black p-2 text-center">{d.date_requested}</td>
              <td className="border-1 border-black p-2 text-center">{d.requestor_name}</td>
              <td className="border-1 border-black p-2 text-center">{d.requestor_office}</td>
              <td className="border-1 border-black p-2 text-center">{d.requestor_head_office}</td>
              <td className="border-1 border-black p-2 text-center">{d.plate_no}</td>
              <td className="border-1 border-black p-2 text-center">{d.vehicle}</td>
              <td className="border-1 border-black p-2 text-center">{d.status}</td>
              <td className="border-1 border-black p-2 text-center">
                <div className="flex gap-2">
                  <button className="rounded px-3 border-1 border-black bg-green-600 text-white">Approve</button>
                  <button className="rounded px-3 border-1 border-black bg-red-500 text-white">Reject</button>
                </div>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
