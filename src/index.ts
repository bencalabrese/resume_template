require("./styles.scss");

import Profile from "./actions/profile";

const profile = new Profile();

setTimeout(() => {
  profile.expand(".skills");
}, 1000);

setTimeout(() => {
  profile.normalize();
}, 3000);
