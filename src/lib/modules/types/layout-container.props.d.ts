import { ContainerComponent, LayoutDefinition } from '../../types';
export interface LayoutContainerProps<LayoutConfig extends LayoutDefinition = LayoutDefinition, Styles = any> extends ContainerComponent<'div', Styles> {
    layoutConfig: LayoutConfig;
}
