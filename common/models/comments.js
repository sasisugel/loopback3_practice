'use strict';

module.exports = function(Comments) {

	// handling hooks before, inital and after the method execution
	// before remote hook execution
	  Comments.beforeRemote('create', function(context, users, next) {
		context.args.data.createdAt = Date.now();
		context.args.data.userId = context.req.accessToken.userId;
		next();
	  });
};
