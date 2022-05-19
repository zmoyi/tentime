let mix = require('laravel-mix');

mix.less('assets/css/app.less', 'public/css')
    .less('assets/css/galaxy.less', 'public/css')
    .js('assets/js/app.js', 'public/js')
    .js('assets/js/galaxy.js', 'public/js');