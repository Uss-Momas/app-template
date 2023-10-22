/* eslint-env es6 */
/* eslint-disable */

import gulp from "gulp";
import newer from "gulp-newer";
import imagemin from "gulp-imagemin";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer"
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import lodash from "lodash";
import browsersync from "browser-sync";
import fileinclude from "gulp-file-include";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);



const folder_dist = {
    src: "src/", // source files
    dist: "dist/", // build files
    dist_assets: "dist/assets/" //build assets files
};

const folder_from = {
    images: folder_dist.src + "assets/images/**/*", // images files
    scss: folder_dist.src + "assets/scss/", // scss assets files
    js: folder_dist.src + "assets/js/", //js assets files
    vendors_js: folder_dist.dist + "assets/libs/", //vendor js assets files
    data: folder_dist.src + "assets/data/", //vendor data assets files
    pdf: folder_dist.src + "assets/pdf/" //assets pdf files
}


// image processing
function imageMin() {
    var out = folder_dist.dist_assets + "images";
    return gulp
        .src(folder_from.images)
        .pipe(newer(out))
        .pipe(imagemin())
        .pipe(gulp.dest(out));
}


// copy html files from src folder to dist folder, also copy favicons
function html() {
    var out = folder_dist.dist;

    return gulp
        .src([
            folder_dist.src + "*.html",
            folder_dist.src + "*.ico", // favicons
            folder_dist.src + "*.png"
        ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(gulp.dest(out));
}

// compile & minify sass
function css(done) {
    // var scss = ["bootstrap.scss", "styles.scss"]
    // .pipe(sourcemaps.init({ loadMaps: true }))
    // .pipe(sass().on('error', sass.logError))
    // .pipe(sourcemaps.write('../maps'))
    var scss = ["bootstrap.scss", "styles.scss"]
    lodash(scss).forEach(function (assets) {
        gulp
            .src([folder_from.scss + assets])
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sass().on('error', sass.logError))
            .pipe(
                autoprefixer()
            )
            .pipe(gulp.dest(folder_dist.dist_assets + "css/"))
            .pipe(cleanCSS())
            .pipe(
                rename({
                    // rename app.css to icons.min.css
                    suffix: ".min"
                })
            )
            .pipe(sourcemaps.write('./map'))
            .pipe(gulp.dest(folder_dist.dist_assets + "css/"));
    });
    done();
}

// compile & minify sass
function icons() {
    return gulp
        .src([folder_from.scss + "icons.scss"])
        .pipe(sourcemaps.init())
        .pipe(sass()) // scss to css
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 2 versions"]
            })
        )
        .pipe(gulp.dest(folder_dist.dist_assets + "css/"))
        .pipe(cleanCSS())
        .pipe(
            rename({
                // rename app.css to icons.min.css
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps for icons.min.css
        .pipe(gulp.dest(folder_dist.dist_assets + "css/"));

}
icons();

function copyJStoDistOnChange(done) {
    var out = folder_dist.dist_assets + "js/";

    //copying demo pages related assets
    var app_pages_assets = {
        js: [
            folder_from.js + "pages/dashboard.init.js",
            folder_from.js + "pages/dashboard2.init.js",
            folder_from.js + "pages/dashboard3.init.js",
            folder_from.js + "pages/vectormap.init.js",
            folder_from.js + "pages/calender.init.js",
            folder_from.js + "pages/chat.init.js",
            folder_from.js + "pages/member-list.init.js",
            folder_from.js + "pages/member-profile.init.js",
            folder_from.js + "pages/invoicelist.init.js",
            folder_from.js + "pages/invoice-create.init.js",
            folder_from.js + "pages/project-list.init.js",
            folder_from.js + "pages/create-project.init.js",
            folder_from.js + "pages/taskboard.init.js",
            folder_from.js + "pages/create-task.init.js",
            folder_from.js + "pages/ecommerce-checkout.init.js",
            folder_from.js + "pages/ecommerce-add-product.init.js",
            folder_from.js + "pages/ecommerce-cart.init.js",
            folder_from.js + "pages/ecommerce-customer.init.js",
            folder_from.js + "pages/ecommerce-order.init.js",
            folder_from.js + "pages/ecommerce-product.init.js",
            folder_from.js + "pages/ecommerce-product-detail.init.js",
            folder_from.js + "pages/inbox.init.js",
            folder_from.js + "pages/readmail.init.js",
            folder_from.js + "pages/compose-mail.init.js",

            folder_from.js + "pages/utility-animation.init.js",
            folder_from.js + "pages/utility-coming-soon.init.js",
            folder_from.js + "pages/utility-fix-right.init.js",
            folder_from.js + "pages/utility-fix-left.init.js",
            folder_from.js + "pages/utility-gallery.init.js",
            folder_from.js + "pages/utility-lightboxinit.js",
            folder_from.js + "pages/utility-scrollbar.init.js",
            folder_from.js + "pages/utility-timeline.init.js",

            folder_from.js + "pages/task-overview.init.js",
            folder_from.js + "pages/task-list.init.js",
            folder_from.js + "pages/project-overview.init.js",

            folder_from.js + "pages/treeview.init.js",
            folder_from.js + "pages/nestable.init.js",
            folder_from.js + "pages/range-sliders.init.js",
            folder_from.js + "pages/dragula.init.js",
            folder_from.js + "pages/sweet-alerts.init.js",
            folder_from.js + "pages/loading-btn.init.js",
            folder_from.js + "pages/confirmation-box.init.js",
            folder_from.js + "pages/bootstrap-tour.init.js",
            folder_from.js + "pages/tour.init.js",
            folder_from.js + "pages/mdi.init.js",
            folder_from.js + "pages/fontawesome.init.js",
            folder_from.js + "pages/rating.init.js",
            folder_from.js + "pages/alertifyjs.init.js",
            folder_from.js + "pages/tablesaw.init.js",
            folder_from.js + "pages/bootstrap-tables.init.js",
            folder_from.js + "pages/foo-tables.init.js",
            folder_from.js + "pages/responsive-table.init.js",
            folder_from.js + "pages/tableedit.init.js",
            folder_from.js + "pages/datatables.init.js",
            folder_from.js + "pages/apexcharts.init.js",
            folder_from.js + "pages/c3.init.js",
            folder_from.js + "pages/chartist.init.js",
            folder_from.js + "pages/chartjs.init.js",
            folder_from.js + "pages/flot.init.js",
            folder_from.js + "pages/peity.init.js",
            folder_from.js + "pages/sparkline.init.js",
            folder_from.js + "pages/morris.init.js",
            folder_from.js + "pages/c3.init.js",
            folder_from.js + "pages/knob.init.js",
            folder_from.js + "pages/peity.init.js",
            folder_from.js + "pages/vector-maps.init.js",
            folder_from.js + "pages/google-maps.init.js",
            folder_from.js + "pages/form-advanced.init.js",
            folder_from.js + "pages/form-validation.init.js",
            folder_from.js + "pages/form-fileuploads.init.js",
            folder_from.js + "pages/form-imagecrop.init.js",
            folder_from.js + "pages/form-masks.init.js",
            folder_from.js + "pages/form-pickers.init.js",
            folder_from.js + "pages/form-summernote.init.js",
            folder_from.js + "pages/form-quilljs.init.js",
            folder_from.js + "pages/form-wizard.init.js",
            folder_from.js + "pages/form-xeditable.init.js",
            folder_from.js + "pages/form-ckeditors.init.js"
        ]
    };

    var js_utils = {
        js: [
            folder_from.js + "utils/colors.js",
        ]
    };

    var dummyFiles = {
        pdf: [
            folder_from.pdf + "dummy.pdf",
        ]
    };

    lodash(app_pages_assets).forEach(function (assets, type) {
        gulp.src(assets)
            .pipe(uglify())
            .on("error", function (err) {
                console.log(err.toString());
            })
            .pipe(gulp.dest(out + "pages"));
    });

    lodash(js_utils).forEach(function (assets, type) {
        gulp.src(assets)
            .pipe(uglify())
            .on("error", function (err) {
                console.log(err.toString());
            })
            .pipe(gulp.dest(out + "utils"));
    });

    lodash(dummyFiles).forEach(function (assets, type) {
        gulp.src(assets)
            .on("error", function (err) {
                console.log(err.toString());
            })
            .pipe(gulp.dest(out + "../pdf"));
    });
    gulp
        .src([
            folder_from.js + "app.js"
        ])
        .pipe(sourcemaps.init())
        .pipe(concat("app.js"))
        .pipe(gulp.dest(out))
        .pipe(
            rename({
                // rename app.js to app.min.js
                suffix: ".min"
            })
        )
        .pipe(uglify())
        .on("error", function (err) {
            console.log(err.toString());
        })
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(out));
    done();
}

// js
function javascript() {
    var out = folder_dist.dist_assets + "js/";

    // It's important to keep files at this order
    // so that `app.min.js` can be executed properly
    return gulp
        .src([
            folder_from.vendors_js + "jQuery/js/jquery.min.js",
            folder_from.vendors_js + "bootstrap/dist/js/bootstrap.bundle.min.js",
            folder_from.vendors_js + "smoth-scrollbar/js/smooth-scrollbar.js",
            folder_from.vendors_js + "metisMenu/js/metisMenu.min.js",
            folder_from.vendors_js + "wave-effect/js/waves.min.js",
            folder_from.vendors_js + "owl-carousel/js/owl.carousel.min.js"
        ])
        .pipe(sourcemaps.init())
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest(out))
        .pipe(
            rename({
                // rename app.js to app.min.js
                suffix: ".min"
            })
        )
        .pipe(uglify())
        .on("error", function (err) {
            console.log(err.toString());
        })
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(out));
}

