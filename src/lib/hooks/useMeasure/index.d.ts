export type Bounds = Pick<DOMRectReadOnly, 'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'>;
declare function useMeasure<T extends Element = Element>(): [
    (element: T) => void,
    Bounds
];
export default useMeasure;
