import {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  Canceler,
} from 'axios';

export type { Canceler };

type TAxiosMethods = Pick<
  AxiosInstance,
  'get' | 'put' | 'patch' | 'post' | 'delete'
>;
export type TWithAbortFn = TAxiosMethods[keyof TAxiosMethods];

export type TApiExecutor<T> = {
  (url: string, body: unknown, config: TApiRequestConfig): AxiosPromise<T>;
  (url: string, config: TApiRequestConfig): AxiosPromise<T>;
};
export type TApiExecutorArgs =
  | [string, unknown, TApiRequestConfig]
  | [string, TApiRequestConfig];

export type TApiRequestConfig = AxiosRequestConfig & {
  abort?: (cancel: Canceler) => void;
};

export type TApiError = AxiosError;
