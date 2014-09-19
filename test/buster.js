/*jslint white:true*/
/*global
	module
*/
var config = module.exports;
config["PubSubJS browser"] = {
	rootPath: "../",
	environment: "browser",
	sources: [
		"src/pubsub-js.js"
	],
	tests: [
		"test/helper.js",
		"test/test-*.js"
	]
};

config["PubSubJS - jQuery 1.7.2"] = {
	rootPath: "../",
	environment: "browser",

	libs: [
		"lib/jquery-1.7.2.js"
	],

	resources: [
		"src/pubsub-js.js",
		"wrappers/jquery/*",
		{
			path: "/jquery.pubsub-js.js",
			combine: [
				"wrappers/jquery/pubsub-js.js.pre.txt",
				"src/pubsub-js.js",
				"wrappers/jquery/pubsub-js.js.post.txt"
			]
		}
	],

	sources: ["/jquery.pubsub-js.js"],

	tests: [
		"test/helper.js",
		"test/test-*.js"
	]
};

/*
config["PubSubJS node"] = {
	rootPath: "../",
	environment: "node",
	sources: [
		"src/pubsub-js.js"
	],
	tests: [
		"test/helper.js",
		"test/test-*.js"
	]
};
*/