import  express from 'express';
import Users from '../controller/users';
import Articles from '../controller/Articles';


const router = express();

router.post('/api/auth/userSignup/', Users.addUser);
router.post('/api/auth/signin', Users.login);
router.get('/api/articles/:id', Articles.getoneArticle);
router.get('/api/articles', Articles.getallArticles);
router.get('/api/users', Users.getallUsers);
router.get('/api/users/:id', Users.getOneuser);
router.post('/api/articles', Articles.addArticle);
router.put('/api/articles/:id', Articles.updateArticle);
router.delete('/api/articles/:id', Articles.deleteArticle);

export default router