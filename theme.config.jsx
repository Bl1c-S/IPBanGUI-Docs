export default {

    logo:<div className="nx-flex nx-items-center">
        <img className="nx-mr-2" src="/assets/logo.png" alt="Logo" style={{ width: 'auto', height: '30px' }}/>
        <span>Torgsoft IPBanGUI</span>
    </div>
        ,
    project: {
        link: 'https://github.com/Bl1c-S/IPBanGUI'
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Torgsoft IPBanGUI Docs" />
            <meta property="og:description" content="Керівництво по киристуванню програмою IPBanGUI" />
            <link rel="icon" href="/assets/logo.png"/>
        </>
    ),
    search: {
        placeholder: "Пошук"
    },
    toc:{
            title: ()=><label>На цій сторінці:</label>
    },
    themeSwitch: {
        useOptions() {
            return {
                light: 'Світла',
                dark: 'Темна',
                system: 'Система'
            }
        }
    },
    feedback:{
        content: ()=><label className="nx-text-sm">Зявились запитання чи пропозиції?</label>,
        labels: "Зявились запитання чи пропозиції?",
        useLink: () =>"https://github.com/Bl1c-S/IPBanGUI/discussions"
    },
    editLink: {
            component: null
        },


    useNextSeoProps() {
        return {
            titleTemplate: '%s - IPBanGUI'
        }
    }
}