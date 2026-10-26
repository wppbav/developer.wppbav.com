# Display Options

By default, the embeddable products hide the BAV application scaffolding. The scaffolding is the top header bar and the
left sidebar navigation.

## Hiding the step bar

You can give the product all the required filters and not let the user change them. To do this, hide the step
navigation UI that lets the user change the parameters.

Add the `showStepsUi` query parameter to the iframe request and set it to `false`.

```html

<iframe src="https://fount.wppbav.com/embed/turbopitch/brand360?access_token=...&showStepsUi=false"></iframe> 
```