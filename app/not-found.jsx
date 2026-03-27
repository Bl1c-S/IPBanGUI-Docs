import { NotFoundPage } from 'nextra-theme-docs'

export default async function NotFound() {
    return (
        <NotFoundPage content="Сповістити про відсутній редірект" labels="broken-link">
            <h1>Сторінку не знайдено</h1>
        </NotFoundPage>
    )
}