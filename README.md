# React Native Navigation + MobX (w/ Provider) Boilerplate 😋

A simple boilerplate based on MobX (w/ Provider) instead of Redux and [wix/react-native-navigation](https://github.com/wix/react-native-navigation).

##### Structure
- `startTabBasedApp` with `Drawer`
- `Drawer` supports `.push({...})`s for the first tab through MobX: `Stores.App.rootNavigator.push({...})`. You can change `.rootNavigator` in any component. (based on [this issue](https://github.com/wix/react-native-navigation/issues/1143))
- `MobX Provider`. Now all components can use `@inject('App', 'Counter', ...)` for accessing stores through `const { App, Counter } = this.props;`. (based on [this comment](https://github.com/wix/react-native-navigation/issues/187#issuecomment-265946012))

##### What's in package.json
- `react-native v='0.43.4'`
- `react v='16.0.0-alpha.6'`
- `react-native-navigation v='1.1.45'`
- `mobx v='^3.1.9'`
- `mobx-react v='^4.1.8'`

# Installation

1. Clone this repo: `git clone https://github.com/kanzitelli/react-native-navigation-mobx-boilerplate.git`
2. Install node modules: `cd react-native-navigation-mobx-boilerplate && npm i -S`
3. Rename application using [react-native-rename](https://github.com/junedomingo/react-native-rename) if needed.
4. `react-native run-ios` or `react-native run-android`
5. Enjoy :)

Thanks to [@megahertz](https://github.com/megahertz) for sharing the [gist](https://github.com/wix/react-native-navigation/issues/187#issuecomment-265946012) that shows how to create a mobx Provider which can be used with RNN.

[![Sample Video](https://img.youtube.com/vi/ZdJ4Xln5cC0/0.jpg)](https://www.youtube.com/watch?v=ZdJ4Xln5cC0)
