import { getGreeting } from '../support/app.po';

describe('ch-maker-quiz', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ch-maker-quiz!');
  });
});
