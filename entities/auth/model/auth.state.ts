import { createJSONStorage, atomWithStorage } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthResponse, LoginRequest } from './auth.interfaces';
import axios, { AxiosError } from 'axios';
import { API } from '../api/api';
import { atom } from 'jotai';

export interface AuthState {
	access_token: string | null;
	isLoading: boolean;
	error: string | null;
}

export const INITIAL_STATE = {
	access_token: null,
	isLoading: false,
	error: null,
};

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

export const authAtom = atomWithStorage<AuthState>('auth', INITIAL_STATE, storage);

export const loginAtom = atom(
	(get) => get(authAtom),
	async (_get, set, { email, password }: LoginRequest) => {
		set(authAtom, {
			isLoading: true,
			access_token: null,
			error: null,
		});
		try {
			await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));
			const { data } = await axios.post<AuthResponse>(API.login, {
				email,
				password,
			});
			set(authAtom, {
				isLoading: false,
				access_token: data.accessToken,
				error: null,
			});
		} catch (error) {
			if (error instanceof AxiosError) {
				set(authAtom, {
					isLoading: false,
					access_token: null,
					error: error.response?.data?.message,
				});
			}
		}
	},
);

export const logoutAtom = atom(null, (_get, set) => {
	set(authAtom, INITIAL_STATE);
});
