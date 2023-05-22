import { PayloadAction } from '@reduxjs/toolkit';
import { LayoutDefinition } from '../../types';
export type SettingsStore = {
    /**
     * The override settings for each layout.
     */
    layoutSettings: Record<string, LayoutDefinition>;
    /**
     * The user overrides for the layout
     */
    userSettings: Record<string, unknown> & {
        layouts: Record<string, Partial<LayoutDefinition>>;
    };
    /**
     * The defaults and userSettings combined to be rendered
     */
    current: Record<string, unknown> & {
        layouts: Record<string, Partial<LayoutDefinition>>;
    };
};
declare const initialState: SettingsStore;
export type SettingsState = typeof initialState;
export declare const settings: import("@reduxjs/toolkit").Slice<SettingsStore, {
    /**
     * Updates the layout to the new layout state.  This also removes
     * and user overrides
     * @param state the current state
     * @param action the new layout configuration
     * @returns the new state
     */
    resetLayout<T extends LayoutDefinition<string>>(state: SettingsStore, action: {
        payload: T;
        type: string;
    }): void;
    /**
     * Updates the user settings and the current layout based on the updates provided
     * @param state the current state
     * @param action the updates to apply
     * @returns the new state
     */
    setLayoutUserSettings<T_1 extends LayoutDefinition<string>>(state: SettingsStore, action: {
        payload: (Partial<T_1> extends infer T_2 ? { [P in keyof T_2]: T_1[P]; } : never) & {
            name: T_1["name"];
        } & Record<string, any>;
        type: string;
    }): void;
    /**
     * Updates the default settings, this should be used if the underlying layout
     * changes but you want to keep the user applied changes to the new layout
     * @param state the current state
     * @param action the new default configuration
     * @returns the new state
     */
    setDefault<T_3 extends LayoutDefinition<string>>(state: SettingsStore, action: {
        payload: T_3;
        type: string;
    }): void;
}, "icatalyst/settings">;
export default settings;
export declare const reduxConfig: {};
