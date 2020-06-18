# Cardy


## What is it?

A **Lightweight**, **Interactive** and **Simple** **React Component** that shows the buyer's card basic info as they are filling the checkout form.

**You can try the app :point_right: [here](http://google.com/)** :point_left:

## Why ?
The average **checkout abandonment** over the past ten years has fluctuated between **60 – 80%**. If you are within this range, you should be trying to decrease the rate of abandoned checkouts. A bad checkout abandonment is anything higher than 90%. Even if you fall within the average, you should be trying to optimize for lower abandoned payments.

As of this 60-80%, a whole **27% is due the checkout process**:
* Too complex form
* Form fields not clear enough

**Cardy** aims to retain the user in the checkout process by adding a non-disruptive interactive feedback to keep their attention and interest in the last step of the e-Commerce cicle.  


## Built with :heart: and

* React

## Created By
**[Gerardo Toledo](https://www.linkedin.com/in/gerardo-toledo/)**

## Disclaimer
This is **not** a Credit Card Form Validator. In order to do so, you should trust any competent validator entity, or apply the recommended Regular Expressions to achieve so:
```js
const masterCardRegExp = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/
const visaRegExp = /^4[0-9]{12}(?:[0-9]{3})?$/
const americanExpressRegExp = /^3[47][0-9]{13}$/
```

More information available at: 
* [Luhn's Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)
* [Credit Card Validation through Regular Expressions](https://www.regular-expressions.info/creditcard.html)