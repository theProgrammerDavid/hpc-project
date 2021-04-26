export interface SlaveExecute {
    fn: string;
    args: any[];
}
export interface SlaveResponse {
    result: any;
    time: number;
    error?: any
};

export interface SlaveRegiser {
    id: string;
}
