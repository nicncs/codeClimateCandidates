import React from "react";
import { Checkbox } from "semantic-ui-react";
import _ from "underscore";

const CheckboxGroup = props => {
  let { columns, checkboxes, isEditable, selectedValue, onAnyCheckboxChanged } = props;

  const checkboxGroup = checkboxes.map((checkbox, i) => {
    const { title, name, value, onChange } = checkbox;
    const atIndex = selectedValue.indexOf(value);
    const checked = atIndex > -1;
    const classNames = [
      "input__checkbox-option col-xs-12",
      columns <= 12 && `row col-sm-${columns}`,
    ];

    return (
      <Checkbox
        key={i}
        className={classNames.join(" ")}
        label={title}
        name={name}
        value={value}
        checked={!!checked}
        readOnly={!isEditable}
        onClick={function(e, data) {
          const values = _.clone(selectedValue) || [];
          const indexAt = values.indexOf(value);
          const found = indexAt > -1;

          if (!found) {
            values.push(value);
          } else {
            values.splice(indexAt, 1);
          }

          const checkboxData = {
            ...data,
            index: i,
            value: values,
            selectedValue: value,
          };

          onChange && onChange(e, checkboxData);
          onAnyCheckboxChanged && onAnyCheckboxChanged(e, checkboxData);
        }}
      />
    );
  });

  return <div className="checkboxes-wrapper">{checkboxGroup}</div>;
};

CheckboxGroup.defaultProps = {
  checkboxes: [],
  selectedValue: [],
  isEditable: true,
};

export default CheckboxGroup;
