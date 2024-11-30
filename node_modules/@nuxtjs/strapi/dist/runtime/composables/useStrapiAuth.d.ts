import type { Ref } from 'vue';
import type { StrapiAuthenticationData, StrapiAuthenticationResponse, StrapiAuthProvider, StrapiEmailConfirmationData, StrapiForgotPasswordData, StrapiRegistrationData, StrapiResetPasswordData, StrapiChangePasswordData, StrapiUser } from '../types/index.js';
export declare const useStrapiAuth: () => {
    setToken: (value: string | null) => void;
    setUser: (value: StrapiUser) => void;
    fetchUser: () => Promise<Ref<StrapiUser>>;
    login: (data: StrapiAuthenticationData) => Promise<StrapiAuthenticationResponse>;
    logout: () => void;
    register: (data: StrapiRegistrationData) => Promise<StrapiAuthenticationResponse>;
    forgotPassword: (data: StrapiForgotPasswordData) => Promise<void>;
    resetPassword: (data: StrapiResetPasswordData) => Promise<StrapiAuthenticationResponse>;
    changePassword: (data: StrapiChangePasswordData) => Promise<void>;
    sendEmailConfirmation: (data: StrapiEmailConfirmationData) => Promise<void>;
    getProviderAuthenticationUrl: (provider: StrapiAuthProvider) => string;
    authenticateProvider: (provider: StrapiAuthProvider, access_token: string) => Promise<StrapiAuthenticationResponse>;
};
