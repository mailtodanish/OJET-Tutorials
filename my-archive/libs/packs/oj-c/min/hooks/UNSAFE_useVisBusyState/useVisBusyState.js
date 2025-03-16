define(["require", "exports", "preact/hooks", "ojs/ojcontext"], function (require, exports, hooks_1, Context) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useVisBusyState = void 0;
    function useVisBusyState(rootRef, baseDescription) {
        const addBusyState = (0, hooks_1.useCallback)(() => {
            if (rootRef.current) {
                const busyContext = Context.getContext(rootRef.current).getBusyContext();
                return busyContext.addBusyState({ description: baseDescription });
            }
            return () => { };
        }, [baseDescription, rootRef]);
        return addBusyState;
    }
    exports.useVisBusyState = useVisBusyState;
});
