/*jslint white:true*/
/*global
	module
*/
var config = module.exports;
config["PubSubJS browser"] = {
	rootPath: "../",
	environment: "browser",
	sources: [
		"src/pubsubjs.js"
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
		"src/pubsubjs.js",
		"wrappers/jquery/*",
		{
			path: "/jquery.pubsubjs.js",
			combine: [
				"wrappers/jquery/pubsubjs.js.pre.txt",
				"src/pubsubjs.js",
				"wrappers/jquery/pubsubjs.js.post.txt"
			]
		}
	],

	sources: ["/jquery.pubsubjs.js"],

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
		"src/pubsubjs.js"
	],
	tests: [
		"test/helper.js",
		"test/test-*.js"
	]
};
*/