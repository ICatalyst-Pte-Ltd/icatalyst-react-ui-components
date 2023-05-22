import { I18NArguments } from '@icatalyst/js-core';
import { EntityField } from '../../../utilities';
/**
 * Creates a value length constraint that can be used with
 * models.
 * Checks that the value is between min and max characters in length.
 * If min is not provided, checks that the value is no more than max.
 * If max is not provided, checks that the value is greater than or equal to min.
 * @param  {[type]} min               [description]
 * @param  {[type]} max               [description]
 * @return {[type]}     [description]
 */
export declare const createLengthConstraint: (min?: number | null, max?: number | null) => (data: any, field: EntityField, value: any) => I18NArguments | null;
