define(["require", "exports", "preact/hooks", "../utils/UNSAFE_keyUtils/keySetUtils", "../hooks/UNSAFE_useListData/useListData", "./useHandleRemoveCurrentKey", "ojs/ojlogger"], function (require, exports, hooks_1, keySetUtils_1, useListData_1, useHandleRemoveCurrentKey_1, Logger) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useListViewPreact = void 0;
    const useListViewPreact = ({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, data: propData, gridlines, onCurrentItemChanged, selectionMode, selected, scrollPolicyOptions, onSelectedChanged, onOjItemAction, onOjFirstSelectedItem, reorderable, onOjReorder }, addBusyState, isClickthroughDisabled) => {
        const currentPromiseRef = (0, hooks_1.useRef)();
        const resolveBusyState = (0, hooks_1.useRef)();
        const [listDataState, onLoadRange] = (0, useListData_1.useListData)(propData, {
            fetchSize: scrollPolicyOptions?.fetchSize
        });
        const listData = listDataState.status !== 'error' ? listDataState.data : null;
        const [currentItem, setCurrentItem] = (0, hooks_1.useState)();
        const firstSelectedItemRef = (0, hooks_1.useRef)();
        const numOfSelectedItems = !selected?.keys.all
            ? selected?.keys.keys?.size
            : listData?.data.length;
        let selectedKeys;
        if (listData &&
            listData.data.length > 0 &&
            selectionMode === 'singleRequired' &&
            numOfSelectedItems === 0) {
            selectedKeys = { all: false, keys: new Set([listData.data[0].metadata.key]) };
            onSelectedChanged && onSelectedChanged((0, keySetUtils_1.keysToKeySet)(selectedKeys));
        }
        else {
            selectedKeys = (0, keySetUtils_1.keySetToKeys)(selected);
        }
        (0, hooks_1.useEffect)(() => {
            if (listDataState.status === 'loading') {
                resolveBusyState.current = addBusyState('list data is in fetch state');
            }
            else {
                if (resolveBusyState.current) {
                    resolveBusyState.current();
                    resolveBusyState.current = undefined;
                }
            }
        }, [listDataState.status, addBusyState]);
        const handleOnCurrentItemChanged = (detail) => {
            setCurrentItem(detail.value);
            onCurrentItemChanged && onCurrentItemChanged(detail.value);
        };
        const handleOnOjFirstSelectedItem = (0, hooks_1.useCallback)((data) => {
            if (selected && onOjFirstSelectedItem && propData) {
                const selectedKeys = (0, keySetUtils_1.keySetToKeys)(selected);
                if (!(0, keySetUtils_1.isEmpty)(selectedKeys)) {
                    const firstSelectedKey = (0, keySetUtils_1.getFirstKey)(selectedKeys, data);
                    const firstSelectedItem = data.find((listItem) => firstSelectedKey === listItem.metadata.key);
                    if (firstSelectedItem) {
                        const data = firstSelectedItem.data;
                        if (firstSelectedItemRef.current === undefined ||
                            data !== firstSelectedItemRef.current.data) {
                            const detail = { key: firstSelectedKey, data };
                            firstSelectedItemRef.current = { ...detail };
                            onOjFirstSelectedItem(detail);
                        }
                    }
                    else {
                        const initialPromise = propData.fetchByKeys({
                            keys: new Set([firstSelectedKey])
                        });
                        currentPromiseRef.current = initialPromise;
                        initialPromise.then((value) => {
                            if (initialPromise === currentPromiseRef.current) {
                                const item = value.results.get(firstSelectedKey);
                                if (item === undefined) {
                                    Logger.warn(`Item with '${firstSelectedKey}' key couldn't be found `);
                                }
                                else {
                                    const detail = { key: firstSelectedKey, data: item.data };
                                    firstSelectedItemRef.current = { ...detail };
                                    onOjFirstSelectedItem(detail);
                                }
                            }
                        });
                    }
                }
            }
        }, [selected, onOjFirstSelectedItem, propData, listData]);
        (0, hooks_1.useEffect)(() => {
            if (selectionMode === 'singleRequired' && listData && listData.data.length > 0) {
                handleOnOjFirstSelectedItem(listData.data);
            }
        }, [selectionMode, listData, handleOnOjFirstSelectedItem]);
        const handleOnSelectionChanged = (detail) => {
            if (selectionMode !== 'singleRequired' || detail.value.keys?.size !== 0) {
                onSelectedChanged &&
                    !isClickthroughDisabled(detail.target) &&
                    onSelectedChanged((0, keySetUtils_1.keysToKeySet)(detail.value));
            }
        };
        (0, hooks_1.useEffect)(() => {
            const _listener = (event) => {
                if (onOjFirstSelectedItem && event.detail.update && firstSelectedItemRef.current) {
                    const detail = event.detail.update;
                    const index = Array.from(detail.keys).indexOf(firstSelectedItemRef.current.key);
                    if (index > -1 && detail.data && index < detail.data.length) {
                        const newData = detail.data[index];
                        if (firstSelectedItemRef.current.data !== newData) {
                            firstSelectedItemRef.current.data = newData;
                            const detail = { ...firstSelectedItemRef.current };
                            onOjFirstSelectedItem(detail);
                        }
                    }
                }
            };
            if (propData) {
                propData.addEventListener('mutate', _listener);
            }
            return () => {
                if (propData) {
                    propData.removeEventListener('mutate', _listener);
                }
            };
        }, [propData, onOjFirstSelectedItem]);
        const dataState = listDataState.status === 'error' ? null : listDataState.data;
        (0, useHandleRemoveCurrentKey_1.useHandleRemoveCurrentKey)(dataState, currentItem, handleOnCurrentItemChanged);
        const viewportConfig = scrollPolicyOptions?.scroller
            ? {
                scroller: () => {
                    if (scrollPolicyOptions.scroller) {
                        return document.querySelector(scrollPolicyOptions.scroller);
                    }
                    return null;
                }
            }
            : undefined;
        const suggestions = (0, hooks_1.useMemo)(() => getSuggestionsInfo(listDataState), [listDataState]);
        const getRowKey = (data) => {
            return data.metadata.key;
        };
        const onLoadMore = (0, hooks_1.useCallback)(() => {
            if (listData) {
                const fetchSize = scrollPolicyOptions && scrollPolicyOptions.fetchSize ? scrollPolicyOptions.fetchSize : 25;
                onLoadRange({ offset: 0, count: listData.data.length + fetchSize });
            }
        }, [scrollPolicyOptions, onLoadRange, listData]);
        return {
            status: listDataState.status,
            listViewProps: {
                'aria-label': ariaLabel,
                'aria-labelledby': ariaLabelledBy,
                data: listData ? listData.data : null,
                currentKey: currentItem,
                getRowKey,
                gridlines,
                onCurrentKeyChange: handleOnCurrentItemChanged,
                hasMore: listData ? listData.sizePrecision === 'atLeast' : false,
                onLoadMore,
                onSelectionChange: handleOnSelectionChanged,
                selectedKeys,
                selectionMode: selectionMode === 'singleRequired' ? 'single' : selectionMode,
                promotedSection: suggestions,
                onItemAction: (detail) => {
                    const item = detail.context.data;
                    const itemActionDetail = { context: { item, data: item.data } };
                    onOjItemAction &&
                        !isClickthroughDisabled(detail.target) &&
                        onOjItemAction(itemActionDetail);
                },
                onReorder: reorderable?.items === 'enabled'
                    ? (detail) => {
                        onOjReorder && onOjReorder(detail);
                    }
                    : null,
                viewportConfig
            }
        };
    };
    exports.useListViewPreact = useListViewPreact;
    function getSuggestionsInfo(listDataState) {
        if (listDataState.status !== 'success') {
            return { count: 0 };
        }
        const data = listDataState.data.data;
        let count = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].metadata.suggestion == null) {
                break;
            }
            count += 1;
        }
        return { count };
    }
});
