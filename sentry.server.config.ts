import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "https://42b56dc4f986f9cd804c47b59169ff8d@o4505662827986944.ingest.us.sentry.io/4508411655094272",

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
