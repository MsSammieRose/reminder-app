import { Reminder } from "../../model/reminder";
import { AnyScheduling } from "../../model/scheduling";

export interface CreateReminderRequest {
    displayName: string;
    scheduling: AnyScheduling;
    category: string | null;
    lastReminded: number | null;
}

export type CreateReminderResponse = Reminder;
