import { I18NStrategy } from '@icatalyst/js-core';
import { ReactNode } from 'react';
export declare const LocalizationContext: import("react").Context<I18NStrategy>;
export type LocalizationProviderProps = {
    localizationStrategy?: I18NStrategy;
    children: ReactNode;
};
export declare function LocalizationProvider({ children, localizationStrategy, }: LocalizationProviderProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default LocalizationProvider;
