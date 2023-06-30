import axios from "axios";
// import useState from "react";

const listAPI = "http://localhost:8888/api/v1/admin/reminder/list";

const getReminderList = async () => {
  //   const [reminders, setReminders] = useState([]);
  const response = await axios.get(listAPI);
  try {
    // setReminders(response.data);
  } catch (error) {
    console.log(error);
  }
  console.log(response.data);
};

export default getReminderList;
