module.exports = function(grunt){

	'use strict';

	grunt.initConfig({
		less: {
			build: {
				options: {
					compress: true
					,report: 'min'
				}
				,files: {
					'flex-utils.min.css': 'flex-utils.less'
				}
			}
		}
		,watch: {
			less: {
				files: ['*.less']
				,tasks: ['less:build']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.registerTask('default', ['watch']);

};
