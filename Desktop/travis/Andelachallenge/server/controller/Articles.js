import validateArticle from './validate'
import blog from '../models/db'

class Articles {
   
  addArticle (req,res){
        const {error}=validateArticle(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
        const article={
            id:blog.articles.length + 1,
            title:req.body.title,
            content:req.body.content
        };
        blog.articles.push(article);
        res.json({'status': 200, 'message': 'Article created succesfully','ArticleIdentification':article,});
        
    };

 updateArticle (req,res){
        const article = blog.articles.find(u => u.id === parseInt(req.params.id));
        if(!article) return res.status(404).send('given id was not found');
    
    const {error}=validateArticle(req.body);
    if(error) return res.status(400).send(error.details[0].message);
        article.title=req.body.title;
        article.content=req.body.content;
        res.json({'status': 200, 'message': 'Article  succesfully updated ','ArticleIdentification':article,});
    
    };

   deleteArticle (req,res){
        const article = blog.articles.find(u => u.id === parseInt(req.params.id));
        if(!article) return res.status(404).send('given id was not found');
    
        const index=blog.articles.indexOf(article);
        blog.articles.splice(index, 1);
        res.json({'status':204,'ArticleIdentification':article,'message': 'Article  succesfully deleted', });
    };

     getallArticles (req,res){
        res.send(blog.articles);
    };

     getoneArticle  (req,res){
        const article = blog.articles.find(u => u.id === parseInt(req.params.id));
        if(!article) return res.status(404).send('given id was not found');
        res.send(article);
    };    
}

export default Articles = new Articles()