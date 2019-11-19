/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const resArray = [];

  for (let email of emails) {
    email = email.split("@");
    let localName = email[0];
    let domain = email[1];

    localName = cleanLocalName(localName);
    email = localName + "@" + domain;
    if (!resArray.includes(email)) {
      resArray.push(email);
    }
  }

  return resArray.length;
};

function cleanLocalName(name) {
  name = name.split("+")[0].replace(/[.]/g, "");
  return name;
}
