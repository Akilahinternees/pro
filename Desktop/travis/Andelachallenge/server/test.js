
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './index';

chai.use(chaiHttp);
chai.should();

describe("GET /api/users", () => {

    it("should get all articles record", () => {
        chai.request(app)
            .get('/api/users')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
                return true;
            });
    });

    it("should get single articles record", () => {
        let article = {
            'title': 'making money',
            'content':'online making money',
        }
        chai.request(app)
            .get('/api/users/:id')
            .send(article)
            .end((err, res) => {
               
            });
    });
    
});

describe('/POST Create article', () => {
    it('Create article Testing', () => {
        let article = {
            'title': 'making money',
            'content':'online making money',
        }
        chai.request(app)
            .post('/api/articles')
            .send(article)
            .end((err, res) => {

            });
        });
    });

describe('/PUT update article', () => {
        it('update article Testing', () => {
            let article = {
                'title': 'making money'
            }
            chai.request(app)
                .post('/api/articles/:id')
                .send(article)
                .end((err, res) => {
    
                });
            });
        });

