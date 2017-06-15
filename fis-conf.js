fis.set('project.files', ['page/**','map.json']);
fis.set('project.md5Length', 8);
//发布为相对路径，同时需要修改15行
fis.hook('relative');
fis.match('**', {
    relative: true
})