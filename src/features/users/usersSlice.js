const initialState = [];

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'users/usersLoaded': {
      return action.payload;
    }

    case 'users/userAdded': {
      const newUser = action.payload;
      newUser.id = nextUserId(state);
      return [...state, newUser];
    }

    case 'users/userEdited': {
      const newUser = state.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            [action.payload.editedField]: action.payload.newFieldValue,
          };
        } else {
          return user;
        }
      });
      return newUser;
    }

    case 'users/userDeleted': {
      return state.filter((user) => user.id !== Number(action.payload));
    }

    default:
      return state;
  }
}

export const nextUserId = (users) => {
  const maxId = users.reduce((maxId, user) => Math.max(maxId, user.id), -1);
  return maxId + 1;
};

export const selectUsersList = (state) => state.users;
