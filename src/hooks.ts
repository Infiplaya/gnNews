import { useQuery } from 'react-query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { getCountryNews } from './utils/getCountryNews'
import { getNews } from './utils/getNews'
import { AppDispatch, RootState } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useNewsQuery() {
    return useQuery('news', getNews)
}

export function useCountryNewsQuery(kraj: string) {
    return useQuery(['countryNews', kraj], () => getCountryNews(kraj))
}
