/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",

  //Globals is deprecated . Changed it to  transform.
  // globals: {
  //   "ts-jest": {
  //     tsconfig: "tsconfig.jest.json",
  //   },
  // },
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
  },
};
