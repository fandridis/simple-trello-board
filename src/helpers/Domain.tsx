export const getDomain = () => {
  if (isProduction()) {
    // TODO: insert prod url
    return "https://demoAPI.fandridis.repl.co";
  }
  return "https://demoAPI.fandridis.repl.co";
};

const isProduction = () => {
  return process.env.NODE_ENV === "production";
};
