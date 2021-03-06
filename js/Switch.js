import PropTypes from 'prop-types';
import React from 'react';
import createReactClass from 'create-react-class';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_switch.scss';

const Switch = createReactClass({
  displayName: 'Switch',
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    name: PropTypes.string,
    amStyle: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.bool,
    onValueChange: PropTypes.func,
  },

  getDefaultProps() {
    return {
      classPrefix: 'switch',
      onValueChange: () => {},
    };
  },

  getValue() {
    return this.refs.field.checked;
  },

  render() {
    let classSet = this.getClassSet();
    const {
      name,
      className,
      onValueChange,
      value,
      disabled,
      ...props
    } = this.props;

    delete props.classPrefix;

    return (
      <label
        {...props}
        className={cx(classSet, className)}
      >
        <input
          onChange={onValueChange.bind(this)}
          name={name}
          type="checkbox"
          ref="field"
          defaultChecked={value}
          disabled={disabled}
        />
        <span className={this.prefixClass('label')} />
      </label>
    );
  },
});

export default Switch;
