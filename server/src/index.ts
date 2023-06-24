import CreateReminderHandler from './handlers/admin/create-reminder-handler';
import ListRemindersHandler from './handlers/admin/list-reminders-handler';
import { useHandler } from './handlers/request-handler';
import { UpdateReminderRequest } from './shared/api/admin/update-reminder';
import express from 'express';
import mysql from 'mysql';

const {
    MYSQL_HOST,
    MYSQL_USER, 
    MYSQL_PASSWORD, 
    MYSQL_DB,
    PORT,
} = process.env;

const connection = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DB,
});

connection.connect((err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Connected to MySQL');
});

const app = express();
app.use(express.json());

app.get('/api/v1/admin/reminder/list', (req, res) => useHandler(new ListRemindersHandler(connection), req, res));
app.post('/api/v1/admin/reminder/create', (req, res) => useHandler(new CreateReminderHandler(connection), req, res));

app.patch('/api/v1/admin/reminder/{:id}', (req, res) => {
    const request: UpdateReminderRequest = req.body;
    res.status(500).json({});
});

app.delete('/api/v1/admin/reminder/{:id}', (req, res) => {
    res.status(500).json({});
});

app.listen(parseInt(PORT!), () => {
    console.log(`Server running on PORT ${PORT}`);
});
