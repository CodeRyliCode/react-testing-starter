import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
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



/*In this test, we also want to render the transaction create step 2 with these props. 
We want to mimic the event where the user is entering an amount and adds a note*/
test('if an amount and note is entered, the pay button becomes enabled', async () => {

    render(<TransactionCreateStepTwo sender={{id: '5'}} receiver={{id: '5'}} />)

userEvent.type(screen.getByPlaceholderText(/amount/i), "50")
userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner")

expect(await screen.findByRole('button', {name: /pay/i})).toBeEnabled();

} );


/* Good practice is if you're making an assertion, first do it the opposite side and then make it so 
the test will pass just to be sure there on no bugs or strange things going on */