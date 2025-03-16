import type { DataTabBarProps } from './DataTabBar.types';
import { FocusableHandle } from '@oracle/oraclejet-preact/UNSAFE_TabBarMixed';
import { RefObject } from 'preact';
export declare function TabBarRenderer<K extends string | number>(props: Omit<DataTabBarProps<K>, 'overflow' | 'onSelect'>, handleSelect: DataTabBarProps<K>['onSelect'], ref?: RefObject<FocusableHandle>): import("preact").JSX.Element;
export declare function OverflowTabBarRenderer<K extends string | number>(props: Omit<DataTabBarProps<K>, 'reorderable' | 'onReorder' | 'onSelect' | 'overflow'>, handleSelect: DataTabBarProps<K>['onSelect']): import("preact").JSX.Element;