// live browser loading
function browserSync(done) {
    browsersync.init({
        startPath: "index.html",
        server: {
            baseDir: folder_dist.dist,
            middleware: [
                function (req, res, next) {
                    req.method = 'GET';
                    next();
                }
            ]
        }
    });
    done();
}

function reloadBrowserSync(done) {
    browsersync.reload();
    browserSync1.reload();
    done();
}

// watch all changes
function watchFiles(done) {
    gulp.watch(folder_dist.src + "**", gulp.series(html, reloadBrowserSync));
    gulp.watch(folder_from.images, gulp.series(imageMin, reloadBrowserSync));
    gulp.watch(folder_from.scss + "**/*", gulp.series(css));
    gulp.watch(folder_from.js + "**/**", gulp.series(copyJStoDistOnChange, reloadBrowserSync));
    done()
}


// watch all changes
gulp.task("watch", gulp.parallel(watchFiles, browserSync));

// default task
gulp.task(
    "default",
    gulp.series(
        html,
        imageMin,
        css,
        copyJStoDistOnChange,
        'watch'
    )
);

// build
gulp.task(
    "build",
    gulp.series(
        html,
        imageMin,
        css,
        copyJStoDistOnChange,
        javascript)
);


const browserSync1 = browsersync.create();

gulp.task('doc_html', function () {
    var out = "documentation/";
    return gulp
        .src([
            "documentation/src/*.html",
            "documentation/src/*.ico", // favicons
            "documentation/src/*.png"
        ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(gulp.dest(out));
});

gulp.task('doc_sass', function () {
    return gulp.src('documentation/assets/scss/**/*.scss')
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('maps'))
        .pipe(
            rename({
                // rename app.css to app.min.css
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps for icons.min.css
        .pipe(gulp.dest("documentation/assets/" + "css/"));
});

gulp.task('preview_documentation', gulp.series('doc_sass', (done) => {
    browserSync1.init({
        server: {
            baseDir: "documentation"
        },
    })
    gulp.watch('documentation/src/*.html', gulp.series("doc_html", reloadBrowserSync));
    gulp.watch('documentation/partials/*.html', gulp.series("doc_html", reloadBrowserSync));
    gulp.watch('documentation/assets/scss/**/*.scss', gulp.series('doc_sass', reloadBrowserSync));
    gulp.watch('documentation/assets/**/*.js', gulp.series(reloadBrowserSync));
    done();
}));

gulp.task('doc_html_angular', function () {
    var out = "documentation-angular/";
    return gulp
        .src([
            "documentation-angular/src/*.html",
            "documentation-angular/src/*.ico", // favicons
            "documentation-angular/src/*.png"
        ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }))
        .pipe(gulp.dest(out));
});

gulp.task('doc_sass_angular', function () {
    return gulp.src('documentation-angular/assets/scss/**/*.scss')
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('maps'))
        .pipe(
            rename({
                // rename app.css to app.min.css
                suffix: ".min"
            })
        )
        .pipe(sourcemaps.write("./")) // source maps for icons.min.css
        .pipe(gulp.dest("documentation-angular/assets/" + "css/"));
});

gulp.task('preview_documentation_angular', gulp.series('doc_sass_angular', (done) => {
    browserSync1.init({
        server: {
            baseDir: "documentation-angular"
        },
    })
    gulp.watch('documentation-angular/src/*.html', gulp.series("doc_html_angular", reloadBrowserSync));
    gulp.watch('documentation-angular/partials/*.html', gulp.series("doc_html_angular", reloadBrowserSync));
    gulp.watch('documentation-angular/assets/scss/**/*.scss', gulp.series('doc_sass_angular', reloadBrowserSync));
    gulp.watch('documentation-angular/assets/**/*.js', gulp.series(reloadBrowserSync));
    done();
}));