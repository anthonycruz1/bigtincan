npm install

To start: npm start

To run tests: npm test

To edit a user, click a user field in user's card, type in desired change, and click accept. Can click cancel to cancel.

genUsers()
generates an array of users where each user is represented as an object literal. Uses faker JavaScript library.

<CardList/>
Returns <Card/> for each user. Subscribes to store for list of users.

<Card/>
Displays user properties and information such as name, email, and address. Returns <CardField/> for each element in displayedFields array. To display a field in card, add it to the displayFields array in src/features/card/displayFields.js.

editingField variable keeps track of field being edited.

Memoized to prevent re-rendering all <Card/>’s when updating any single one (see performance below).

<CardField/>
Displays user property information. For example, if ‘name’ field is passed with value ‘Jerry Lundegard’, displays ‘Jerry Lundegard’. If ‘address’ field is passed with value of ‘123 Cherry Lane’, displays ‘123 Cherry Lane’.

If props.isEditing is true, will render an input component to accept a new value for field. Passes new value and field back to <Card/> component which then dispatches to store to update user property.

<CardFieldIcon/>
Displays SVG icons for various fields. If field does not have an icon, returns empty <div>.

<UserForm/>
Renders a form that accepts information to create a new user. If there are missing required fields, will display a warning.

returnMissingRequiredFields()
Returns any missing required fields from <UserForm/>.

createUserObject()
Takes form data and creates a user object to be dispatched to store.

<FormField/>
Returns <input> for forms.

Performance and Notes:
Regarding my decision to create a memoized Card component:
Faster render times when adding new user card.

Profiler Results Summary:
With 500 cards as initial model (unmemoized): - adding a user/card - ~100ms
With 500 cards as initial model (memoized): - adding a user/card: - ~1.xxms to < 5ms

Known Issues:

1. Cannot edit address fields at the moment.
