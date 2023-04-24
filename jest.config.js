// eslint-disable-next-line import/extensions
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './src',
});

/** @type {import('jest').Config} */
const config = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@app/(.*)$': '<rootDir>/src/app/$1',
		'^@assets/(.*)$': '<rootDir>/src/assets/$1',
		'^@pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@components/(.*)$': '<rootDir>/src/components/$1',
	},
};

export default createJestConfig(config);
