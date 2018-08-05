import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import countries from './countries'

export default class RestCountries extends Component {
  state = {
    selectedCountry: {},
    inputValue: ''
  }

  static propTypes = {
    containerStyle: PropTypes.object,
    flagStyle: PropTypes.object,
    selectWrapperStyle: PropTypes.object,
    selectStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    onChange: PropTypes.func.isRequired
  }

  static defaultProps = {
    containerStyle: {},
    flagStyle: {},
    selectWrapperStyle: {},
    selectStyle: {},
    inputStyle: {}
  }

  handleInputChange = ({ target }) => {
    const { onChange } = this.props
    this.setState({ inputValue: target.value })
    onChange(target.value)
  }

  render() {
    const { selectedCountry, inputValue } = this.state
    const {
      containerStyle,
      flagStyle,
      selectWrapperStyle,
      selectStyle,
      inputStyle
    } = this.props
    return (
      <div
        id={'containerStyle'}
        className={css({
          width: '80%',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          ...containerStyle
        })}
      >
        {selectedCountry.flag && (
          <div
            id={'flagStyle'}
            className={css({
              display: 'flex',
              alignItems: 'center',
              padding: 3,
              border: '1px solid #F1F1F1',
              borderRight: 'none',
              ...flagStyle
            })}
          >
            <img width={'38px'} height={'19px'} src={selectedCountry.flag} />
          </div>
        )}

        <div
          id={'selectWrapperStyle'}
          className={css({
            position: 'relative',
            '&::before': {
              content: '"\\25bc"',
              position: 'absolute',
              pointerEvents: 'none',
              color: '#767676',
              top: 7,
              lineHeight: 1,
              right: 5,
              transform: 'scale(0.84, 0.42)',
              '&:focus': {
                outline: 'none'
              }
            },
            ...selectWrapperStyle
          })}
        >
          <select
            id={'selectStyle'}
            className={css({
              background: 'transparent',
              width: '100%',
              height: 27,
              border: '1px solid #F1F1F1',
              borderRadius: 2,
              fontSize: 16,
              paddingLeft: 10,
              appearance: 'none',
              '&:focus': {
                outline: 'none'
              },
              ...selectStyle
            })}
            onChange={({ target: { value } }) =>
              this.setState({
                selectedCountry: {
                  name: countries[value].name,
                  flag: countries[value].flag,
                  code: countries[value].callingCodes
                },
                inputValue: countries[value].callingCodes
              })
            }
          >
            {countries.map((country, index) => (
              <option key={country.name} value={index}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <input
          id={'inputStyle'}
          className={css({
            background: 'transparent',
            width: '100%',
            height: 23,
            border: '1px solid #F1F1F1',
            borderLeft: 'none',
            borderRadius: '0px 1px 1px 0px',
            fontSize: 16,
            paddingLeft: 10,
            appearance: 'none',
            '&:focus': {
              outline: 'none'
            },
            ...inputStyle
          })}
          onChange={this.handleInputChange}
          value={inputValue}
        />
      </div>
    )
  }
}
