import { CreateReminderRequest } from './shared/api/admin/create-reminder';
import { ListRemindersReponse } from './shared/api/admin/list-reminders';
import { UpdateReminderRequest } from './shared/api/admin/update-reminder';
import { Reminder } from './shared/model/reminder';
import express from 'express';

const PORT = process.env.PORT || 8888;

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

const app = express();
app.use(express.json());

app.get('/api/v1/admin/reminder/list', (req, res) => {
    const response: ListRemindersReponse = {
        reminders: [testReminder],
    };

    res.json(response);
});

app.post('/api/v1/admin/reminder/create', (req, res) => {
    const request: CreateReminderRequest = req.body;
    res.status(500).json({});
});

app.patch('/api/v1/admin/reminder/{:id}', (req, res) => {
    const request: UpdateReminderRequest = req.body;
    res.status(500).json({});
});

app.delete('/api/v1/admin/reminder/{:id}', (req, res) => {
    res.status(500).json({});
});

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
