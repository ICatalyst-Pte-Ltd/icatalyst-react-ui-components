import { I18NArguments } from '@icatalyst/js-core';
import { EntityField } from '../../../utilities';
/**
 * Validation function used for models.
 * Checks that the value is a valid name and is at least 4 or more characters
 * @param  {Object}  model The full object being validated
 * @param  {Object}  field The description of the field being validated
 * @param  {Object}  value The value that is being validated
 * @return {String}       The validation error, or null if the value was okay
 */
export declare function createNameConstraint(): (data: any, field: EntityField, value: any) => I18NArguments | null;
