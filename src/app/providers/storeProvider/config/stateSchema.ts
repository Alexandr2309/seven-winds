import { AxiosInstance } from 'axios';

export interface StateSchema {

}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<Reject> {
    rejectValue: Reject;
    extra: ThunkExtraArg;
    state: StateSchema;
}

// export type DefaultThunkConfig = ThunkConfig<AsyncThunkErrorPayload | undefined>;
