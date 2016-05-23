---
title: Search | Accessibility Guidelines
---

## Search Bar

On many websites, search bars or search inputs serve as a way to find results for something on a very large or complex site. They are often used in lieu of extensive navigation as the user attempts to find a quick answer to a very specific query.

Search bars can be a way for users of AT to quickly find answers without tabbing through the navigation or reading all the content of a web page. Making a skip link to your site's search bar may even be advisable if that is a way you can simplify the experience of accessible users.

### Best Practices

* Refer back to the forms and form validation section to get the best practices for forms, labels, and inputs.
* A search bar should be set up in a form as paired label and input.
* Using a submit button to search decreases the number of keystrokes necessary to use the form.
* Always include an ARIA `role='search'` somewhere on the form/fieldset.
* Also, always include the word 'search' in the label somewhere (you can visually hide it, though) and also in the submit button.
* For the search input, you could technically use the `type='search'`, but the following accessible websites use `type='text'` instead:
  - Perkins School for the Blind
  - Freedom Scientific
  - Simply Accessible

```html
<form role='search' action="/" method="get">
  <label for='header-search'>
    <span class='visually-hidden'>Search</span>
  </label>

  <input type='text' id='header-search'/>

  <button type='submit'>
    <span class='visually-hidden'>Submit Search</span>
  </button>
</form>
```

### Tools &amp; Resources

* [https://standards.usa.gov/search-bar/](https://standards.usa.gov/search-bar/)
* [http://simplyaccessible.com/](http://simplyaccessible.com/)
* [http://www.perkins.org/](http://www.perkins.org/)
* [http://www.freedomscientific.com/](http://www.freedomscientific.com/)
