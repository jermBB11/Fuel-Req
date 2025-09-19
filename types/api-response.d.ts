export type LaravelErrorResponse = {
  message: string;
  errors: {
    [field: string]: string[];
  };
};

export type ApiResponse<T = unknown> = {
  message: string;
  status: number;
  data?: T;
  error?: LaravelErrorResponse;
};
