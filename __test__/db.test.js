const buildDB = require('../server/database/config/build');
const connection = require('../server/database/config/connections');
const {
  checkUserQuery,
  getPost,
  getAllComments,
  getUserInfo,
  getUserPostsQuery,
  createUser,
  addPost,
  addCommentQuery,
  deletePostQuery,
} = require('../server/database/queries');

beforeAll(buildDB);
afterEach(buildDB);
afterAll(() => connection.end());

describe('Check Postify queries', () => {
  it('Should return user with id: 1, when get email: zaherabuamro@gmail.com, and password: 12345', () => checkUserQuery({ email: 'zaherabuamro@gmail.com', password: '12345' })
    .then((data) => {
      expect(data.rows[0]).toEqual({
        email: 'zaherabuamro@gmail.com', id: 1, password: '12345', username: 'Zaher',
      });
    }));

  it('Should return all posts', () => getPost()
    .then((data) => {
      const actualLength = 5;
      expect(data.rows.length).toBe(actualLength);
    }));

  it('Should return all Comments in database', () => getAllComments()
    .then((data) => {
      const actualLength = 25;
      expect(data.rows.length).toBe(actualLength);
    }));

  it('Should return user info', () => getUserInfo(1)
    .then((data) => {
      expect(data.rows[0]).toEqual({
        id: 1,
        username: 'Zaher',
        email: 'zaherabuamro@gmail.com',
        password: '12345',
      });
    }));

  it('Should return a user posts', () => getUserPostsQuery(1)
    .then((data) => {
      expect(data.rows).toEqual([
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
    }));

  it('Should create new user', () => createUser({ username: 'Zain', email: 'zain@gmail.com', password: 'zain12' })
    .then((data) => {
      expect(data.rows[0]).toEqual({
        username: 'Zain',
        email: 'zain@gmail.com',
        password: 'zain12',
        id: 6,
      });
    }));

  it('Should add a new comment', () => addCommentQuery({ value: 'Comment content', postId: 1, userId: 1 })
    .then((data) => {
      expect(data.rows[0]).toEqual({
        id: 26,
        content: 'Comment content',
        user_id: 1,
        post_id: 1,
      });
    }));

  it('Should add a new post', () => addPost({
    username: 'Zaher', imgUrl: 'https://fake.img', content: 'Test Content', userId: 1,
  })
    .then((data) => {
      expect(data.rows[0]).toEqual({
        id: 6,
        title: 'Zaher',
        content: 'Test Content',
        likes: 0,
        comments: 0,
        image_url: 'https://fake.img',
        user_id: 1,
      });
    }));

  it('Should delete a post', () => deletePostQuery(1)
    .then(() => getPost()
      .then((data) => {
        expect(data.rows.findIndex((post) => post.id === 1 && post.title === 'Post 1' && post.content === 'This is the first post' && post.likes === 10 && post.comments === 1 && post.image_url === 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')).toBe(-1);
      })));
});
