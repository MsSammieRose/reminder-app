import { Reminder } from "../shared/model/reminder";
import { AnyScheduling } from "../shared/model/scheduling";
import { DbReminder } from "./db";

export function dbToModel(dbReminder: DbReminder): Reminder {
    let scheduling: AnyScheduling;
    switch (dbReminder.scheduling_type) {
    case 'daily':
        scheduling = {
            type: 'daily',
            interval: dbReminder.scheduling_interval,
        };
        break;
    }

    return {
        id: dbReminder.id,
        displayName: dbReminder.display_name,
        category: dbReminder.category,
        scheduling,
        lastReminded: dbReminder.last_reminded,
    };
}

export function modelToDb(reminder: Reminder): DbReminder {
    return {
        id: reminder.id,
        display_name: reminder.displayName,
        category: reminder.category,
        scheduling_type: reminder.scheduling.type,
        scheduling_interval: reminder.scheduling.interval,
        last_reminded: reminder.lastReminded,
    };
}
