import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';

export default class PasswordStrengthMeter extends Component {
    createPasswordLabel = (result) => {
        switch (result.score) {
          case 0:
            return 'Ruim';
          case 1:
            return 'Fraca';
          case 2:
            return 'Intermediária';
          case 3:
            return 'Boa';
          case 4:
            return 'Forte';
          default:
            return 'Ruim';
        }
    }
    render() {
        const { password } = this.props;
        const testedResult = zxcvbn(password);
        return (
          password && (
          <>
            <div className="password-strength-meter">
              <progress className={`password-strength-meter-progress strength-${this.createPasswordLabel(testedResult)}`}
                value={testedResult.score}
                max="4"
              />
              <br />
              <label
                className="password-strength-meter-label"
              >
                {this.createPasswordLabel(testedResult)}
              </label>
            </div>
        </>
      )
    )
  }
}