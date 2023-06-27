import { RequestHandler } from "../request-handler";
import { CreateReminderRequest, CreateReminderResponse } from "../../shared/api/admin/create-reminder";
import { Reminder } from "../../shared/model/reminder";
import uuid from 'uuid';
import ReminderDAO from "../../db/reminder-dao";

export default class CreateReminderHandler implements RequestHandler<CreateReminderRequest, CreateReminderRequest> {

    constructor(private readonly reminderDao: ReminderDAO) {

    }

    async handle(request: CreateReminderRequest): Promise<CreateReminderResponse> {
        const { 
            displayName, 
            scheduling, 
            category, 
            lastReminded,
        } = request;

        if (!displayName) {
            throw new Error('Missing displayName param');
        }

        if (!scheduling) {
            throw new Error('Missing scheduling param');
        }

        const reminder: Reminder = {
            id: uuid.v4(),
            displayName,
            scheduling,
            category,
            lastReminded,
        };

        await this.reminderDao.insert(reminder);

        return reminder;
    }
}
