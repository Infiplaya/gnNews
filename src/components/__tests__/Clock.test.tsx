import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { vi } from 'vitest'
import Clock from '../Time'

describe('Clock', () => {
    // Mocking the setInterval and clearInterval functions
    vi.useFakeTimers()

    beforeEach(() => {
        vi.clearAllTimers()
    })

    it('displays the current time', () => {
        render(<Clock />)
        const currentTimeText = screen.getByText(/Current Time:/)

        expect(currentTimeText).toBeInTheDocument()
        expect(currentTimeText).toHaveTextContent('Current Time:')

        // Fast-forward 1 second to trigger the setInterval callback
        act(() => {
            vi.advanceTimersByTime(1000)
        })

        expect(currentTimeText).toHaveTextContent('Current Time:')
        expect(currentTimeText).not.toHaveTextContent('Invalid Date')
    })

    it('clears the interval when the component unmounts', () => {
        const { unmount } = render(<Clock />)

        expect(vi.getTimerCount()).toBe(1)

        unmount()

        expect(vi.getTimerCount()).toBe(0)
    })
})
