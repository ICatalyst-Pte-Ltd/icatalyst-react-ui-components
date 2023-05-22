import { I18NArguments } from '@icatalyst/js-core';
import { EntityField, Model } from '../../../utilities';
/**
 * Creates a Date Range constraint that ensures that
 * the start date is before the end date
 * @param  {[type]}  startFieldID                                 The id of the start field in the model
 * @param  {Boolean} [requireStart=false]                         True to state that a value is required for the start field
 * @param  {[type]}  endFieldID                                   The id of the end field in the model
 * @param  {[type]}  [requireEnd=false]                           True to state that a value is required for the end field
 * @return {[type]}                                               A string containing an error, or null if there are no errors
 */
export declare const createDateRangeConstraint: ({ startFieldID, requireStart, endFieldID, requireEnd, }: {
    startFieldID: string;
    requireStart?: boolean | undefined;
    endFieldID: string;
    requireEnd?: boolean | undefined;
}) => (data: any, field: EntityField, value: any, definition: Model) => I18NArguments | null;
