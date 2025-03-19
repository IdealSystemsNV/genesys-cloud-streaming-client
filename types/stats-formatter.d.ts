import { StatsEvent } from 'webrtc-stats-gatherer';
export declare function formatStatsEvent(event: StatsEvent, extraDetails?: any): {
    actionName: string;
    actionDate: number;
    details: any;
};
export declare function deepFlatten(obj: any, prefix?: string): any;
