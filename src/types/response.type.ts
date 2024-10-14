export interface SuccessResponse<T> {
    status: number;
    message: string;
    data?: T;
}

export interface ErrorResponse {
    status: number;
    message: string;
}
