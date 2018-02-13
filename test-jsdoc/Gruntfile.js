module.exports = (grunt) => {
	grunt.initConfig({
		jsdoc: {
			dist: {
				src: ['static/*.js','static/**/*.js'],
				options: { 
					destination: './doc',
					template : "node_modules/jaguarjs-jsdoc",
              		configure : "node_modules/jaguarjs-jsdoc/conf.json"
				}
			},
		},
		watch: {
			scripts: {
				files: ['static/*.js','static/**/*.js'],
				tasks: ['jsdoc'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['jsdoc', 'watch']);
	// grunt.registerTask('jsdoc', ['jsdoc', 'watch']);

};
