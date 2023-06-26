import { Connection } from "mysql";
import { RequestHandler } from "../request-handler";
import { CreateReminderRequest, CreateReminderResponse } from "../../shared/api/admin/create-reminder";
import { Reminder } from "../../shared/model/reminder";
import uuid from 'uuid';
import { modelToDb } from "../../model/conversions";

export default class CreateReminderHandler implements RequestHandler<CreateReminderRequest, CreateReminderRequest> {

    constructor(private readonly connection: Connection) {

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

        await new Promise<void>((resolve, reject) => {
            this.connection.query('INSERT INTO reminders SET ?', modelToDb(reminder), (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });

        return reminder;
    }
}
