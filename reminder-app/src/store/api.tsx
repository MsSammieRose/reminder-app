import { useReducer, useEffect } from "react";

const listAPI = "http://localhost:8888/api/v1/admin/reminder/list";

interface Reminder {
  id: string;
  displayName: string;
  scheduling: string;
  category: string | null;
  lastReminded: number | null;
}

function fetchReminderList(): {
  reminder: Reminder[];
} {
  type ReminderState = { reminder: Reminder[] };
  type ReminderAction = { type: "setReminder"; payload: Reminder[] };

  const [{ reminder }, dispatch] = useReducer(
    (state: ReminderState, action: ReminderAction) => {
      switch (action.type) {
        case "setReminder":
          return { ...state, reminder: action.payload };
      }
    },
    {
      reminder: [],
    }
  );

  useEffect(() => {
    fetch(listAPI)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "setReminder",
          payload: data,
        })
      );
  }, []);

  return { reminder: reminder };
}
