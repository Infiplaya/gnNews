import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../store'
import ViewButtons from '../ViewButtons'

describe('ViewButtons', () => {
    test('renders the component', () => {
        render(
            <Provider store={store}>
                <ViewButtons />
            </Provider>
        )

        expect(screen.getByText('List')).toBeInTheDocument()
        expect(screen.getByText('Tiles')).toBeInTheDocument()
    })

    test('changes the view when a button is clicked', () => {
        render(
            <Provider store={store}>
                <ViewButtons />
            </Provider>
        )

        const tilesButton = screen.getByText('Tiles')
        fireEvent.click(tilesButton)

        const state = store.getState()
        expect(state.view.value).toBe('tiles')
    })
})
