import { I18NArguments } from '@icatalyst/js-core';
declare function useLocalization(text: string): string;
declare function useLocalization(args: I18NArguments): string;
declare function useLocalization(args: string | I18NArguments | undefined): string;
export default useLocalization;
