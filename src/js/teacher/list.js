require('../common/header.js');
require('../common/aside.js');

$.get('/v6/teacher', function(data) {
    $('#teacher-list-table').append(template('teacher-list-tpl', data.result));
});