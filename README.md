# Joshtalkassignment-Task Manager

An elegant Task Management App built with Next.js, designed to streamline your productivity. With features such as task creation, editing, and priority-based sorting, this app ensures that you stay on top of your tasks while providing a clean and responsive interface.

Features
Add a new task with a title, description, and priority (high, medium, low).
Edit existing tasks.
Mark tasks as completed or pending.
Delete tasks from the list.
Sort tasks dynamically by priority (high priority at the top).
Completed tasks are displayed at the bottom of the list.
Simple search bar to filter tasks by title or description.
Local storage to persist tasks between page reloads.
Technologies Used
React
Next.js
CSS
Getting Started

1.bash git clone [https://github.com/Bhumika2423/Joshtalkassignment](https://github.com/Bhumika2423/Joshtalkassignment).git cd task-manager Install Dependencies Make sure you have Node.js installed. Then run

2.bash npm install Run the Development Server Start the Next.js development server:

3.bash npm run dev Your app will be running on http://localhost:3000.

Open in Browser Navigate to the provided URL in your web browser to see your Task Management App in action.

Sorting Approach Tasks are sorted based on their priority using a simple sorting function. The priority levels are represented as strings (high, medium, low). We assign numerical values to these priorities:

High: 1 Medium: 2 Low: 3 When displaying tasks, we sort them by these assigned values, ensuring that high-priority tasks are always displayed at the top of the list. This approach not only enhances the user experience but also allows for easy modification or expansion of the priority levels in the future.
This is a Next.js project bootstrapped with create-next-app.
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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
![image](https://github.com/user-attachments/assets/2522be4c-219a-4c3a-b516-66150507bcfa)
