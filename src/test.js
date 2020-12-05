import React from 'react';
import { MyContext, TestContext } from './context';

export default (props) => {
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <TestContext.Consumer>
            {(testContext) => {
              return (
                <>
                  <h1>Test Component: { testContext.test} {context.count} {context.name}</h1>
                  <button onClick={context.increment}>Increment</button>
                  <button onClick={context.decrement}>Decrement</button>
                </>
              )
            }
            }
          </TestContext.Consumer>
        )
      }
      }
    </MyContext.Consumer>
  )
}

