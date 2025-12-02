import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Employees() {
  const [list, setList] = useState([]);

  useEffect(() => {
    api.get("/employees").then(res => setList(res.data));
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      {list.map(e => (
        <p key={e._id}>{e.name} - {e.department}</p>
      ))}
    </div>
  );
}
