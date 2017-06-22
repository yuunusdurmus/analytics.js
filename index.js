var Pages = require('./page-specific/pages');

function init() {
    Pages.list.forEach(function(page){
        if(page.selector == 'any'){
            page.tracker();
        }else if(page.selector == window.GLOBALS.page){
            page.tracker();
        }
    })
}

init();
