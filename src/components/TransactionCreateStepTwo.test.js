import { render, screen } from "@testing-library/react"
import TransactionCreateStepTwo from "./TransactionCreateStepTwo"

test('on initial render, the pay button is disabled', async () => {
    //The first thing I have to do is render this component so I will say
render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}} />)

/*name should equal pay. It's a case insensitive search. In this app, there is a formik
error where the pay button is enabled for half a second then is disabled. Because of this
we need to use async await. Since we use async await, instead of getByRole, we use
findByRole */
expect(await screen.findByRole('button', {name: /pay/i})).toBeDisabled();
} );


/* Good practice is if you're making an assertion, first do it the opposite side and then make it so 
the test will pass just to be sure there on no bugs or strange things going on */