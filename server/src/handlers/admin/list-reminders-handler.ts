import { Connection } from "mysql";
import { ListRemindersResponse } from "../../shared/api/admin/list-reminders"
import { RequestHandler } from "../request-handler";
import { dbToModel } from "../../model/conversions";
import { DbReminder } from "../../model/db";

export default class ListRemindersHandler implements RequestHandler<{}, ListRemindersResponse> {

    constructor(private readonly connection: Connection) {

    }

    async handle(): Promise<ListRemindersResponse> {
        const results = await new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM reminders', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        return {
            reminders: (results as DbReminder[]).map(dbToModel),
        };
    }
}
