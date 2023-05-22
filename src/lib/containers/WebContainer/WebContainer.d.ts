import { ContainerProps } from '../Container';
export type IFrameSandboxProps = 'allow-downloads' | 'allow-forms' | 'allow-modals' | 'allow-orientation-lock' | 'allow-pointer-lock' | 'allow-popups' | 'allow-popups-to-escape-sandbox' | 'allow-presentation' | 'allow-same-origin' | 'allow-scripts' | 'allow-storage-access-by-user-activation' | 'allow-top-navigation' | 'allow-top-navigation-by-user-activation';
export interface WebContainerProps extends Omit<ContainerProps, 'children'> {
    title: string;
    src: string;
    sandbox?: IFrameSandboxProps[];
}
export declare function WebContainer({ className, style, id, src, title, sandbox, classes: classesProp, }: WebContainerProps): import("@emotion/react/jsx-runtime").JSX.Element;
export default WebContainer;
