# React Countries Input

> A React Component for to select countries calling code with flag inspired on restcountries.eu api and [emotion](https://emotion.sh/) to style.

## Getting Started

```shell
yarn add react-countries-input
or
npm install react-countries-input --save
```

## How to use

### Basic

```js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactCountriesInput from 'react-countries-input'

class MyComponent extends React.Component {
  onChange = value => {
    console.log(response)
  }

  render() {
    return <ReactCountriesInput onChange={this.onChange} />
  }
}

export default MyComponent
```

## Parameters

|       params       |  value   | default value |
| :----------------: | :------: | :-----------: |
|      onChange      | function |   Required    |
|   containerStyle   |  object  |     none      |
|     flagStyle      |  object  |     none      |
| selectWrapperStyle |  object  |     none      |
|     inputStyle     |  object  |     none      |

## Styling example

Since this package is using [emotion](https://emotion.sh/) you can style like you would with [emotion](https://emotion.sh/)

```js
import React from 'react'
import ReactCountriesInput from 'react-linkedin-sdk'

class MyComponent extends React.Component {
  onChange = value => {
    console.log(response)
  }

  render() {
    return (
      <ReactCountriesInput
        onChange={this.onChange}
        containerStyle={{
          background: 'red'
        }}
        flagStyle={{
         '&img': {
           width: 30
           height: 15
         }
        }}
        .....
      />
    )
  }
}


export default MyComponent
```
