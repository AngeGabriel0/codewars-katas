/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
 * For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain n
 */

function domainName(url) {
  let domain = url.replace(/(https?:\/\/)?(www\.)?/, "").split(".")[0]; 
  //regex to remove http(s):// and www. from the url and split the url by '.' and return the first element
  return domain;
}