import { Reminder } from './shared/model/reminder';

const testReminder: Reminder = {
    id: 'id123',
    displayName: 'Eat breakfast',
    scheduling: {
        type: 'daily',
        interval: 1,
    },
    category: 'food',
    lastReminded: null,
};

console.log('Im a server!', testReminder);
