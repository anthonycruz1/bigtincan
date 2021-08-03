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

/*
Reasoning behind choices:
- Saving users as list instead of object
Reasoning: Fastest first render when users are saved as an array in state. Given the MVP of task, editing and deleting are too complex, so why not just go for that small boost in first render time?

Time Complexity if Object literal:
- useSelector - Return users as array - O(n)
- add - get max id - O(n)
- edit - find user - O(1)
- delete - find user - O(1)

Time Complexity if Array:
- useSelector - Return users - O(1)
- add - get max id - O(n)
- edit - find user - O(n)
- delete - filter user by id - O(n)

// Tests
Array:
13ms
12.6ms
14.3ms

200 (shallowEqual):
55ms
55.9ms
54ms

200 (no shallowEqual):
N/A - not returning new array

Object:
16.5 ms
15.5ms
15.8ms

200 (shallowEqual):
57.7ms
55.9ms
57.3ms

200 (no shallowEqual)
55.4ms + 18.6ms
55.9ms + 16.9ms
54.5ms + 20.5ms

Fastest first render - Array

*/
