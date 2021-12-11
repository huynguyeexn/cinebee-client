import { IBase, MovieTickets, Showtime } from '.';

export interface Order extends IBase {
    total: number;
    booking_at: string;
    employee_id?: number;
    customer_id: number;
    status: number;
    timeout: string;
    showtime_id: number;
    movieTickets: MovieTickets[];
    payments: any[];
    showtime: Showtime;
    verify_code: string;
}