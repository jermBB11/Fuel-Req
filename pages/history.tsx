import React, { useEffect, useState } from "react";

export default function History() {
const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const count = localStorage.getItem("count");
    setData(count);
  }, []);

  return (
    <div>
      <h1>History</h1>
      <p>{data}</p>
    </div>
  );
}
