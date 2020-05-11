App.Settings = {
    // properties
        version: '011016',
        sitename: 'Vifi',
        domain: 'vifi.ee',
        skin: 'vifi',
        cookie_name: 'vifi_session',
        cookie_options: {path : '/', domain: '.vifi.ee'},
        purchase_cookie_name: 'film',
        anonymous_username: 'anonymous@vifi.ee',
        debug: false,
        commentsEnabled: true,
        sortingEnabled: true,
        loginEnabled: true,
        language: 'est',
        featured_slides_limit: 6,
        featured_slides_randomize: true,
        featured_slides_autoplay_interval : 6000,
        initial_film_amount: 300,
        google_analytics_enabled: true,
        google_analytics_code: 'UA-33921368-1', //UA-66018559-1',
        rt_api_key: 'ckggf2er2ur93h6kjmxkem5m',
        disqus_shortname: 'vifi',
        image_optimizer_enabled: true,
        image_optimiser_url: '//gonzales.vifi.ee/files/images/image.php',
        page_change_callback: function(title, parameters) {
        },
        Payment: {
            'default_method' : 'code',
            'mobile' : {'autostart' : false }
        },
        /** Player Settings **/

        Player:  {
            defaultMediaPlayer: 'fp7',
            flowplayer_fp6_key: '$202296466927761',
            flowplayer_flash_key:  '#$05466e2f492e2ca07a3',
            flowplayer_html5_key: '$202296466927761',
            flowplayer_fp7_token: 'eyJraWQiOiJMNE5JZWNidlR5T0MiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6NCxcImlkXCI6XCJMNE5JZWNidlR5T0NcIn0iLCJpc3MiOiJGbG93cGxheWVyIn0.Ji_KqLLl5wJm28h1wdv_Lb1QSC-_9NyA7mIZS4HHIlIr6V29c3UYYkFsbo2jZQON35f_PC4xHk7hqLIGwMnJIw',
            hls_url: 'https://media.vifi.ee/vod/vod',
            mp4_url: '//gonzales.vifi.ee/zsf/',
            rtmp_url: 'rtmp://media.vifi.ee/vod',
            speedtest_url: '//gonzales.vifi.ee/files/bwtest.jpg',
            subtitles_url: '//www.vifi.ee/subs/'
        },

        /** API Settings **/

        Api: {
            url: '//gonzales.vifi.ee/api/',
            key: '298fh23hhdff11'
        },

        /** Search Settings **/

        Search: {

            default_query_params: {
                  totalPages: null,
                  totalRecords: null,
                  sortKey: 'sort',
                  limit: 400
            },

            // Initial pagination states
            // You can remap the query parameters from `state` keys from
            // the default to those your server supports

            default_search_state: {
                q:'',
                genres: undefined,
                periods: undefined,
                durations: undefined
            },

            default_pagination_state: {
                pageSize: 12,
                sortKey: 'updated_at',
                order: 0,
            }
        }
}

App.Translations = {
        'est' : {
            'Eesti' : 'Eesti',
            'English' : 'Inglise',
            'Clear' : 'Puhasta',
            'Change password': 'Vaheta parool',
            'Create password': 'Loo parool',
            'No results' : 'Antud otsinguga tulemusi ei leitud. Täpsustage palun otsingut ja kontrollige üle ka teised filtrid (kategooria, kestvus, aasta)',
            'No purchases' : 'Ei ostusid',
            'You have registered successfully' : 'Registreerimine õnnestus',
            'Fill all the fields' : 'Täida kõik väljad',
            'Passwords do not match' : 'Paroolid pole samad',
            'Thank you' : 'Tänud!',
            'No' : 'Ei',
            'Yes' : 'Jah',
            'Invalid code' : 'Vale kood',
            'All Genres' : 'Kõik genred',
            'Hours' : 'Tundi',
            'Days' : 'Päeva',
            'Weeks' : 'Nädala',
            'Months' : 'Kuud',
            'Timed out' : 'Helistamiseks mõeldud aeg on läbi ja makset ei toimunud. Kui soovid siiski piletit tellida, vajuta allolevat nuppu.',
            'Invalid merchant' : 'Makse ei õnnestunud, palun proovi uuesti. Probleemi kordumisel võta ühendust teenusepakkuja klienditoega',
            'Transaction cannot be completed.': 'Makse ei ole lubatud. M-makse lubamiseks palun võta ühendust mobiilioperaatori klienditoega',
            'Requested function code not supported':'Makse ei õnnestunud, palun proovi uuesti. Probleemi kordumisel võta ühendust teenusepakkuja klienditoega',
            'Insufficient funds':'Kontol pole piisavalt vahendeid või on lubatud limiit ületatud. Palun võta ühendust mobiilioperaatori klienditoega',
            'Transaction is not permitted':'Makse ei ole lubatud. M-makse lubamiseks palun võta ühendust mobiilioperaatori klienditoega.',
            'Exceeds withdrawal amount limit':'Summa ületab lubatud päevalimiidi',
            'Accepted':'Makse ei õnnestunud, palun proovi uuesti. Probleemi kordumisel võta ühendust teenusepakkuja klienditoega',
            'Invalid transaction':'Makse ei õnnestunud, palun proovi uuesti. Probleemi kordumisel võta ühendust teenusepakkuja klienditoega',
            'Format error':'Makse ei õnnestunud, palun proovi uuesti. Probleemi kordumisel võta ühendust teenusepakkuja klienditoega',
            'System malfunction':'Makse ei õnnestunud, palun proovi uuesti. Probleemi kordumisel võta ühendust teenusepakkuja klienditoega',
            'Time out waiting for response':'Makse ei õnnestunud, palun proovi uuesti. Probleemi kordumisel võta ühendust teenusepakkuja klienditoega',
            'Duplicate transaction':'Makse ei õnnestunud, palun proovi uuesti. Probleemi kordumisel võta ühendust teenusepakkuja klienditoega',
            'Original transaction missing' :'Makse ei õnnestunud, palun proovi uuesti. Probleemi kordumisel võta ühendust teenusepakkuja klienditoega',
            'Transaction in progress' :'Makse ei õnnestunud, palun proovi uuesti. Probleemi kordumisel võta ühendust teenusepakkuja klienditoega'
        },
        'en' : {
            'eesti' : 'Estonian',
            'english' : 'English',
            'No results' : 'Ei tulemusi',
            'Timed out' : 'Timed out'
        }

}
