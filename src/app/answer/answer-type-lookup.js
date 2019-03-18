import TextAnswer from 'app/answer/TextAnswer';
import CheckboxAnswer from 'app/answer/CheckboxAnswer';
import RadioAnswer from 'app/answer/RadioAnswer';

const answerTypeLookup = {
  TextQuestion: {
    answerComponent: TextAnswer,
  },
  CheckboxQuestion: {
    answerComponent: CheckboxAnswer,
  },
  RadioQuestion: {
    answerComponent: RadioAnswer,
  },
  // FileUpload: {
  //   answerComponent: FileAnswer,
  // },
};

export default answerTypeLookup;
