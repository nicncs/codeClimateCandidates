import React from "react";
import moment from "moment";
import _ from "underscore";
import { compose, withStateHandlers } from "recompose";

const IECheckboxGroup = props => {
  let { name, columns, checkboxes, isEditable, selectedValue, onAnyCheckboxChanged } = props;
  // checkboxes = [{title: 'value', value: 'value'},{title: 'value', value: 'value1'}];
  const checkboxGroup = checkboxes.map((checkbox, i) => {
    const { title, name, value, onChange } = checkbox;
    const atIndex = selectedValue.indexOf(value);
    const checked = atIndex > -1;
    const classNames = ["checkbox-wrapper col-xs-12", columns <= 12 && `col-sm-${columns}`];
    const wrapperCls = [checked && "checked", "checkbox-box-wrapper"];

    return (
      <div
        key={i}
        className={classNames.join(" ")}
        onClick={e => {
          if (!isEditable) return;
          const values = _.clone(selectedValue) || [];
          const indexAt = values.indexOf(value);
          const found = indexAt > -1;

          if (!found) {
            values.push(value);
          } else {
            values.splice(indexAt, 1);
          }

          onChange &&
            onChange(e, {
              selectedValue: values,
              value: values,
              checked: !found,
            });
          onAnyCheckboxChanged &&
            onAnyCheckboxChanged(e, {
              index: i,
              value: values,
              checked: !found,
            });
        }}>
        <div className="checkbox-label">
          <div className={wrapperCls.join(" ")}>
            <div className="checkbox-box">{checked && <div className="checked-box-shape" />}</div>
          </div>
          {title}
        </div>
        <input
          className="checkbox-option"
          type="checkbox"
          name={name}
          value={value}
          title={title}
          checked={checked}
          onChange={_.noop}
        />
      </div>
    );
  });

  return <div className="checkboxes-wrapper">{checkboxGroup}</div>;
};

IECheckboxGroup.defaultProps = {
  checkboxes: [],
  selectedValue: [],
  isEditable: true,
};

export default compose(
  withStateHandlers(() => {
    const timestamp = moment().toISOString();
    const name = `checkbox${timestamp}`;
    return {
      name,
    };
  }),
)(IECheckboxGroup);
