# Getting Started with Create React App with TypeScript

To create a New React app with TypeScript

### `npx create-react-app my-app --template typescript`

in command above my-app can be replaced by your project name

the above command will create a react app with TypeScript configured for you - please check `tsconfig.json` file

for more details : https://create-react-app.dev/docs/adding-typescript/

## Specific to this Repo

This repo has a very basic card component for Explaning TS with React component, that is `UserCard`

If you check the UserCard.tsx file there you will find a type is created called UserCardProps that defined the types of props that can be passed to the component.

Please also check comments in same file

### Lets understand each props of the component care fully

\* means mandatory props

- userName\*: string
- age\*: number
- teamMember: array of strings
- gender\*: "Male" | "Female" | "LGBTQA+" (predined format also called unions in ts)
- image\*: an Object with properties - alt: string and src: string
- withHoverEffect: this is a boolean value, but you dont need to pass any boolean value specificly, as if ignored this props it will be undefined (falsly) and if you pass this props it will be true.

that's it for a Basic TS component, please feel free to ping me for any assitance

Himanshu Bari

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
