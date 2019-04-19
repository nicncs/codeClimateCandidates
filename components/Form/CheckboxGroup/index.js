import React from "react";
import _ from "underscore";

import IECheckboxGroup from "./IECheckboxGroup";
import ErrorMessage from "./ErrorMessage";
import Label from "./../Label";
import { withFieldHandlers } from "../../Misc/form";
import { compose } from "recompose";

class BaseCheckboxGroup extends React.Component {
  classWarning = "warning";

  static defaultProps = {
    value: [],
    className: "",
    fieldname: {},
    label: {},
    options: [],
    isValid: true,
    isEditable: true,
    showComponent: true,
    onChange: _.noop,
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
    const { value } = data;
    this.setState({
      value,
    });
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
    let { value, isValid, errorMessage } = this.state;
    const {
      className,
      fieldname,
      // option
      type,
      id,
      title,
      label,
      name,
      options,
      onChange,
      isEditable,
      columns,
      // utils
      showComponent,
      path,
    } = this.props;
    const onAnyCheckboxChanged = onChange;
    const classNames = [
      "df--input input__checkbox",
      _.isString(className) && className,
      !isValid && this.classWarning,
      !isEditable && "noteditable",
    ];
    if (!_.isArray(value)) {
      value = [];
      // console.error('\'value\' for Checkbox has to be an array');
    }

    if (!showComponent) return <div />;

    return (
      <div className={classNames.join(" ")} id={id}>
        {label && <Label className={"input__label--top"} {...label} />}

        <IECheckboxGroup
          name={"checkbox"}
          columns={columns}
          checkboxes={options}
          isEditable={isEditable}
          selectedValue={value}
          onAnyCheckboxChanged={(e, data) => {
            onChange && onChange(e, data);
            this.handleChange(e, data);
          }}
        />

        <ErrorMessage message={errorMessage} />
      </div>
    );
  }
}

export default compose(withFieldHandlers)(BaseCheckboxGroup);

export { IECheckedCheckboxGroup };
