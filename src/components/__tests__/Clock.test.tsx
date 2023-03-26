import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { vi } from 'vitest'
import Time from '../Time'

describe('Current Time', () => {
    vi.useFakeTimers()

    beforeEach(() => {
        vi.clearAllTimers()
    })

    it('displays the current time', () => {
        render(<Time />)
        const currentTimeText = screen.getByText(/Current Time:/)

        expect(currentTimeText).toBeInTheDocument()
        expect(currentTimeText).toHaveTextContent('Current Time:')

        act(() => {
            vi.advanceTimersByTime(1000)
        })

        expect(currentTimeText).toHaveTextContent('Current Time:')
        expect(currentTimeText).not.toHaveTextContent('Invalid Date')
    })

    it('clears the interval when the component unmounts', () => {
        const { unmount } = render(<Time />)

        expect(vi.getTimerCount()).toBe(1)

        unmount()

        expect(vi.getTimerCount()).toBe(0)
    })
})
