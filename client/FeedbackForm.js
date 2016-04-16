  Template.userInputs.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const textValue = target.text.value;

    // Insert a task into the collection
    UserInputFeedback.insert({
      text: textValue,
      createdAt: new Date(), // current time
    });

  console.log ("The value of user feedback is", UserInputFeedback)

    // Clear form
    target.text.value = '';
  },
});

