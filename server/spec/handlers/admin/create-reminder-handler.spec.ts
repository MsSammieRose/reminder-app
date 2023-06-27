import ReminderDAO from "../../../src/db/reminder-dao";
import CreateReminderHandler from "../../../src/handlers/admin/create-reminder-handler";
import uuid from 'uuid';
import { CreateReminderRequest } from "../../../src/shared/api/admin/create-reminder";

jest.mock('uuid', () => ({ v4: jest.fn(), }));

describe('the create reminder handler', () => {
    let reminderDao: ReminderDAO;
    let handler: CreateReminderHandler;

    beforeEach(() => {
        reminderDao = {} as ReminderDAO;
        handler = new CreateReminderHandler(reminderDao);
    });

    test('will insert reminders in DB', async () => {
        reminderDao.insert = jest.fn().mockImplementationOnce(() => Promise.resolve());
        (uuid.v4 as any).mockImplementation(() => 1234);

        const request: CreateReminderRequest = {
            category: 'zee category',
            displayName: 'zee display name',
            lastReminded: null,
            scheduling: {
                type: 'daily',
                interval: 3,
            },
        };

        const response = await handler.handle(request);

        expect(response).toEqual({
            "id": 1234,
            ...request,
        });

        expect(reminderDao.insert).toHaveBeenCalledWith({
            id: 1234,
            ...request,
        });
    });

    test('will explode if displayName is missing', async () => {
        expect(handler.handle({
            category: 'zee category',
            lastReminded: null,
            scheduling: {
                type: 'daily',
                interval: 3,
            },
        } as CreateReminderRequest)).rejects.toThrow();
    });

    test('will explode if scheduling is missing', async () => {
        expect(handler.handle({
            displayName: 'foo',
            category: 'zee category',
            lastReminded: null,
        } as CreateReminderRequest)).rejects.toThrow();
    });
});

export {}
