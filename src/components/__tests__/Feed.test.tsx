import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from '../../store'
import Feed from '../Feed'

describe('ViewButtons', () => {
    test('renders the component', () => {
        const store = createStore()
        render(
            <Provider store={store}>
                <Feed />
            </Provider>
        )

        expect(screen.getByText('List')).toBeInTheDocument()
        expect(screen.getByText('Tiles')).toBeInTheDocument()
    })

    test('changes the view when a button is clicked', () => {
        const store = createStore()
        render(
            <Provider store={store}>
                <Feed />
            </Provider>
        )

        const tilesButton = screen.getByText('Tiles')
        fireEvent.click(tilesButton)

        const state = store.getState()
        expect(state.view.value).toBe('tiles')
    })
})
