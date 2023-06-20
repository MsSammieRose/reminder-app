import { AnyScheduling } from "../../model/scheduling";

export interface UpdateReminderRequest {
    displayName?: string;
    scheduling?: AnyScheduling;
    category?: string | null;
    lastReminded?: number | null;
}
