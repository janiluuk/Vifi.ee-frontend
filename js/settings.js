App.Settings = {
    // properties
        version: '011016',
        sitename: 'Vifi',
        domain: 'vifi.ee',        
        skin: 'vifi',
        cookie_name: 'vifi_session',        
        debug: false,
        commentsEnabled: true,
        sortingEnabled: true,
        loginEnabled: true,
        language: 'est',
        featured_slides_limit: 6,
        initial_film_amount: 300,        
        google_analytics_enabled: true,
        google_analytics_code: 'UA-33921368-1', //UA-66018559-1',
        rt_api_key: 'ckggf2er2ur93h6kjmxkem5m',
        disqus_shortname: 'vifi',
        image_optimizer_enabled: true,
        image_optimiser_url: '//gonzales.vifi.ee/files/images/image.php',


        /** Player Settings **/

        Player:  {
            flowplayer_flash_key:  '#$05466e2f492e2ca07a3',
            flowplayer_html5_key: '$202296466927761',            
            hls_url: '//media.vifi.ee:1935/tv',
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
            'Months' : 'Kuud'
        },
        'en' : { 
            'eesti' : 'Estonian',
            'english' : 'English',
            'No results' : 'Ei tulemusi'
        }
 
}
