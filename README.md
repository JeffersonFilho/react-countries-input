# React Countries Input

> A React Component for to select countries calling code with flag inspired on [restcountries.eu](restcountries.eu) api and [emotion](https://emotion.sh/) to style.

## Getting Started

```shell
yarn add react-countries-input
or
npm install react-countries-input --save
```

## Demo

[![Demo](https://i.gyazo.com/0a2974e4a7fb55fe750e58a1e0f71f21.gif)](https://gyazo.com/0a2974e4a7fb55fe750e58a1e0f71f21)
[![Demo2](https://i.gyazo.com/1316a60b2137dcd450ad5b85b523742a.gif)](https://gyazo.com/1316a60b2137dcd450ad5b85b523742a)

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
