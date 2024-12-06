declare interface ApiResponse<T={}>{
    error: boolean,
    status: number,
    result: T,
    message: string
}