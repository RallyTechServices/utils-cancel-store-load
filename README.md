# @agile-central-technical-services/utils-cancel-store-load

Overrides to allow canceling the load of the remaining pages of a store.

## Installation
1. Install using npm (or yarn) `npm install '@agile-central-technical-services/utils-cancel-store-load' -D`
2. Add the file to the `javascript` section of `config.json`
    ```
     "javascript": [
        "node_modules/@agile-central-technical-services/utils-cancel-store-load/index.js",
        ...
    ```

## Example usage
```
_update: function() {
        this.setLoading(true);
        // If there is a current chart store, force it to stop loading pages
        // Note that recreating the grid will then create a new chart store with
        // the same store ID.
        var storyStore = Ext.getStore('storyStore');
        if (storyStore) {
            storyStore.cancelLoad();
        }
```


## Developer Notes
To Update
1. `npm version patch` - This will update the package.json to a new version and create a git tag (e.g. `v1.0.1`). It will also run the `postversion` script
to push the changes and tag to GitHub.
2. `npm publish --access public` - This will publish the new version to npmjs.org
3. Create the new release in [`utils-cancel-store-load/releases'](https://github.com/RallyTechServices/utils-cancel-store-load/releases)