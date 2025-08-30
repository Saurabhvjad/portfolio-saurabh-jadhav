# Saurabh Jadhav - Personal Portfolio

This is a modern, minimal, and fully responsive personal portfolio website for Saurabh Jadhav, built with Next.js, TypeScript, Tailwind CSS, Shadcn/UI, Lucide icons, and Framer Motion for smooth animations and interactive effects.

## Features

- **Fullscreen Hero Section**: Engaging landing page with name, tagline, and call-to-action buttons.
- **About Me**: Professional bio with an animated timeline of career journey.
- **Skills**: Interactive animated grid showcasing both engineering and data/tech skills.
- **Projects**: Animated cards for each project with expandable modals for detailed information and links.
- **Experience & Education**: Timeline with smooth animations.
- **Contact**: Form for inquiries and animated social media icons.
- **Sticky Navigation**: Smooth scrolling navigation with a mobile slide-in menu.
- **Responsive Design**: Optimized for various screen sizes (desktop, tablet, mobile).
- **Dark Theme**: A sleek and modern dark color scheme.
- **SEO Optimized**: Basic metadata for search engine visibility.
- **Accessibility Friendly**: Built with accessibility best practices in mind.

## Technologies Used

- **Next.js 14+**: React framework for production.
- **TypeScript**: Type-safe JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Shadcn/UI**: Reusable UI components built with Radix UI and Tailwind CSS.
- **Lucide Icons**: Beautiful and customizable open-source icons.
- **Framer Motion**: Production-ready motion library for React.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (v18.x or later)
- npm or yarn or pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/portfolio-saurabh-jadhav.git
    cd portfolio-saurabh-jadhav
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Add Shadcn/UI components (if not already added):**

    This project uses several Shadcn/UI components. If you encounter any module not found errors related to `@/components/ui/*`, you might need to add them using the Shadcn CLI. Run the following command:

    ```bash
    npx shadcn@latest add button sheet card dialog badge aspect-ratio input textarea label
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

This will create an optimized production build in the `.next` folder.

### Running the Production Build

To start the production server:

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## Customization

- **Content**: All text content (name, tagline, bio, project details, etc.) can be easily updated in the respective component files (`components/sections/*.tsx`).
- **Images**: Replace placeholder images in the `public/images` directory with your own project screenshots or personal photos.
- **Styling**: Customize the look and feel using Tailwind CSS classes. The `tailwind.config.ts` file can be modified for theme adjustments.
- **Animations**: Adjust Framer Motion properties in component files to fine-tune animations.

## SEO & Accessibility

- **SEO**: Basic SEO metadata is configured in `app/layout.tsx`. You can expand on this with more specific meta tags for better search engine ranking.
- **Accessibility**: Components are built with accessibility in mind, following best practices for semantic HTML and keyboard navigation.

## License

This project is open source and available under the MIT License.