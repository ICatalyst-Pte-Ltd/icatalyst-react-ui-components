import { JSXElementConstructor } from 'react';
import { LayoutContainerProps, ModuleConfig, ModuleConfigFunction } from '../modules';
export type RepositoryModuleProps<LayoutComponentProps extends LayoutContainerProps, LayoutComponent extends JSXElementConstructor<LayoutComponentProps> = JSXElementConstructor<LayoutComponentProps>, Repository extends string = string, Definition extends string = string> = ModuleConfig<undefined, LayoutComponentProps, LayoutComponent> & {
    name: Repository;
    definition: Definition;
};
export declare function createModuleFromRepository<LayoutComponentProps extends LayoutContainerProps, LayoutComponent extends JSXElementConstructor<LayoutComponentProps> = JSXElementConstructor<LayoutComponentProps>, Repository extends string = string, Definition extends string = string>(repositoryName: Repository, repositoryDefinition: Definition, layout: LayoutComponent, layoutComponentProps?: LayoutComponentProps, overrides?: Partial<RepositoryModuleProps<LayoutComponentProps, LayoutComponent, Repository, Definition>>): ModuleConfigFunction<undefined, LayoutComponentProps, LayoutComponent>;
