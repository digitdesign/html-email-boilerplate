module.exports = function (grunt) {
	grunt.initConfig({
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
			}
		},
		csscomb: {
			options: {
				config: '<%= meta.buildPath %>config/.csscomb.json'
			},
			dynamic_mappings: {
				expand: true,
				cwd: '<%= meta.deployPath %>css/',
				src: '*.css',
				dest: '<%= meta.deployPath %>css/'
			}
		},
		cssmin: {
			options: {
				shorthand: false
			},
			my_target: {
				expand: true,
				cwd: '<%= meta.deployPath %>css/',
				src: '*.css',
				dest: '<%= meta.deployPath %>css/'
			}
		},
		processhtml: {
			dist: {
				files: {
					'../dist/index.html': ['../src/index.html']
				}
			}
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
	grunt.loadNpmTasks('grunt-css');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csscomb');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('default', [
		'autoprefixer',
		'csscomb',
		'processhtml']);
};