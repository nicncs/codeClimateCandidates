const payload = {
  "title": "This is a title for the form Header",
  "questions": [
    {
      "id": 2447,
      "question_type": "TextQuestion",
      "prompt": "What is your first answer?",
      "is_required": false,
      "min_char_length": 15
    },
    {
      "id": 2448,
      "question_type": "TextQuestion",
      "prompt": "What is your second answer?",
      "is_required": true,
      "min_char_length": 20
    },
    {
      "id": 2500,
      "question_type": "TextQuestion",
      "prompt": "What is your third answer?",
      "is_required": true,
      "min_char_length": 1,
    },
    {
      "id": "preferred_opt",
      "question_type": "CheckBoxQuestion",
      "prompt": "What is your preferred opt?",
      "options": [
        {
          title: "Option 1",
          value: "option1",
        },
        {
          title: "Option 2",
          value: "option2",
        },
        {
          title: "Option 3",
          value: "option3",
        },
      ],
      "is_required": true,
    },
    {
      "id": "upload_file",
      "fileType": "jpg_or_pdf",
      "question_type": "UploadFileQuestion",
      "prompt": "What is your upload file",
      "isRequiredFile": true,
    },
    {
      "id": "textbox",
      "question_type": "TextBoxQuestion",
      "prompt": "What is your fourth answer?",
      "is_required": true,
      "min_char_length": 10,
    },
  ]
};

let FIELDS = {};

let flattenJson = () => {
  let questions = payload["questions"];
  questions.map((question) => {
    let key = question.id;
    let obj = {};
    let combineValidators = [];

    obj["id"] = question.id;
    obj["questionType"] = question.question_type;
    obj["label"] = {};
    obj["label"]["title"] = question.prompt;
    obj["label"]["className"] = "bold";

    if (question.is_required) {
      combineValidators.push("isRequired");
    }

    if (question.min_char_length) {
      let minCharLength = {};
      minCharLength["min"] = question.min_char_length;
      combineValidators.push(minCharLength);
    }

    if (question.isRequiredFile) {
      combineValidators.push("isRequiredFile");
    }

    obj["validators"] = combineValidators;

    switch (question.question_type) {
      case "TextQuestion":
        obj["placeholder"] = question.prompt;
        break;
      case "UploadFileQuestion":
        obj["fileType"] = question.fileType;
        break;
      case "CheckBoxQuestion":
        obj["options"] = question.options;
        break;
      case "TextBoxQuestion":
        obj["placeholder"] = question.prompt;
        break;
      default:
        break;
    }

    FIELDS[key] = obj;
  });
};

flattenJson();

export const header = payload["title"];
export default FIELDS;
export const FieldsByView = [
  ["2447"],
  ["2448"],
  ["2500"],
  ["preferred_opt"],
  ["upload_file"],
  ["textbox"],
];
