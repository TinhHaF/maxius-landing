# maxius-landing
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Cấu trúc thư mục

maxius-landing/
├── public/ # Hình ảnh, favicon, logo
├── src/
│ ├── app/
│ │ └── page.tsx # Trang chính, dùng các components
│ ├── components/ # Hero.tsx, Features.tsx, About.tsx, Contact.tsx, Footer.tsx, Navbar.tsx
│ └── styles/ # globals.css
├── tailwind.config.ts # Cấu hình Tailwind
├── postcss.config.js # Cấu hình PostCSS
├── tsconfig.json # TypeScript config (có @ alias)
├── README.md # Hướng dẫn tổng quan
└── package.json # Dependencies

## Cài đặt và chạy local

```bash
# B1: Clone
git clone https://github.com/TinhHaF/maxius-landing.git
cd maxius-landing

# B2: Cài đặt package
npm install

# B3: Chạy dev
npm run dev

```

## Demo online 
🔗 https://maxius-landing.vercel.app