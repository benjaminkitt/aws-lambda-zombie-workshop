var gulp = require("gulp");
var s3 = require("gulp-s3");
var fs = require('fs');


gulp.task('dist', function() {
    return gulp.src(['index.html', 'app/**/*', 'assets/**/*'])
        .pipe(gulp.dest('dist/S3'));
});


gulp.task('publish', ["dist"], function() {
    var aws = JSON.parse(fs.readFileSync('aws.json'));
    return gulp.src('dist/**')
        .pipe(s3(aws));

});