# Li.Finance - Bridge Analytics Dashboard

![Screenshot](./docs/images/nxtp_daily_volume.png?raw=true)

This projects allows to browse the bridge data aggregated by our [analytics-backend](https://github.com/lifinance/lifi-analytics-backend).

## Creating new components

### `yarn generate:component <ComponentName>`

Example

```
$ yarn generate:component CryptoTitle
```

or

```
$ yarn gc CryptoTitle
```

Generates following component structure:

```
➜ tree src/components/crypto-title
src/components/crypto-title
├── crypto-title-styled.tsx
├── crypto-title.stories.tsx
├── crypto-title.tsx
└── index.ts
```

Make sure to follow this structure:

1. All `styled-components` go into `<name>-styled.tsx` file
2. All storybook definitions go into `<name>.stories.tsx` file
3. `<name>.tsx` is a component's main file name

Feel free to remove files that are not necessary for a given component (say if your component doesn't require `styled-components`)

## Style Guide for Storybook
Select story type ['Components', 'Screens', 'UI', 'Tables', 'Charts']
```
export default {
  title: 'LIFI/Components/Crypto Title',
}
```
Show all states of a component
```
export const Primary = () => <CryptoTitle name="anyswap" />
export const PrimaryNoIcon = () => <CryptoTitle name="anyswap" renderIcon={false} />
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
