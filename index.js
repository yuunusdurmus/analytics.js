var Pages = require('./page-specific/pages');

window.currentPage = 'HOME';

function init() {
    Pages.list.forEach(function(page){
        if(page.selector == window.currentPage){
            page.tracker();
        }
    })
}

init();

