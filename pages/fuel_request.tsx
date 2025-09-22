import React, { useState } from "react";

const Fuel_Request = () => {
  const [requestor_name, setName] = useState("");
  const [requestor_office, setOffice] = useState("");
  const [requestor_head_office, setHeadOffice] = useState("");
  const [plate_no, setPlate] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [fuel_type, setFuelType] = useState("");

  const select_office: { [key: string]: string } = {
    MISO: "Bonggo Marcos",
    OVM: "Martin Lapid-Lapid",
    CMO: "Lito Romualdez",
  };

  const handleOfficeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    setOffice(selected);
    const headOffice = select_office[selected] || "";
    setHeadOffice(headOffice);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const request = {
      requestor_name,
      requestor_office,
      requestor_head_office,
      plate_no,
      vehicle,
      fuel_type,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request.");
      }
      alert("Request submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit request. Please try again.");
    }

  };

  return (
    <div className="flex justify-center mt-10">
      <form
        className="bg-gray-100 flex p-5 rounded-2xl shadow-2xl"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="gap-5 items-center">
            <div className="flex justify-between items-center mb-2">
              <label className="font-bold">Name</label>
              <input
                type="text"
                className="name border-b-2 ml-3 p-2 focus:outline-0"
                value={requestor_name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between items-center mb-2">
              <label className="font-bold">Office</label>
              <select
                className="w-50 p-2 focus:outline-0"
                id="offices"
                value={requestor_office}
                onChange={handleOfficeChange}
                required
              >
                <option value="">Select Office</option>
                <option value="MISO">MISO</option>
                <option value="OVM">Office of the Vice Mayor</option>
                <option value="CMO">City Mayor's Office</option>
              </select>
            </div>

            <div className="flex justify-between items-center mb-2">
              <label className="font-bold">Office Head</label>
              <input
                type="text"
                className="office border-b-2 p-2 focus:outline-0"
                placeholder="Office Head"
                value={requestor_head_office}
                readOnly
              />
            </div>
          </div>

          <div className="gap-5">
            <div className="flex justify-between items-center mb-2">
              <label className="font-bold">Plate Number</label>
              <input
                type="text"
                className="plate_number border-b-2 ml-3 p-2 focus:outline-0"
                value={plate_no}
                onChange={(e) => setPlate(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-between items-center mb-2">
              <label className="font-bold">Vehicle</label>
              <input
                type="text"
                className="vehicle border-b-2 ml-3 p-2 focus:outline-0"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-between items-center mb-2">
              <label className="font-bold">Fuel Type</label>
              <select
                className="w-50 p-2 focus:outline-0"
                id="fuel_type"
                value={fuel_type}
                onChange={(e) => setFuelType(e.target.value)}
                required
              >
                <option value="">Select Fuel Type</option>
                <option value="Regular">Regular</option>
                <option value="Diesel">Diesel</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-green-600 p-2 rounded text-white w-full"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Fuel_Request;
