# Kaodim Assignment - Joshua Rajandiran

### Here is what I did to create the form:


#### 1) I created a Form component which renders sub components like the Question input (based on the question type) & Success Page.

#### 2) The Previous & Next buttons are rendered based on the question. If you're at the first page, the Previous button would not render. Similarly if you're at the success page, the Next button would not render.

#### 3.1) The form pages is rendered based on the state (this.state.page), which is an integer & is also based on the questions array. When clicking the Next button, we check if the current question requires an input to be entered. If yes, then we first run a validation function that returns an object which contains the error message. If there's no input required, we update the page state to render the next/previous page (this.setState({page:page+1}) or (this.setState({page:page-1})

#### 3.2) Inside the validation function, we check the question type, for example if its a TextQuestion, then we check if there's input and if it meets the character limit. If we get an error then the returned object would contain an error message, we would then setState to show the error message below the input itself. Whenever we pass the validation, we also clear the error message by setting it to an empty string and then we use setState to render the next page.

#### 4) Based on the page state, we can render the next/prev question & the input based on the question type as well.

#### 5) The answers for each question are saved in an array based on the page state (this is what I could think of for making the answers state dynamic).

#### 6) At the success/final page, we use the map method to show each question & the answers that was entered.