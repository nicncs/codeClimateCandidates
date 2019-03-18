import merge from 'lodash/merge';

import answerTypeLookup from 'app/answer/answer-type-lookup';

import Checkbox from 'lib/ui/checkbox/Checkbox';
import Radio from 'lib/ui/radio/Radio';

import TextQuestion, {
  required as textRequired,
  minLength as textMinLength,
  minLength as textMaxLength,
  normalize as normalizeText,
} from './TextQuestion';
import CheckboxQuestion, {
  required as checkboxRequired,
  normalize as normalizeCheckbox,
} from './CheckboxQuestion';
import RadioQuestion, {
  required as radioRequired,
  normalize as normalizeRadio,
} from './RadioQuestion';
// import FileUpload, {
//   required as fileRequired
// } from './FileUpload';

/**
 * This lookup object of questions serves as references to the actual components, validators, normalizers, etc.
 */
const questionTypeLookup = {
  TextQuestion: {
    component: TextQuestion,
    normalize: normalizeText,
    validator: {
      required: textRequired,
      minLength: textMinLength,
      maxLength: textMaxLength,
    },
  },
  CheckboxQuestion: {
    behavesLike: 'checkbox',
    checkboxComponent: Checkbox,
    columns: 1,
    component: CheckboxQuestion,
    normalize: normalizeCheckbox,
    validator: {
      required: checkboxRequired,
    },
    useDataProps: true,
  },
  RadioQuestion: {
    behavesLike: 'radio',
    checkboxComponent: Radio,
    columns: 1,
    component: RadioQuestion,
    normalize: normalizeRadio,
    validator: {
      required: radioRequired,
    },
    useDataProps: true,
  },
  // FileUpload: {
  //   component: FileUpload,
  //   validator: {
  //     required: fileRequired,
  //   },
  // },
};

export default merge(
  questionTypeLookup,
  answerTypeLookup
);
