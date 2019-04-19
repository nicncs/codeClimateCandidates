import React from "react";
import _ from "underscore";
import Label from "./Label";
import Dropzone from "react-dropzone";
import { compose } from "redux";
import { withHandlers, withProps, withStateHandlers } from "recompose";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import { withFieldHandlers } from "../Misc/form";

class DragDropUpload extends React.Component {
  classWarning = "warning";

  static defaultProps = {
    isValid: true,
    fileType: "jpg_or_pdf",
    isEditable: true,
    showComponent: true,
    fileType: [],
    onChange: _.noop,
    onRemove: _.noop,
    onError: _.noop,
  };

  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      value: props.value,
      isValid: props.isValid,
      errorMessage: props.errorMessage,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFieldChange =
      this.props.handleValueUpdate && this.props.handleValueUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    const props = this.props;
    if (prevProps.isValid !== props.isValid && !_.isUndefined(props.isValid)) {
      this.setState({
        isValid: props.isValid,
        errorMessage: props.errorMessage,
      });
    }
  }

  handleChange(e, data) {
    const { onChange } = this.props;
    const { value } = data;
    this.setState({
      value,
    });
    onChange(value);
    // withFieldHandlers
    if (_.isFunction(this.handleFieldChange)) {
      const validity = this.handleFieldChange(value, validity => {
        this.setState({
          ...validity,
        });
      });
    }
  }

  render() {
    const { value, isValid, errorMessage } = this.state;
    const {
      id,
      dropzoneActive,
      isEditable,
      showComponent,
      fileType,
      Files,
      title,
      onRemove,
      onError,
      // handlers
      checkUploadedFile,
      setDropzoneActive,
    } = this.props;
    const file = Files[fileType] || {};
    const accept = file.accept;
    const classNames = [
      "df--input input-drag-drop-upload",
      !isEditable && "noteditable",
      !isValid && "warning",
    ];

    const dropzoneRef = React.createRef();

    if (!showComponent) return <span />;

    return (
      <div className={classNames.join(" ")} id={id}>
        <Label {...{ title: title, bold: "true" }} />
        {!value && (
          <div className="upload-area">
            <Dropzone
              className="upload-dropzone field-input"
              disabled={!dropzoneActive}
              multiple={false}
              accept={accept}
              ref={dropzoneRef}
              onDrop={(acceptedFiles, rejectedFiles) => {
                // more than one file
                if (acceptedFiles.length > 1) {
                  onError({
                    type: "file",
                    files: acceptedFiles,
                  });
                  return;
                }

                if (rejectedFiles.length) {
                  onError({
                    type: "reject",
                    files: rejectedFiles,
                  });
                  return;
                }

                const file = acceptedFiles[0];
                const reader = new FileReader();
                const passed = checkUploadedFile(file);

                if (!passed) return;
                // show error message
                if (_.isString(passed)) {
                  onError({
                    type: "file",
                    message: passed,
                  });
                  return;
                }

                setDropzoneActive(false);

                this.handleChange(null, { value: file });
                // Get base64 and generate preview
                reader.addEventListener(
                  "load",
                  function () {
                    var image = new Image();
                    image.height = 100;
                    image.title = file.name;
                    image.src = this.result;
                  },
                  false,
                );

                reader.readAsDataURL(file);
              }}
            />

            <div className="upload-plus-icon">
              <button type="button" onClick={() => dropzoneRef.current.open()}>
                Choose File
              </button>
            </div>

            <div className={"input__message " + (errorMessage ? "input__message--error" : "")}>
              {errorMessage}
            </div>
          </div>
        )}
        {value && (
          <div className="upload-file">
            <div className="filename-box field-input">{value.name}</div>
            <span
              className="close-btn"
              title="Remove File"
              onClick={e => {
                this.setState({
                  value: null,
                });
                setDropzoneActive(true);
                _.isFunction(onRemove) && onRemove({ value, id });
              }}>
              <img src="./static/images/actions/trash.svg" />
            </span>
          </div>
        )}
      </div>
    );
  }
}

const withFileFormatProps = compose(
  withProps(({ fileType = "jpg_or_pdf" }) => {
    return {
      fileType,
      Files: {
        jpg_or_pdf: {
          accept: ".pdf, .jpeg, .jpg",
          formats: ["pdf", "jpeg", "jpg"],
          regex: /^image\/(jpe?g)$|^application\/(pdf)$/i,
        },
        all: {
          accept: "*",
          regex: /.*/,
        },
      },
      defaultLimitedFileSize: 5,
      limitedFileSizeUnit: "MB",
      UnitCalculation: 1024 * 1024,
    };
  }),
);

export default compose(
  withFileFormatProps,
  withStateHandlers(
    () => ({
      dropzoneActive: true,
    }),
    {
      setDropzoneActive: () => dropzoneActive => ({
        dropzoneActive,
      }),
    },
  ),
  withHandlers({
    checkUploadedFile: ({
      fileType,
      limitedFileSizeUnit,
      UnitCalculation,
      Files,
      // formUtils
      showErrorMessage,
    }) => file => {
      if (!file) return false;

      const limitedFileSizeByType = {
        pdf: 5,
        jpg: 2,
        jpeg: 2,
      };
      const extension = file.name.split(".").pop();
      const type = file.type;
      const name = file.name;
      const size = file.size;
      const limitedFileSize = (limitedFileSizeByType[extension] || 5) * UnitCalculation;
      const regex = Files[fileType].regex;
      const isValidFormat = regex ? type.match(regex) : false;
      const isValidFileSize = size <= limitedFileSize;
      const currentSize = (size / UnitCalculation).toFixed(2);
      if (!isValidFormat) {
        const message = `Allowed formats are pdf and jpg/jpeg only`;
        _.isFunction(showErrorMessage) && showErrorMessage(message);
        return message;
      } else if (!isValidFileSize) {
        const message = `Allowed file size is ${limitedFileSizeByType[extension]}
                ${limitedFileSizeUnit}.
                Current file size is ${currentSize} ${limitedFileSizeUnit}`;
        _.isFunction(showErrorMessage) && showErrorMessage(message);
        return message;
      }

      return true;
    },
  }),
  withFieldHandlers,
)(DragDropUpload);
