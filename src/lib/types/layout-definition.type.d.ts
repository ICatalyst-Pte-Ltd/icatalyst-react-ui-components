export type LayoutDefinition<NAME extends string = string> = {
    name: NAME;
    theme: {
        [key: string]: string;
    };
};
