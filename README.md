This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

创建 Nextjs应用
```
npx create-next-app@latest --typescript my-github-pages
```

本地运行
```
cd my-github-pages
```
run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

本地预览[http://localhost:3000](http://localhost:3000)
开始编辑 `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

代码推送
```
rm -rf .git/
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin git@github.com:zhangdistudio/zhangdistudio.github.io.git
git push -u origin main
```

构建Web应用需要考虑的事情
- User Interface - how users will consume and interact with your application.
- Routing - how users navigate between different parts of your application.
- Data Fetching - where your data lives and how to get it.
- Rendering - when and where you render static or dynamic content.
- Integrations - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
- Infrastructure - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
- Performance - how to optimize your application for end-users.
- Scalability - how your application adapts as your team, data, and traffic grow.
- Developer Experience - your team’s experience building and maintaining your application.
## NextJs
Next.js是一个灵活的React框架，可以用来构建快速创造Web应用的区块。

### 什么是React
React是用来构建用户接口的Javascript库。
因其灵活性，所以有很繁荣的生态，但是也会导致开发者从零开始创建一个应用需要较多的努力。

### 什么是Next.js
Next.js是React的框架。

[From JavaScript to React](https://nextjs.org/learn/foundations/from-javascript-to-react)
