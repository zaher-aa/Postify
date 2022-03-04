const request = require('supertest');
const app = require('../server/app');
const build = require('../server/database/config/build');
const { getPost } = require('../server/database/queries');

beforeAll(build);
afterEach(build);

describe('Test Suits For Postify Routes', () => {
  test('GET / Route, status 200, content-type html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('GET /home Route, status 200, content-type html', (done) => {
    request(app)
      .get('/home')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('GET /profile Route, status 200, content-type html', (done) => {
    request(app)
      .get('/profile')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  test('GET /check-user Route, status 200, content-type json', (done) => {
    request(app)
      .get('/check-user?email=zaherabuamro@gmail.com&password=12345')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual({
          username: 'Zaher',
          email: 'zaherabuamro@gmail.com',
          id: 1,
        });
        return done();
      });
  });

  test('GET /all-posts Route, status 200, content-type json', (done) => {
    request(app)
      .get('/all-posts')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toBe(5);
        return done();
      });
  });

  test('GET /user-info Route, status 200, content-type json', (done) => {
    request(app)
      .get('/user-info/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual({ id: 1, username: 'Zaher', email: 'zaherabuamro@gmail.com' });
        return done();
      });
  });

  test('GET /user-posts Route, status 200, content-type json', (done) => {
    request(app)
      .get('/user-posts/1')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            id: 1,
            title: 'Post 1',
            content: 'This is the first post',
            likes: 10,
            comments: 5,
            image_url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            user_id: 1,
          },
        ]);
        return done();
      });
  });

  test('GET /comments Route, status 200, content-type json', (done) => {
    request(app)
      .get('/comments')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.length).toBe(25);
        return done();
      });
  });

  test('POST /register Route, status 201, content-type json', (done) => {
    request(app)
      .post('/register')
      .send({ username: 'Mohamed', email: 'mohamed@gmail.com', password: 'mohamed123' })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual({
          username: 'Mohamed',
          email: 'mohamed@gmail.com',
          id: 6,
        });
        return done(err);
      });
  });

  test('POST /post Route, status 201, content-type json', (done) => {
    request(app)
      .post('/post')
      .send({
        username: 'Zaher', content: 'Content Test', url: 'https://fake.img', id: 1,
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            id: 6,
            title: 'Zaher',
            content: 'Content Test',
            likes: 0,
            comments: 0,
            image_url: 'https://fake.img',
            user_id: 1,
          },
        ]);
        return done(err);
      });
  });

  test('POST /comment Route, status 201, content-type json', (done) => {
    request(app)
      .post('/comment')
      .send({ value: 'Comment Content', postId: 1, userId: 1 })
      .expect(201)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toEqual([
          {
            id: 26, content: 'Comment Content', user_id: null, post_id: null,
          },
        ]);
        return done(err);
      });
  });

  test('DELETE /post Route, status 204', (done) => {
    request(app)
      .delete('/post/1')
      .expect(204)
      .end((err, res) => {
        if (err) return done();
        getPost()
          .then((data) => {
            expect(data.rows.findIndex((post) => post.id === 1 && post.title === 'Post 1' && post.content === 'This is the first post' && post.likes === 10 && post.comments === 1 && post.image_url === 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')).toBe(-1);
          });
        return done();
      });
  });
});
