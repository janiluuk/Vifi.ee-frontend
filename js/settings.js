App.Settings = {
    // properties
        sitename: 'Vifi',
        skin: 'vifi',
        version: '010315',
        debug: false,
        commentsEnabled: true,
        sortingEnabled: true,
        loginEnabled: true,
        language: 'est',
        featured_slides_limit: 6,
        flowplayer_flash_key:  '#$05466e2f492e2ca07a3',
        flowplayer_html5_key: '$202296466927761',
        google_analytics_code: 'UA-66018559-1',
        initial_film_amount: 300,
        domain: 'vifi.ee',
        api_key: '298fh23hhdff11',
        rt_api_key: 'ckggf2er2ur93h6kjmxkem5m',
        disqus_shortname: 'vifi',
        api_url: "http://gonzales.vifi.ee/api/",
        rtmp_url: "rtmp://media.vifi.ee/vod",
        hls_url: "http://media.vifi.ee:1935/tv",
        subtitles_url: "http://beta.vifi.ee/subs/",
        mp4_url: "http://gonzales.vifi.ee/zsf/",
        speedtest_url: 'http://backend.vifi.ee/files/bwtest.jpg',    

        /** Search Settings **/

        Search: {

            default_query_params: { 
                  totalPages: null,
                  totalRecords: null,
                  sortKey: "sort",
                  limit: 400
            },
 
            // Initial pagination states
            // You can remap the query parameters from `state` keys from
            // the default to those your server supports

            default_search_state: { 
                q:"", 
                genres: undefined, 
                periods: undefined, 
                durations: undefined
            },

            default_pagination_state: { 
                pageSize: 12,
                sortKey: "updated_at",
                order: 1,
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
            'No' : 'Ei',
            'Yes' : 'Jah',
            'Invalid code' : 'Vale kood',
            'All Genres' : 'Kõik genred'
        },
        'en' : { 
            'eesti' : 'Estonian',
            'english' : 'English',
            'No results' : 'Ei tulemusi'

        }
 
}