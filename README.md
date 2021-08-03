Responsive app that displays a list of stylized cards for users. To edit a user, click a field in user's card, type in desired change, and click Accept.

<h3>Install:</h3>
    
    npm install

<h3>To start:</h3>
    
    npm start

<h3>To run tests:</h3>
    
    npm test


<h2>App Functionality and Notes</h2>
<h3>genUsers()</h3>
Generates an array of users where each user is represented as an object literal. Uses faker JavaScript library.

<h3>CardList Component</h3>
Returns Card component for each user. Subscribes to store for list of users.

<h3>Card</h3>
Displays user properties and information such as name, email, and address. Returns CardField component for each element in displayedFields array. To display a field in card, add it to the displayFields array in src/features/card/displayFields.js.


editingField variable keeps track of field being edited.

Memoized to prevent re-rendering all Card components when updating any single one (see Performance below).

<h3>CardField</h3>
Displays user property information. For example, if ‘name’ field is passed with value ‘Jerry Lundegard’, displays ‘Jerry Lundegard’. If ‘address’ field is passed with value of ‘123 Cherry Lane’, displays ‘123 Cherry Lane’.

If props.isEditing is true, will render an input component to accept a new value for field. Passes new value and field back to Card component which then dispatches to store to update user property.


<h3>CardFieldIcon</h3>
Displays SVG icons for various fields. If field should not have an icon, returns empty div.

<h3>UserForm</h3>
Renders a form that accepts information to create a new user. If there are missing required fields, will display a warning.

  <h3>returnMissingRequiredFields</h3>
Returns any missing required fields from UserForm component. Used in UserForm component.

  <h3>createUserObject</h3>
Takes form data and creates a user object to be dispatched to store. Used in UserForm component.

<h3>FormField</h3>
Returns input HTML element for forms.

  <h2>Performance and Notes:</h2>
Memoized Card components results in faster render times when adding new user card.
  
<h3>Profiler Results Summary</h3>
(500 cards as initial model):


* Unmemoized
  * Adding a user and card: ~100ms


* Memoized:
  * Adding a user and card: ~1ms-4ms


<h3>Known Issues:</h3>
- [] Cannot edit address fields at the moment.
