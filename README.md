# Internship Assignment - Admin Dashboard

This project is an **Internship Assignment**, where I developed a **dashboard** that helps admins with **user management**, **content moderation**, and **analytics**. The main goal of this project was to create an intuitive and functional interface for managing social media platform data and metrics.

## Features

- **User Management**: Manage user profiles, activities, and interactions.
- **Content Moderation**: Monitor and moderate content with detailed analytics.
- **Analytics**: View key statistics about posts, views, and blocked content in a clean and organized format.
- **Charting**: Display metrics visually using **Recharts**, a composable charting library built on React components.

## Libraries and Tools Used

- **React**: JavaScript library for building user interfaces.
- **React-Bootstrap**: A popular React UI library for building responsive components.
- **Recharts**: A composable charting library built on React components for visual data representation.
- **Axios / Fetch / React Query**: Tried and tested libraries for fetching API data, though encountered issues with CORS.
- **Component-based CSS**: Used CSS modules to style individual components.

## Issues Encountered

One of the main challenges I faced during this project was the **CORS error** when trying to fetch data from the API: https://api.socialverseapp.com/admin/dashboard.


I attempted to resolve this issue using various methods:
- **Axios**
- **Fetch**
- **React Query**

Unfortunately, none of these methods worked, and the CORS issue persisted.

## Workaround

Since I could not resolve the CORS issue in time, I decided to **mock the API data** by saving it in a `data.json` file and using it to render the dashboard. This allowed me to move forward with the project while I continue investigating the CORS problem.

## Next Steps

- Attempt to resolve the CORS issue.
- Investigate server-side configuration for the CORS headers.
- Implement more dynamic data fetching if possible.

## Conclusion

This dashboard is a work-in-progress, and fetching data was the most difficult part of this assignment, which I still plan to resolve. For now, the dashboard is fully functional with mock data.

Thank you for reviewing this project!


