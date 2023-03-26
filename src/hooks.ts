import { useQuery } from 'react-query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { getCountryNews } from './components/CountryFeed'
import { getNews } from './components/Feed'
import { AppDispatch, RootState } from './store'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export function useNewsQuery() {
    return useQuery('news', getNews)
}

export function useCountryNewsQuery(kraj: string) {
    return useQuery(['countryNews', kraj], () => getCountryNews(kraj))
}
