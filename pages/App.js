import Checkbox from "../components/Form/CheckboxGroup";
import InputLabel from "../components/Form/InputWithLabel";
import DragDrop from "../components/Form/DragDropUpload";
import Message from "../components/Message";
import _ from "underscore";
import TextArea from "../components/Form/TextArea";

import FIELDS, { FieldsByView, header } from "../components/Misc/Fields";
import { connect } from "react-redux";
import {
  compose,
  lifecycle,
  withProps,
  withStateHandlers,
  withHandlers,
  defaultProps,
} from "recompose";

import TransitionGroup from "react-addons-css-transition-group";
import { setMessage, setValidities, setValue, setTriggeredState } from "../store";
import { validateForm } from "../components/Misc/form";

import BubbleWav from "../components/Audio/bubble.wav";
import SwooshWav from "../components/Audio/swoosh.wav";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

const LAST_VIEW_NUM = _.size(FIELDS) + 1;

const App = ({
  // prop states
  progress,
  view,
  next,
  prev,
  showActionButtons,
  disabledNextButton,
  // const
  FIELDS,
  swooshAu,
  // redux
  values,
  validities,
  message,
  dispatch,
  // handlers
  nextPage,
  prevPage,
  hasNextPage,
  hasPrevPage,
  removeFieldValue,
  uploadFile,
  removeFileById,
  handleFileError,
  setDisabledNextButton,
}) => {
  const wrapperCls = [
    "wrapper"];
  const formCls = ["dynamic-form", progress !== 0 && "in-progress"];
  const leftButtonCls = ["form-action-button left", !hasPrevPage() && "disabled"];
  const rightButtonCls = [
    "form-action-button right",
    !hasNextPage() && "disabled",
    disabledNextButton && "disabledNext",
  ];
  let currentTrans = "slide-left";
  let newTrans = "slide-left-next";
  if (prev) {
    currentTrans = "slide-right-next";
    newTrans = "slide-right";
  }
  let arrIndex = view - 1;

  return (
    <div className={wrapperCls.join(" ")}>
      {/* Alert / Top Right message */}
      {(message.title || message.message) && (
        <Message
          title={message.title}
          message={message.message}
          onClose={() => {
            swooshAu && swooshAu.play();
            setTimeout(() => {
              dispatch(setMessage({}));
            }, 1000);
          }}
        />
      )}

      <div className="header company-logo-wrapper">
        <a href="/">
          <img className="company-logo" alt="company-logo" src="./static/images/client/logo.png" />
        </a>
      </div>

      <div className="body">
        <div className="form-viewer">
          <h1 className="dynamic-form-title">{header}</h1>
          <form className={formCls.join(" ")} autoComplete="off">
            {showActionButtons && [
              <div className="form-buttons-group desktop" key="1">
                <div className={leftButtonCls.join(" ")} onClick={prevPage} id="prev">
                  <img src="./static/images/actions/back.svg" style={{ width: "15px" }} />
                  &nbsp;Prev
                </div>
                <div className={rightButtonCls.join(" ")} onClick={nextPage} id="next">
                  Next&nbsp;
                  <img src="./static/images/actions/next.svg" style={{ width: "15px" }} />
                </div>
              </div>,
              <div className="form-buttons-group mobile" key="2" id="prev">
                <div className={leftButtonCls.join(" ")} onClick={prevPage}>
                  PREV
                </div>
                <div className={rightButtonCls.join(" ")} onClick={nextPage} id="next">
                  NEXT
                </div>
              </div>,
            ]}

            {/* Question 1 */}
            <TransitionGroup
              transitionName={view !== 1 ? currentTrans : newTrans}
              transitionEnterTimeout={view !== 1 ? 500 : 750}
              transitionLeaveTimeout={view !== 1 ? 500 : 750}>
              {view === 1 &&
                showField(arrIndex, values, validities, setDisabledNextButton)
              }
            </TransitionGroup>

            {/* Question 2 */}
            <TransitionGroup
              transitionName={view !== 2 ? currentTrans : newTrans}
              transitionEnterTimeout={view !== 2 ? 500 : 750}
              transitionLeaveTimeout={view !== 2 ? 500 : 750}>
              {view === 2 &&
                showField(arrIndex, values, validities, setDisabledNextButton)
              }
            </TransitionGroup>

            {/* Question 3 */}
            <TransitionGroup
              transitionName={view !== 3 ? currentTrans : newTrans}
              transitionEnterTimeout={view !== 3 ? 500 : 750}
              transitionLeaveTimeout={view !== 3 ? 500 : 750}>
              {view === 3 &&
                showField(arrIndex, values, validities, setDisabledNextButton)
              }
            </TransitionGroup>

            {/* CheckBox */}
            <TransitionGroup
              transitionName={view !== 4 ? currentTrans : newTrans}
              transitionEnterTimeout={view !== 4 ? 500 : 750}
              transitionLeaveTimeout={view !== 4 ? 500 : 750}>
              {view === 4 &&
                showField(arrIndex, values, validities)
              }
            </TransitionGroup>

            {/* Documents Upload */}
            <TransitionGroup
              transitionName={view !== 5 ? currentTrans : newTrans}
              transitionEnterTimeout={view !== 5 ? 500 : 750}
              transitionLeaveTimeout={view !== 5 ? 500 : 750}>
              {view === 5 &&
                showField(
                  arrIndex,
                  values,
                  validities,
                  setDisabledNextButton,
                  uploadFile,
                  removeFileById,
                  handleFileError,
                  removeFieldValue
                )
              }
            </TransitionGroup>

            {/* TextBox */}
            <TransitionGroup
              transitionName={view !== 6 ? currentTrans : newTrans}
              transitionEnterTimeout={view !== 6 ? 500 : 750}
              transitionLeaveTimeout={view !== 6 ? 500 : 750}>
              {view === 6 &&
                showField(arrIndex, values, validities, setDisabledNextButton)
              }
            </TransitionGroup>

            {/* Completed message */}
            <TransitionGroup
              transitionName={view !== 7 ? currentTrans : newTrans}
              transitionEnterTimeout={view !== 7 ? 500 : 750}
              transitionLeaveTimeout={view !== 7 ? 500 : 750}>
              {view === 7 && (
                <div id="review" className="form-body">
                  <div className="form-row col-lg-12">
                    <div className="col-sm-12 col-md-12">
                      <TextArea
                        {...FIELDS["2447"]}
                        value={values["2447"]}
                        isEditable={false}
                      />
                    </div>
                  </div>

                  <div className="form-row col-lg-12">
                    <div className="col-sm-12 col-md-12">
                      <TextArea
                        {...FIELDS["2448"]}
                        value={values["2448"]}
                        isEditable={false}
                      />
                    </div>
                  </div>

                  <div className="form-row col-lg-12">
                    <div className="col-sm-12 col-md-12">
                      <TextArea
                        {...FIELDS["2500"]}
                        value={values["2500"]}
                        isEditable={false}
                      />
                    </div>
                  </div>

                  <div className="form-row col-lg-12">
                    <div className="col-sm-12 col-md-12">
                      <Checkbox
                        {...FIELDS["preferred_opt"]}
                        value={values["preferred_opt"]}
                        isEditable={false}
                      />
                    </div>
                  </div>

                  <div className="form-row col-lg-12">
                    <div className="col-sm-12 col-md-6">
                      <DragDrop
                        {...{
                          ...FIELDS["upload_file"],
                          title: FIELDS["upload_file"].label.title,
                        }}
                        value={values["upload_file"]}
                      />
                    </div>
                  </div>

                  <div className="form-row col-lg-12">
                    <div className="col-sm-12 col-md-12">
                      <InputLabel
                        {...FIELDS["textbox"]}
                        value={values["textbox"]}
                        isEditable={false}
                      />
                    </div>
                  </div>
                </div>
              )}
            </TransitionGroup>
          </form>
        </div>
      </div>

      <div className="footer" />
    </div>
  );
};

