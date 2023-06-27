import { Connection } from "mysql";
import { Reminder } from "../shared/model/reminder";
import { DbReminder } from "../model/db";
import { dbToModel, modelToDb } from "../model/conversions";

export default class ReminderDAO {
    constructor(private readonly connection: Connection) {

    }

    async list(): Promise<Reminder[]> {
        const results: DbReminder[] = await new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM reminders', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        return results.map(dbToModel);
    }

    insert(reminder: Reminder): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.connection.query('INSERT INTO reminders SET ?', modelToDb(reminder), (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            });
        });
    }
}
