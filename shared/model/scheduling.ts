export interface DailyScheduling {
    type: 'daily';
    interval: number;
}

export type AnyScheduling = DailyScheduling;
