var User = require('./models/user')

// create user
var john = new User({
  name: 'John Xu',
  username: 'omk981',
  password: 'welcome'
})

john.dudify(function(err, name) {
  if (err) throw err

  console.log('Your new name is ' + name)
})

// save user
john.save(function(err)) {
  if (err) throw err

  console.log('Saved Successfully!')
}
var newUser = User({
  name: 'Peter Quill',
  username: 'starlord55',
  password: 'password',
  admin: true
});
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});

// find all users
User.find({}, function(err, users){
  if (err) throw err
  console.log('All the users in the system: ');
  console.log(users)
})

// find a partitcular user
User.find({username: 'starlord55'}, function(err, user){
  if (err) throw err;

  console.log(user + " is found!")
})

// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // show the one user
  console.log(user);
});

// get any admin that was created in the past month
var monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);
User.find({ admin: true }).where('created_at').gt(monthAgo).exec(function(err, users) {
  if (err) throw err;

  // show the admins in the past month
  console.log(users);
});

// get and update user with ID 1
User.findById(1, function(err, user) {
  if (err) throw err;
  // change the users location
  user.location = 'uk';
  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });
});

// find and update username
User.findOneAndUpdate({ username: 'starlord55' }, { username: 'starlord88' }, function(err, user) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});

// get the user and remove
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // delete him
  user.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});

// find the user with id 4
User.findByIdAndRemove(4, function(err) {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
