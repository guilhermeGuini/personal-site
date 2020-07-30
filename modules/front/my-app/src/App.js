
import React from 'react';
import './App.css';
import ArticlePreview from './ArticlePreview';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <div className="clear-margin">
        <Header />
        <div className="container-fluid content">

          <div className="row">
            <div className="offset-md-2 col-md-6 text-center title">
              <h1>Articles</h1>
            </div>
          </div>

          <div className="shortcuts">
            <div className="shortcut-item">
              <span>Tecnologias</span>
              <ul>
                <li>Java</li>
                <li>C#</li>
                <li>Spring Boot</li>
                <li>Hibernate</li>
                <li>SQL</li>
                <li>PL-SQL</li>
                <li>Devops</li>
              </ul>
            </div>
            <div className="shortcut-item">
              <span>Autores</span>
              <ul>
                <li>Guilherme Guini</li>
              </ul>
            </div>
          </div>

          <div className="articles">
            <ArticlePreview className="article-preview" srcImg="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum ultricies ipsum. Nulla ornare purus eget malesuada sollicitudin. Pellentesque lobortis, nunc ac sagittis euismod, eros nunc gravida turpis, sit amet gravida elit ipsum ac ipsum. Nunc dignissim iaculis lectus, ut placerat leo consectetur vel. Vivamus eu malesuada nunc. Donec gravida neque id purus sodales elementum. Nam porta odio a egestas aliquet. Nunc id erat neque. Mauris sagittis mattis eros in luctus. Nullam at posuere magna. Suspendisse dignissim nulla eget enim laoreet, quis ornare quam finibus." />
            <ArticlePreview className="article-preview" srcImg="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum ultricies ipsum. Nulla ornare purus eget malesuada sollicitudin. Pellentesque lobortis, nunc ac sagittis euismod, eros nunc gravida turpis, sit amet gravida elit ipsum ac ipsum. Nunc dignissim iaculis lectus, ut placerat leo consectetur vel. Vivamus eu malesuada nunc. Donec gravida neque id purus sodales elementum. Nam porta odio a egestas aliquet. Nunc id erat neque. Mauris sagittis mattis eros in luctus. Nullam at posuere magna. Suspendisse dignissim nulla eget enim laoreet, quis ornare quam finibus." />
            <ArticlePreview className="article-preview" srcImg="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum ultricies ipsum. Nulla ornare purus eget malesuada sollicitudin. Pellentesque lobortis, nunc ac sagittis euismod, eros nunc gravida turpis, sit amet gravida elit ipsum ac ipsum. Nunc dignissim iaculis lectus, ut placerat leo consectetur vel. Vivamus eu malesuada nunc. Donec gravida neque id purus sodales elementum. Nam porta odio a egestas aliquet. Nunc id erat neque. Mauris sagittis mattis eros in luctus. Nullam at posuere magna. Suspendisse dignissim nulla eget enim laoreet, quis ornare quam finibus." />
            <ArticlePreview className="article-preview" srcImg="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum ultricies ipsum. Nulla ornare purus eget malesuada sollicitudin. Pellentesque lobortis, nunc ac sagittis euismod, eros nunc gravida turpis, sit amet gravida elit ipsum ac ipsum. Nunc dignissim iaculis lectus, ut placerat leo consectetur vel. Vivamus eu malesuada nunc. Donec gravida neque id purus sodales elementum. Nam porta odio a egestas aliquet. Nunc id erat neque. Mauris sagittis mattis eros in luctus. Nullam at posuere magna. Suspendisse dignissim nulla eget enim laoreet, quis ornare quam finibus." />
            <ArticlePreview className="article-preview" srcImg="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum ultricies ipsum. Nulla ornare purus eget malesuada sollicitudin. Pellentesque lobortis, nunc ac sagittis euismod, eros nunc gravida turpis, sit amet gravida elit ipsum ac ipsum. Nunc dignissim iaculis lectus, ut placerat leo consectetur vel. Vivamus eu malesuada nunc. Donec gravida neque id purus sodales elementum. Nam porta odio a egestas aliquet. Nunc id erat neque. Mauris sagittis mattis eros in luctus. Nullam at posuere magna. Suspendisse dignissim nulla eget enim laoreet, quis ornare quam finibus." />
            <ArticlePreview className="article-preview" srcImg="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum ultricies ipsum. Nulla ornare purus eget malesuada sollicitudin. Pellentesque lobortis, nunc ac sagittis euismod, eros nunc gravida turpis, sit amet gravida elit ipsum ac ipsum. Nunc dignissim iaculis lectus, ut placerat leo consectetur vel. Vivamus eu malesuada nunc. Donec gravida neque id purus sodales elementum. Nam porta odio a egestas aliquet. Nunc id erat neque. Mauris sagittis mattis eros in luctus. Nullam at posuere magna. Suspendisse dignissim nulla eget enim laoreet, quis ornare quam finibus." />
            <ArticlePreview className="article-preview" srcImg="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum ultricies ipsum. Nulla ornare purus eget malesuada sollicitudin. Pellentesque lobortis, nunc ac sagittis euismod, eros nunc gravida turpis, sit amet gravida elit ipsum ac ipsum. Nunc dignissim iaculis lectus, ut placerat leo consectetur vel. Vivamus eu malesuada nunc. Donec gravida neque id purus sodales elementum. Nam porta odio a egestas aliquet. Nunc id erat neque. Mauris sagittis mattis eros in luctus. Nullam at posuere magna. Suspendisse dignissim nulla eget enim laoreet, quis ornare quam finibus." />
            <ArticlePreview className="article-preview" srcImg="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum ultricies ipsum. Nulla ornare purus eget malesuada sollicitudin. Pellentesque lobortis, nunc ac sagittis euismod, eros nunc gravida turpis, sit amet gravida elit ipsum ac ipsum. Nunc dignissim iaculis lectus, ut placerat leo consectetur vel. Vivamus eu malesuada nunc. Donec gravida neque id purus sodales elementum. Nam porta odio a egestas aliquet. Nunc id erat neque. Mauris sagittis mattis eros in luctus. Nullam at posuere magna. Suspendisse dignissim nulla eget enim laoreet, quis ornare quam finibus." />
            <ArticlePreview className="article-preview" srcImg="https://via.placeholder.com/150" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum ultricies ipsum. Nulla ornare purus eget malesuada sollicitudin. Pellentesque lobortis, nunc ac sagittis euismod, eros nunc gravida turpis, sit amet gravida elit ipsum ac ipsum. Nunc dignissim iaculis lectus, ut placerat leo consectetur vel. Vivamus eu malesuada nunc. Donec gravida neque id purus sodales elementum. Nam porta odio a egestas aliquet. Nunc id erat neque. Mauris sagittis mattis eros in luctus. Nullam at posuere magna. Suspendisse dignissim nulla eget enim laoreet, quis ornare quam finibus." />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }

}

export default App;