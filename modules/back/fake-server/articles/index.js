const casual = require('casual')

module.exports = () => {
  casual.define("article", function () {
    return {
      id: casual.uuid,
      title: casual.title,
      ip: casual.ip,
      image: 'https://via.placeholder.com/150',
      description: casual.text,
      socialFeedback: {
        likes: casual.integer(from = 0, to = 99),
        deslikes: casual.integer(from = 0, to = 99),
        comments: casual.integer(from = 0, to = 99)
      }
    };
  });

  const data = {
    articles: []
  };
  // Create 100 users
  /*for (let i = 0; i < 10; i++) {
    data.articles.push(casual.article);
  }*/
  return data;
};