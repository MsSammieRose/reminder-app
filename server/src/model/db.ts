export interface DbReminder {
    readonly id: string;
    readonly displayName: string;
    readonly category: string | null;
    readonly last_reminded: number | null;
    readonly scheduling_type: 'daily';
    readonly scheduling_interval: number;
}
