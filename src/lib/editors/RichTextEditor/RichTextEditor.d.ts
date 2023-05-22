import { InputBaseComponentProps } from '@mui/material';
export interface BaseRichTextEditorProps extends Omit<InputBaseComponentProps, 'onChange'> {
    /**
     * Allow multiline editing, false to disable multiline
     */
    multiline?: boolean;
    /**
     * Configuration for the Editor
     */
    /**
     * Number of rows for multiline editing
     */
    rows?: number;
    onChange?: (e: Event, value: InputBaseComponentProps['value']) => void;
}
export type RichTextEditorProps = RichTextEditorClassicProps;
export interface RichTextEditorClassicProps extends BaseRichTextEditorProps {
    variant?: 'classic';
}
export interface RichTextEditorBallonProps extends BaseRichTextEditorProps {
    variant: 'balloon';
}
export interface RichTextEditorBallonBlockProps extends BaseRichTextEditorProps {
    variant: 'balloonBlock';
}
export interface RichTextEditorDecoupledProps extends BaseRichTextEditorProps {
    variant: 'decoupled';
}
export interface RichTextEditorInlineProps extends BaseRichTextEditorProps {
    variant: 'inline';
}
export declare const RichTextEditor: () => import("@emotion/react/jsx-runtime").JSX.Element;
export default RichTextEditor;
