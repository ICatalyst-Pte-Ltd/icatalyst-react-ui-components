import { RefObject } from 'react';
declare const useMouse: (ref: RefObject<HTMLBaseElement>, options?: {
    debounce: number;
}) => Readonly<{
    x: 0;
    y: 0;
    screenX: 0;
    screenY: 0;
    pageX: 0;
    pageY: 0;
    offsetX: 0;
    offsetY: 0;
    clientX: 0;
    clientY: 0;
}>;
export default useMouse;
