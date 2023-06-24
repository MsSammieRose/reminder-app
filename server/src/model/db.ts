export interface DbReminder {
    readonly id: string;
    readonly display_name: string;
    readonly category: string | null;
    readonly last_reminded: number | null;
    readonly scheduling_type: 'daily';
    readonly scheduling_interval: number;
}
