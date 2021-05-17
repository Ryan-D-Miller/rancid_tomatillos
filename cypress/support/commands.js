import movieData from '../../src/movieData'

Cypress.Commands.add('loadMovies', () => {
    const baseURL = 'https://rancid-tomatillos.herokuapp.com/api/v2';

    cy.intercept(`${baseURL}/movies`, movieData);

    cy.visit('/')
})