const withFields = compose(
  withProps(() => ({
    FIELDS,
  })),
);

const withAudio = compose(
  lifecycle({
    componentDidMount() {
      const bubbleAu = new Audio(BubbleWav);
      const swooshAu = new Audio(SwooshWav);
      const { bubbleAu: bAu, swooshAu: sAu } = this.props;
      if (!bAu) {
        this.setState({
          bubbleAu,
        });
      }
      if (!sAu) {
        this.setState({
          swooshAu,
        });
      }
    },
  }),
);

const withTriggerFieldHandler = compose(
  // values dependancy
  connect(
    state => ({
      triggeredStates: state.triggeredStates,
    }),
    dispatch => {
      return {
        hideField: id => {
          dispatch(
            setTriggeredState({
              id,
              triggeredState: true,
            }),
          );
        },
        showField: id => {
          dispatch(
            setTriggeredState({
              id,
              triggeredState: false,
            }),
          );
        },
      };
    },
  ),
);

export default compose(
  connect(state => ({
    values: state.values,
    validities: state.validities,
    message: state.message,
  })),
  defaultProps({
    view: 1,
    max: 7,
  }),
  withAudio,
  withTriggerFieldHandler,
  withStateHandlers(
    ({ view, max }) => ({
      progress: 0,
      view,
      max,
      showActionButtons: true,
      disabledNextButton: false,
      uploadedFiles: {},
    }),
    {
      uploadFile: ({ uploadedFiles }) => ({ id, file }) => {
        return {
          uploadedFiles: {
            ...uploadedFiles,
            [id]: file,
          },
        };
      },
      removeFileById: ({ uploadedFiles }) => id => {
        return {
          uploadedFiles: {
            ...uploadedFiles,
            [id]: null,
          },
        };
      },
      incrementView: ({ max, view }) => () => {
        if (view < max) {
          view += 1;
          return {
            view,
            next: true,
            prev: false,
          };
        }
      },
      decrementView: ({ view }) => () => {
        if (view > 1) {
          view -= 1;
          return {
            view,
            next: false,
            prev: true,
          };
        }
      },
      lastView: ({ view }) => () => {
        if (view !== LAST_VIEW_NUM) {
          return {
            view: LAST_VIEW_NUM,
          };
        }
      },
      setShowActionButtons: () => show => {
        return {
          showActionButtons: show,
        };
      },
      setDisabledNextButton: () => disabled => ({
        disabledNextButton: disabled,
      }),
    },
  ),
  withHandlers({
    validate: ({ dispatch, values, triggeredStates }) => ids => {
      const validities = validateForm({
        fields: ids,
        values,
        triggeredStates,
        FIELDS,
      });
      dispatch(setValidities(validities));

      return validities;
    },
    hideError: ({ dispatch }) => () => {
      dispatch(setMessage({}));
    },
    showFieldError: ({ dispatch }) => ({ name, message }) => {
      dispatch(
        setMessage({
          title: (
            <div>
              <Icon name="exclamation" />
              Oops
            </div>
          ),
          message: (
            <div>
              {name} - {message}
            </div>
          ),
        }),
      );
    },
    removeFieldValue: ({ dispatch }) => id => {
      dispatch(
        setValue({
          id,
        }),
      );
    },
    handleFileError: ({ dispatch }) => error => {
      let message;
      if (error.type === "file" && error.files) {
        message = (
          <div>Upload Error - Does not accept more than 1 files, given {files.length} files</div>
        );
      } else if (error.type === "file" && error.message) {
        message = <div>Upload Error - {error.message}</div>;
      } else if (error.type === "reject") {
        message = <div>Upload Error - Invalid file type</div>;
      }
      dispatch(
        setMessage({
          title: (
            <div>
              <Icon name="exclamation" />
              Oops
            </div>
          ),
          message,
        }),
      );
    },
  }),

  withHandlers({
    hasNextPage: ({ max, view }) => () => {
      return view < max;
    },
    hasPrevPage: ({ view }) => () => {
      return view > 1;
    },
    nextPage: ({
      view,
      bubbleAu,

      validate,
      incrementView,
      hideError,

      showFieldError,
    }) => async () => {
      bubbleAu && bubbleAu.play();
      const fieldIds = FieldsByView[view - 1] || [];
      let found = false;

      const validities = validate(fieldIds);

      fieldIds.forEach(id => {
        const isValid = validities[id] && validities[id].isValid;
        if (!isValid && !found) {
          found = id;
        }
      });

      if (!found) {
        let cont = true;

        if (!cont) {
          return;
        }

        incrementView();
        hideError();
        setTimeout(scrollTop, 200);
      } else {
        const name = FIELDS[found].label.title;
        const message = validities[found].errorMessage;
        showFieldError({ name, message });
      }
    },
    prevPage: ({ progress, decrementView, bubbleAu, setDisabledNextButton }) => () => {
      if (progress !== 0) {
        return;
      }

      bubbleAu && bubbleAu.play();
      decrementView();
      setDisabledNextButton(false);
      setTimeout(scrollTop, 200);
    },
  }),
  withFields,
)(App);

