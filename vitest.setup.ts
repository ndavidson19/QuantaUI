// vitest.setup.ts
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock matchMedia if needed
global.matchMedia = global.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

// Setup any global mocks or configurations here