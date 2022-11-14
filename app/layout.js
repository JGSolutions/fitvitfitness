export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <title>FitVitFitness - Workout Fitness Tracker for Gym and Home training</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Free workout tracking app. Track calisthenics, strength training & weight lifting routine programs. Sync your workouts with Google Fit." />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="FitVit Blog" />
        <meta property="og:description" content="Blogging about the web and development" />
        <meta name="image" property="og:image" content="https://jgsolutions.ca/jerry-pic.jpeg" itemProp="image"/>

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="Blogging about the web and development" />
        <meta name="twitter:image" content="" />
        {/* <meta name="twitter:creator" content="@JGSolutions"></meta> */}
        <body>{children}</body>
      </html>
    );
  }