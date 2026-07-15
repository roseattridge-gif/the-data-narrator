# The Data Narrator Landing Page

Static landing page for Rose Attridge's upcoming book, **The Data Narrator**.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In the repository settings, enable GitHub Pages with **GitHub Actions** as the source.
4. Push to the `main` branch.

The included workflow at `.github/workflows/pages.yml` will deploy the site.

## Update the email destination

The form currently opens an email draft to a placeholder address:

```text
CHANGE-ME@example.com
```

Change that address in `script.js` if you want the launch-list requests to go somewhere else.
