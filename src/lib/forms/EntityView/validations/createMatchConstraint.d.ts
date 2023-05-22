import { I18NArguments } from '@icatalyst/js-core';
import { EntityField, Model } from '../../../utilities';
export declare const createMatchConstraint: ({ matchFieldID, }: {
    matchFieldID: string;
}) => (data: any, field: EntityField, value: any, definition: Model) => I18NArguments | null;
