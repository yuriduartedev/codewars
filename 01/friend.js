function friend(friends) {
  let myFriends = [];

  friends.map((friend) => {
    if(friend.length === 4) {
      myFriends.push(friend);
    }
  })
    
  return myFriends;
}

friend(["Ryan", "Kieran", "Mark"])