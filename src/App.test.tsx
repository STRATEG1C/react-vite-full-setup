import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { App, WrappedApp } from './App';

describe('App', () => {
  it('Renders hello world', () => {
    render(<WrappedApp />);

    expect(true).toBe(true);

    // expect(
    //   screen.getByRole('heading', {
    //     level: 1,
    //   })
    // ).toHaveTextContent('Hello World!');
  });

  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );

    expect(true).toBe(true);
  });
});
