import { Button } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '../hooks'
import { changeView } from '../store'

export default function ViewButtons() {
    const view = useAppSelector((state) => state.view.value)

    const dispatch = useAppDispatch()

    function handleClick(view: 'list' | 'tiles') {
        dispatch(changeView(view))
    }

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <Button
                onClick={() => handleClick('list')}
                variant={view === 'list' ? 'gradient' : 'outline'}
            >
                List
            </Button>
            <Button
                onClick={() => handleClick('tiles')}
                variant={view === 'tiles' ? 'gradient' : 'outline'}
            >
                Tiles
            </Button>
        </div>
    )
}
