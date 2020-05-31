#!/bin/sh
 
routes=("js/settings.js" "js/router.js" "js/models/models.js" "js/models/platform.js" "js/models/utils.js" "js/models/user.js" "js/models/session.js" "js/models/player.js" "js/models/playlist.js" "js/models/purchase.js" "js/collections/collections.js" "js/models/forms.js" "js/views/app.js" "js/views/films.js" "js/views/filterbar.js" "js/views/detailpage.js" "js/views/purchase.js" "js/views/player.js" "js/views/user.js" "js/views/facebook.js" "js/views/browser.js" "js/init.js")

FILES=$(printf " %s " "${routes[@]}")
uglifyjs $FILES >js/packed.js

