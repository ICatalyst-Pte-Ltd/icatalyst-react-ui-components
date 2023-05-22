type ScriptStatus = 'loading' | 'idle' | 'ready' | 'error';
declare function useScript(src: string): ScriptStatus;
export default useScript;
