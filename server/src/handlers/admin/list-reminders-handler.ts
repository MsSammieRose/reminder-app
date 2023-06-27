import { ListRemindersResponse } from "../../shared/api/admin/list-reminders"
import { RequestHandler } from "../request-handler";
import ReminderDAO from "../../db/reminder-dao";

export default class ListRemindersHandler implements RequestHandler<{}, ListRemindersResponse> {

    constructor(private readonly reminderDao: ReminderDAO) {

    }

    async handle(): Promise<ListRemindersResponse> {
        return {
            reminders: await this.reminderDao.list(),
        };
    }
}
