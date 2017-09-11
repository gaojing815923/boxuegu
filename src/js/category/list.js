require('../common/header.js');
require('../common/aside.js');
var util = require('../common/util.js');

// $.ajax({
//     url: '/v6/category',
//     type: 'get',
//     success: function(data) {
//         if (data.code == 200) {
//             $('.table-bordered').append(template('category-list-tpl', data.result));
//         }
//     }

// });

$.get('/v6/category', function(data) {
    $('.table-bordered').append(template('category-list-tpl', data.result));
});