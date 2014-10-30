# Viking.Alert extension

## Usage
Follow [viking installation](https://github.com/malomalo/viking) instructions
Include [viking dialog](https://github.com/jono/viking-dialog) as a dependency

Include these files in your HTML or precompile process:
- `dist/css/viking.alert.css`
- `dist/js/viking.alert.js`

*Note: `viking.alert.js` must be included after `viking.js`, `viking.dialog.js`, and their dependencies*

## Examples

**Basic Alert**
```
new Viking.Alert({
    title : 'Hey, Viking.Alerts sweet!'
})
.show();
```

**Confirm with callbacks**
```
new Viking.Alert({
    title : 'Are Viking.Alerts are sweet?',
    confirmation : true,
    positiveButtonText : 'Totally',
    negativeButtonText : 'Meh'
})
.okayed(function() {
    console.log('okay!');
})
.canceled(function() {
    console.log('nope!');
})
.show();
```
