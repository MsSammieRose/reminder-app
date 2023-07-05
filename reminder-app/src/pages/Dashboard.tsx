import { useEffect } from "react";
import TaskRow from "../components/TaskRow.tsx";
import getReminderList from "../store/api.ts";

function Dashboard() {
  useEffect(() => {
    getReminderList();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <div className="container">
        <TaskRow />
      </div>
    </>
  );
}

export default Dashboard;
