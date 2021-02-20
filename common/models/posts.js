'use strict';

module.exports = function(Posts) {
	Posts.makesureRM = async function(cb) {
		const response = "remote method"
		const allPosts = await Posts.find()
		cb(null, {response, allPosts});
	  };
	  Posts.remoteMethod(
		'makesureRM', {
		  http: {
			path: '/status',
			verb: 'get'
		  },
		  returns: {
			arg: 'status',
			type: 'number'
		  }
		}
	  );
};
