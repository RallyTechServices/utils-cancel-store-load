/**
 * Overrides to allow a store load to the canceled which will abort loading
 * any subsequent pages and not invoke the load callback.
 */
Ext.override(Rally.data.PageableStore, {

    loadCanceled: false,

    cancelLoad: function() {
        this.loadCanceled = true;
    },

    load: function(options) {
        this.loadCanceled = false;
        this.callParent(arguments);
    },

    _shouldLoadMorePages: function(operation) {
        if (this.loadCanceled) {
            return false;
        }
        else {
            return this.callParent(arguments)
        }
    },

    _afterDoneLoadingAllPages: function(operation, success, callback, scope) {
        if (this.loadCanceled) {
            // Loading canceled. Don't send any events or invoke the callback
            this.resumeEvents();
            this.currentPage = 1;
            this.loading = false;
        }
        else {
            this.callParent(arguments);
        }
    }
});
