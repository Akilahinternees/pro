import validateUser from './validateUser'
import validateUserLogin from './validationlogin'
import blog from '../models/db'

class Users {
   addUser(req,res) {
        
        const { error } = validateUser(req.body);
        
        if(error) return res.status(400).json({'status':400,'message':error.details[0].message});
    
        const user = {
            id : blog.users.length + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            gender: req.body.gender,
            jobRole: req.body.jobRole,
            department: req.body.department,
            address: req.body.address,
            username : req.body.username,
            password : req.body.password
        };

        // const { username, password } = user;
        

        blog.users.push(user);

        res.json({'status': 201, 'message': 'user created succesfully','UserIdentification':user });
        
    }

    login (req, res) {
        
        const { error } = validateUserLogin(req.body);
        
        if(error) return res.status(400).send(error.details[0].message);
    
        let username = req.body.username
        let password = req.body.password

        let userIndex = blog.users.findI7ndex((user)  => user.username == username && user.password == password);

        let loggedUser = blog.users[userIndex];
        
        res.json({ 'status':200,'message':'successfully logged in','username': loggedUser.username })
    }

    getallUsers (req,res){
        res.json({'status':200,'message':'success','data':blog.users});
  }

    getOneuser (req,res){
        const user = blog.users.find(u => u.id === parseInt(req.params.id));
        if(!user) return res.status(404).send('given id was not found');
        res.send(user);
    }
}

export default Users = new Users()