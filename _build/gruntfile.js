module.exports = function (grunt) {

	/*Project configuration*/
	grunt.initConfig({

		/*Metadata*/
		meta: {
			srcPath: '../src/',
			deployPath: '../dist/',
			buildPath: '../_build/'
		},
		autoprefixer: {
			dynamic_mappings: {
				expand: true,
				cwd: '<%= meta.srcPath %>css/',
				src: '*.css',
				dest: '<%= meta.deployPath %>css/'
			},
		},
		csscomb: {
			options: {
				config: '<%= meta.buildPath %>config/.csscomb.json'
			},
			dynamic_mappings: {
				expand: true,
				cwd: '<%= meta.srcPath %>css/',
				src: '*.css',
				dest: '<%= meta.deployPath %>css/'
			},
		},
		cssmin: {
			options: {
				shorthand: true
			},
			my_target: {
				expand: true,
				cwd: '<%= meta.srcPath %>css/',
				src: '*.css',
				dest: '<%= meta.deployPath %>css/'
			}
		},
		inline: {
			options: {

			},
			files: {
				expand: true,
				cwd: '<%= meta.srcPath %>',
				src: '*.html',
				dest: '<%= meta.deployPath %>'
			},
		},
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true
			},
			files: {
				expand: true,
				cwd: '<%= meta.srcPath %>',
				src: '*.html',
				dest: '<%= meta.deployPath %>'
			}
		}
	});

	/*Tasks*/
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csscomb');
	grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	/*Default task*/
	grunt.registerTask(
		'default', [
		'autoprefixer',
		'csscomb',
		'cssmin',
		'inline',
		'htmlmin'
	]);
};