function getValidity(validity) {
  if (_.isUndefined(validity)) {
    return true;
  } else {
    const { isValid = true } = validity;
    return isValid;
  }
}

function getErrorMessage(validity = {}) {
  const { errorMessage } = validity;
  return errorMessage;
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

function scrollTo(element, to, duration) {
  var start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 20;

  var animateScroll = function () {
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

function scrollTop() {
  let element = document.body;
  if (document.scrollingElement) element = document.scrollingElement;
  scrollTo(element, 0, 1000);
}

function showField(
  arrIndex,
  values,
  validities,
  setDisabledNextButton,
  uploadFile,
  removeFileById,
  handleFileError,
  removeFieldValue
) {
  let field = <div></div>;
  let key = FieldsByView[arrIndex];
  let qType = FIELDS[key]["questionType"];

  if (qType === "TextQuestion") {
    field =
      <div className="form-body">
        <div className="form-row col-lg-12">
          <div className="col-sm-12 col-md-12">
            <TextArea
              {...FIELDS[key]}
              value={values[key]}
              isValid={getValidity(validities[key])}
              errorMessage={getErrorMessage(validities[key])}
              onChange={(e, data) => {
                setDisabledNextButton(false);
                if (getValidity(validities[key])) {
                  setDisabledNextButton(false);
                } else {
                  setDisabledNextButton(true);
                }
              }}
            />
          </div>
        </div>

        <div className="form-separator" />
      </div>
  }

  if (qType === "TextBoxQuestion") {
    field =
      <div className="form-body">
        <div className="form-row col-lg-12">
          <div className="col-sm-12 col-md-12">
            <InputLabel
              {...FIELDS[key]}
              value={values[key]}
              isValid={getValidity(validities[key])}
              errorMessage={getErrorMessage(validities[key])}
              onChange={(e, data) => {
                setDisabledNextButton(false);
                if (getValidity(validities[key])) {
                  setDisabledNextButton(false);
                } else {
                  setDisabledNextButton(true);
                }
              }}
            />
          </div>
        </div>

        <div className="form-separator" />
      </div>
  }

  if (qType === "CheckBoxQuestion") {
    field =
      <div className="form-body">
        <div className="form-row col-lg-12">
          <div className="col-sm-12 col-md-12">
            <Checkbox
              {...FIELDS[key]}
              value={values[key]}
              isValid={getValidity(validities[key])}
              errorMessage={getErrorMessage(validities[key])}
            />
          </div>
        </div>

        <div className="form-separator" />
      </div>
  }

  if (qType === "UploadFileQuestion") {
    field =
      <div className="form-body">
        <div className="form-row col-lg-12">
          <div className="col-sm-12 col-md-12">
            <h3 className="form-header">Documents Upload</h3>
            File format must be either JPG (with maximum file size of 2MB) or PDF (with
            maximum file size of 5MB)
            <br />
            <br />
          </div>
        </div>
        <div className="form-row col-lg-12">
          <div className="col-sm-12 col-md-6">
            <DragDrop
              {...{
                ...FIELDS[key],
                title: FIELDS[key].label.title,
              }}
              value={values[key]}
              isValid={getValidity(validities[key])}
              errorMessage={getErrorMessage(validities[key])}
              onChange={file => {
                // set file
                uploadFile({
                  id: "upload_file",
                  file,
                });
              }}
              onRemove={() => {
                removeFileById(key);
                removeFieldValue(key);
              }}
              onError={handleFileError}
            />
          </div>
        </div>
      </div>
  }

  return field;
}
