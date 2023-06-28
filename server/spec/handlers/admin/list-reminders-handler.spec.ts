import ReminderDAO from "../../../src/db/reminder-dao";
import ListRemindersHandler from "../../../src/handlers/admin/list-reminders-handler";
import { Reminder } from "../../../src/shared/model/reminder";

describe('the list reminders handler', () => {
    let reminderDao: ReminderDAO;
    let handler: ListRemindersHandler;

    beforeEach(() => {
        reminderDao = {} as ReminderDAO;
        handler = new ListRemindersHandler(reminderDao);
    });

    test('returns the list from DB', async () => {
        const testReminder: Reminder = {
            id: "zee id",
            displayName: "zee disp",
            category: null,
            lastReminded: null,
            scheduling: {
                type: 'daily',
                interval: 3,
            },
        };
        reminderDao.list = jest.fn().mockImplementationOnce(() => ([
            testReminder,
            testReminder,
            testReminder,
        ]));

        const response = await handler.handle();

        expect(response).toEqual({
            reminders: [testReminder, testReminder, testReminder],
        });

        expect(reminderDao.list).toHaveBeenCalled();
    });
});
