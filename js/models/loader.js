var loaderGif = 'http://www.fliks.co.uk/assets/desktop/images/loading.gif'

        $('.film-list').infinitescroll({
            loading: {
                finished: undefined,
                finishedMsg: "Nothing more to see here.",
                img: loaderGif,
                msg: null,
                msgText: '',
                selector: null,
                speed: 0,
                start: undefined
            },
            state: {
                isDuringAjax: false,
                isInvalidPage: false,
                isDestroyed: false,
                isDone: false, // For when it goes all the way through the archive.
                isPaused: false,
                currPage: 1
            },
            debug: false,
            behavior: undefined,
            binder: $(window), // used to cache the selector for the element that will be scrolling
            nextSelector: ".pager a.pager-next",
            navSelector: ".pager",
            contentSelector: ".film-list", // rename to pageFragment
            extraScrollPx: 150,
            itemSelector: "li.el-element",
            animate: false,
            pathParse: undefined,
            dataType: 'html',
            appendCallback: true,
            bufferPx: 40,
            errorCallback: function () { },
            infid: 0, //Instance ID
            pixelsFromNavToBottom: undefined,
            path: undefined, // Can either be an array of URL parts (e.g. ["/page/", "/"]) or a function that accepts the page number and returns a URL
            prefill: false, // When the document is smaller than the window, load data until the document is larger or links are exhausted
            maxPage:undefined // to manually control maximum page (when maxPage is undefined, maximum page limitation is not work)
            },
            function(newElements) {
                var $newElements = $(newElements);
                $filmlist.isotope('appended', $(newElements));
                // $newElements.imagesLoaded(function(){

                // });

            }
        );
    }
