# Viking.Alert extension

## Usage
Follow [viking installation](https://github.com/malomalo/viking) instructions
Include [viking dialog](https://github.com/jono/viking-dialog) as a dependency

Include these files in your HTML or precompile process:
- `viking.alert.css`
- `viking.alert.js`

*Note: `viking.alert.js` must be included after `viking.js`, `viking.dialog.js`, and their dependencies*

## Examples

**Basic Alert**
```
new Viking.Alert({
    title : 'Hey, Viking.Alerts sweet!'
})
.show();
```

**Confirm**
```
Update!
```
