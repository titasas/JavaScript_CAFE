const facebookProfile = {
  fbName: "Titas",
  friend: 0,
  messages: [],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friend += 1;
  },
  removeFriend: function removeFriend() {
    facebookProfile.friend -= 1;
  },
};

facebookProfile.postMessage("Sveiki visi");
facebookProfile.postMessage("Mano vardas Titas");
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages);

facebookProfile.addFriend();
facebookProfile.addFriend();
facebookProfile.addFriend();
console.log("Friends: ", facebookProfile.friend);

facebookProfile.removeFriend();
console.log("Friends: ", facebookProfile.friend);
