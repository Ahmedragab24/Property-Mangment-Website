# PropEase

![PropEase Screenshot](https://res.cloudinary.com/dk4yvlwr0/image/upload/v1735776547/Screenshot_2-1-2025_2839_localhost_u3r7hu.jpg)

Welcome to **PropEase**, a platform designed to seamlessly connect property owners with potential renters. Whether you're looking to rent out your apartment or searching for the perfect place to stay, PropEase simplifies the process with easy steps and clear policies. The site serves as a reliable intermediary between landlords and tenants.

---

## 🚀 Features

- **Responsive Design**:
  The website is fully responsive and optimized for all screen sizes, from mobile devices to large desktops.

- **User Authentication**:

  - Secure Registration and Login System.
  - Supports both landlord and tenant accounts.

- **Property Management**:

  - Add, edit, and delete property listings with ease.
  - Rich filtering and sorting options for properties (e.g., by city, number of rooms, price).

- **Dark Mode**:
  A modern and eye-friendly dark mode toggle for better user experience.

- **Interactive Animations**:
  Smooth animations powered by Framer Motion for an engaging interface.

- **Advanced Forms**:
  User-friendly and validation-backed forms for a seamless data entry experience.

- **Notifications**:
  Toast notifications using ShadCN for real-time updates.

- **Error Tracking**:
  Integrated with Sentry for monitoring and fixing errors in real time.

- **Cookie Management**:
  Manage session data securely with JS-Cookie.

- **High Performance**:
  Optimized with server-side rendering (SSR) and client-side caching using Redux Toolkit Query.

---

## 🛠️ Tools & Technologies

### Frontend Frameworks & Libraries

- **[Next.js](https://nextjs.org/)**  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="30">  
  Framework for server-side rendering and building high-performance React applications.

- **[TypeScript](https://www.typescriptlang.org/)**  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="30">  
  A typed superset of JavaScript to catch errors early and build robust applications.

- **[Tailwind CSS](https://tailwindcss.com/)**  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="30">  
  A utility-first CSS framework for rapid and custom UI development.

- **[ShadCN](https://shadcn.dev/)**  
  <img src="https://raw.githubusercontent.com/shadcn/ui/main/public/logo.svg" width="30">  
  A modern UI library for creating beautiful and accessible interfaces.

- **[Swiper](https://swiperjs.com/)**  
  <img src="https://swiperjs.com/images/swiper-social-share.png" width="30">  
  A powerful slider library for interactive carousels and slides.

- **[Framer Motion](https://www.framer.com/motion/)**  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg" width="30">  
  A library for animations and interactions in React.

### State Management

- **[Redux Toolkit](https://redux-toolkit.js.org/)**  
  <img src="https://redux-toolkit.js.org/img/logo.svg" width="30">  
  A modern state management tool for efficient global state handling.

- **[Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview)**  
  For fetching, caching, and synchronizing server data with the UI.

### Backend Integration

- **[Appwrite](https://appwrite.io/)**  
  <img src="https://appwrite.io/images/favicon.png" width="30">  
  A backend-as-a-service for managing authentication, databases, and storage.

### Form Handling

- **[React Hook Form](https://react-hook-form.com/)**  
  <img src="https://avatars.githubusercontent.com/u/53986236?s=200&v=4" width="30">  
  A performant and flexible library for form management.

- **[Zod](https://zod.dev/)**  
  <img src="https://github.com/colinhacks/zod/raw/master/logo.svg" width="30">  
  A TypeScript-first schema validation library.

### Miscellaneous

- **[JS-Cookie](https://github.com/js-cookie/js-cookie)**  
  For managing cookies on the client side.

- **[Lucide-React](https://lucide.dev/)**  
  A comprehensive icon library for modern UIs.

- **[UUID](https://github.com/uuidjs/uuid)**  
  For generating unique identifiers.

- **[Sentry](https://sentry.io/)**  
  Real-time error monitoring and performance tracking.

---

## 🌟 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- NPM or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ahmedragab24/PropEase.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PropEase
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create an `.env` file and configure the following:
   ```env
   NEXT_PUBLIC_ENDPOINT="https://cloud.appwrite.io/v1"
   NEXT_PUBLIC_ENDPOINT=your_appwrite_endpoint
   NEXT_PUBLIC_ProjectID=your_appwrite_project_id
   NEXT_PUBLIC_DATABASE_ID=your_database_id
   NEXT_PUBLIC_PROPERTY_COLLECTION=your_property_collection_id
   NEXT_PUBLIC_BOOKING_COLLECTION=your_booking_collection_id
   NEXT_PUBLIC_LANDLORD_COLLECTION=your_landlord_collection_id
   NEXT_PUBLIC_BUCKET_ID=your_bucket_id
   ```

### Run the Project

- Development mode:
  ```bash
  npm run dev
  ```
- Production build:
  ```bash
  npm run build && npm start
  ```

---

## 📂 Folder Structure

```
PropEase
├── public        # Static assets
├── src           # Main source code
│   ├── components # Reusable components
│   ├── pages      # Application pages
│   ├── hooks      # Custom React hooks
│   ├── utils      # Helper functions
│   ├── features   # Redux features
├── styles        # Global and module CSS
├── README.md     # Project documentation
```

---

## 💡 Contribution

Contributions are welcome! If you'd like to contribute, please:

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Submit a pull request.

---

## 🌐 Contact

For questions or support, feel free to reach out:

- **LinkedIn**: [Ahmed Elmadany](https://www.linkedin.com/in/ahmed-ragab-elmadany-558a31209/)
- **Email**: ahmedkavo17@gmail.com
- **GitHub**: [Ahmedragab24](https://github.com/Ahmedragab24)
