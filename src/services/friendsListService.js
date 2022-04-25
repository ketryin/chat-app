const filterBySearchTerm = (friendsList, searchTerm) => {
  if (searchTerm) {
    return friendsList.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return friendsList;
};

const attachLastMessageToFriends = (friendsList) => {
  const ids = friendsList.map(({ id }) => id);

  const lastMessages = ids.map((id) => {
    if (localStorage.getItem(id)) {
      const messages = JSON.parse(localStorage.getItem(id));

      if (messages.length === 0) {
        return { friendId: id, message: null, date: null };
      }

      const { message, date } = messages[messages.length - 1];
      return { friendId: id, message, date };
    } else {
      return { friendId: id, message: null, date: null };
    }
  });

  return friendsList.map(({ id, name, avatar }) => {
    const { message, date } =
      lastMessages.find(({ friendId }) => friendId === id) ?? {};
    return { id, name, avatar, message, date };
  });
};

const processFriendsList = (friendsList, searchTerm) => {
  const friendsListWithLastMessage = attachLastMessageToFriends(friendsList);
  const filteredBySearchTerm = filterBySearchTerm(
    friendsListWithLastMessage,
    searchTerm
  );

  return filteredBySearchTerm.sort(
    (current, next) => new Date(next.date) - new Date(current.date)
  );
};

export { processFriendsList };
