# Bookmark
Clone of https://www.instapaper.com/

## Browser extension: Chrome
- authorize user
    - unauthorized user redirected to /login?r=redirectUrl
        - authorize user -> go to redirectUrl
        - create new user -> (waits for email confirmation: optional) -> go to redirectUrl
- save link: /save?l=link

## Sitemap
Pages:
- / - Home page with links
- /sign-in - Sign In(Form: email(input), password(input), keep me logged in(checkbox), forgot password?(link), Sign In(btn))
- /reset-password - Forgot password(Form: email(input), Email me a password-reset link(btn))
- /sign-up - Create An Account(Form: email(input), password(input), I'am not a robot(google reCAPTCHA), keep me logged in(checkbox), Create Account(btn))
API:
- links:
    - POST: /api/links - save link
    - GET: /api/links - get links for authorized user with pagination, search query, hasGroup flag
    - DELETE: /api/links/:id - delete link
- folders:
    - POST: /api/folders - create folder
    - GET: /api/folders - get folders
    - DELETE: /api/folders/:id - delete folder(id): doesn't delete links
    - PUT: /api/folders/:id?linkId=linkId - add link(linkId) to folder(id)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
