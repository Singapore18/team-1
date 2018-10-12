module.exports = {
	parser: "babel-eslint",
	env: {
	  es6: true,
	  node: true,
	  browser: true
	},
	parserOptions: {
	  ecmaVersion: 6,
	  sourceType: "module",
	  ecmaFeatures: {
		jsx: true
	  }
	},
	plugins: ["react"],
	extends: [
	  "eslint:recommended",
	  "plugin:react/recommended",
	  "plugin:prettier/recommended"
	],
	"settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "16.4.1" // React version, default to the latest React stable release
    },
    "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
                                                   // propTypes object, e.g. `forbidExtraProps`.
                                                   // If this isn't set, any propTypes wrapped in
                                                   // a function will be skipped.
  }
};
  