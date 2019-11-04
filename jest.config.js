module.exports = {
  verbose: true,
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
