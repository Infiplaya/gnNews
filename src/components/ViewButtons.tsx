import { Button } from '@mantine/core'
import { useAppDispatch, useAppSelector } from '../hooks'
import { changeView } from '../store'
import { useTranslation } from 'react-i18next'

export default function ViewButtons() {
    const view = useAppSelector((state) => state.view.value)
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    function handleClick(view: 'list' | 'tiles') {
        dispatch(changeView(view))
    }

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <Button
                onClick={() => handleClick('list')}
                variant={view === 'list' ? 'gradient' : 'outline'}
                size={'xs'}
            >
                {t('view.list')}
            </Button>
            <Button
                onClick={() => handleClick('tiles')}
                variant={view === 'tiles' ? 'gradient' : 'outline'}
                size={'xs'}
            >
                {t('view.tiles')}
            </Button>
        </div>
    )
}
