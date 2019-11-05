const validator = require('express-joi-validation').createValidator({});
const usersController = require('../controllers/UserController');
const favouritesController = require('../controllers/FavouriteController');

const {
  createUserSchema, deleteUserSchema, updateUserSchema, showUserSchema,
} = require('../schemas/user');
const authorizationMiddleware = require('../middleware/authorization');

module.exports = (routes) => {
  routes.post('/users', validator.body(createUserSchema), usersController.create);
  routes.get('/users/:userId', validator.params(showUserSchema), usersController.show);

  // Admin routes
  routes.use(authorizationMiddleware);
  routes.get('/users', usersController.list);
  routes.put('/users/:userId', [validator.body(updateUserSchema.body), validator.params(updateUserSchema.params)], usersController.update);
  routes.delete('/users/:userId', validator.params(deleteUserSchema), usersController.delete);
  routes.post('/users/:userId/favourites', validator.params(showUserSchema), favouritesController.add);
  routes.get('/users/:userId/favourites', validator.params(showUserSchema), favouritesController.list);
};
