// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

const domainName = (url) => {
  let currentUrl = url;
  if (url[0] === "h") {
    currentUrl = url.split("//")[1];
  }

  currentUrl = currentUrl.split(".").filter((str) => str !== "www")[0];
  return currentUrl;
};
