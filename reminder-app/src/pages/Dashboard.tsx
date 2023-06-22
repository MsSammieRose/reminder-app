import TaskRow from "../components/TaskRow.tsx";

function Dashboard() {
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
