# Display Options

By default when using the embeddable products, the BAV application scaffolding is hidden. This means the top header bar
and the left sidebar navigation.

## Hiding the step bar

If you want to provide the product with all the required filters and not allow the user to change them you can hide the
step navigation UI that would allow the user to change the parameters.

Provide the `showStepsUi` query parameter in the iframe request and set it to `false`.

```html

<iframe src="https://fount.wppbav.com/embed/turbopitch/brand360?access_token=...&showStepsUi=false"></iframe> 
```