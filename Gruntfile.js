'use strict';
module.exports = function (grunt)	{
	//Time how long tasks take, can help when optimizing build times
	require('time-grunt')(grunt);
	//automatically load required Grunt tasks
	require('jit-grunt')(grunt);

	//define the configuration for all the tasks
	grunt.initconfig({
		pkg: grunt.file.readJSON('package.json'),
		//make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: {
				src: [
				'Gruntfile.js',
			'app/scripts/{,*/}*.js'
				]
			}
		}
	});

	grunt.registerTask('build', [
		'jshint',

		]);
	grunt.registerTask('default',['build']);
};