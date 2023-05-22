import { Component, ErrorInfo } from 'react';
import { ContainerComponent } from '../../types';
export interface ErrorBoundaryProps extends ContainerComponent<'div', never> {
    title?: string;
}
interface ErrorBoundaryState {
    errors: Error[];
    title: string;
    buttonText: string;
}
export declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): {
        errors: {
            message: string;
        }[];
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | boolean | import("react").ReactFragment | import("@emotion/react/jsx-runtime").JSX.Element | null | undefined;
}
export default ErrorBoundary;
