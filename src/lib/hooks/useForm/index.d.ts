import { I18NArguments } from '@icatalyst/js-core';
import { FormEvent, SyntheticEvent } from 'react';
declare function useForm<T>(initialState: T, validate?: (data: T, field?: keyof T | (keyof T)[], errors?: Partial<Record<keyof T, I18NArguments[]>>) => Record<keyof T, I18NArguments[] | undefined>, onSubmit?: (form: T) => void): {
    form: T;
    handleChange: (event: SyntheticEvent | undefined | null, newValue?: Partial<T>) => void;
    handleSubmit: (event: FormEvent, afterSubmit?: ((event: FormEvent, callback?: () => void, data?: any) => void) | undefined, callback?: () => void) => void;
    resetForm: () => void;
    setForm: import("react").Dispatch<import("react").SetStateAction<T>>;
    setInForm: (name: keyof T, value: any) => void;
    modified: boolean;
    errors: Partial<Record<keyof T, I18NArguments[]>>;
    validate: ((data: T, field?: keyof T | (keyof T)[], errors?: Partial<Record<keyof T, I18NArguments[]>>) => Record<keyof T, I18NArguments[] | undefined>) | undefined;
    isValid: (fields?: keyof T | (keyof T)[]) => boolean;
};
export default useForm;
