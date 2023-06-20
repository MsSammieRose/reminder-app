import { AnyScheduling } from "./scheduling";

export interface Reminder {
    id: string;
    displayName: string;
    scheduling: AnyScheduling;
    category: string | null;
    lastReminded: number | null;
}
