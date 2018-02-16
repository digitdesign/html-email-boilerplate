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
			}
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
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: '<%= meta.srcPath %>css/',
					src: '*.css',
					dest: '<%= meta.deployPath %>css/'
    }]
			}
		}
	});

	/*Tasks*/
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-csscomb');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	/*Default task*/
	grunt.registerTask('default', ['autoprefixer', 'csscomb', 'cssmin']);
};