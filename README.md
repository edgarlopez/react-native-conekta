# React Native Conekta [![npm version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&type=6&v=2.0.3&x2=0)](http://badge.fury.io/js/react-native-conekta)

***React Native Conekta SDK for iOS and Android***

## Supported React Native Versions
| Component Version     | RN Versions    | README     |
|-----------------------|---------------|------------|
| **>= 2.0.0**          | **>= 0.50**   | [Open](https://github.com/edgarlopez/react-native-conekta/blob/master/README.md)   |

## Installation
`npm install --save react-native-conekta2`

`react-native link`

## Usage
```javascript
import conektaApi from 'react-native-conekta2';

conektaApi.setPublicKey( 'YOUR_PUBLIC_KEY' );

conektaApi.createToken({
  cardNumber: '4242424242424242',
  name: 'Edgar Lopez',
  cvc: '111',
  expMonth: '11',
  expYear: '21',
}, function(data){
  console.log( 'DATA:', data ); // data.id to get the Token ID
}, function(){
  console.log( 'Error!' );
});
```

## iOS Manual Installation (if you did not use `react-native link`)
[Please see: Linking Libraries iOS](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content)

Library folder: `your-project/node_modules/react-native-conekta2/RNConekta`

## Android Manual Installation (if you did not use `react-native link`)
In `android/settings.gradle`

```gradle
...

include ':react-native-conekta2'
project(':react-native-conekta2').projectDir = file('../node_modules/react-native-conekta2/android')
```

In `android/app/build.gradle`

```gradle
...

dependencies {
    ...

    compile project(':react-native-conekta2')
}
```

Manually register module in `MainApplication.java`:

```java
import com.dieam.reactnativeconekta.ReactNativeConektaPackage;  // <--- import

public class MainApplication extends Application implements ReactApplication {

  ......
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
      @Override
      protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
      }

      @Override
      protected List<ReactPackage> getPackages() {

      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ReactNativeConektaPackage() // <---- Add the Package
      );
    }
  };

  ....
}

```
