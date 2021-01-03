import React from "react";
import {TodoForm} from "./App";
import {mount} from 'cypress-react-unit-test'

describe('TodoForm', () => {
  it('ignores empty input', () => {
    const addTodo = cy.stub()
    mount(<TodoForm addTodo={addTodo} />)
    cy.get('input').type('{enter}')
    .then(() => {
      /* eslint-disable-next-line */
      expect(addTodo).not.have.been.called
    })

    cy.get('input').type('hello there{enter}')
    .then(() => {
      expect(addTodo).to.be.calledWith('hello there')
    })
  })
})
