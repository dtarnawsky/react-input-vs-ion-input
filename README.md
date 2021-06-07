# Issue 22868

https://github.com/ionic-team/ionic-framework/issues/22868

Ion-Input is not binding value to the state. This repo shows the difference in behavior between a standard input control and ion-input.
See my-input.tsx and my-ion-input.tsx

The use case is to mask input by filtering/parsing the value of the control.

Expected behavior is that ion-input behaves similar to input control and updates based on what is "value" is set to.

## Steps to Repro
- `npm install`
- `ionic serve`
- Type in "12b" in the first control (which uses input)
- Type in "12b" in the second control (which uses ion-input)
- Notice that the input control correctly sets the value to filter out unexpected characters
- Notice that the ion-input control, whilst using the same code, does not set the value