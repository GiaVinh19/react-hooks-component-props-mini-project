import Article from "./Article"

export default function ArticleList() {
    const articles = [
        { id: 1, title: 'Why cat is the best pet', date: 'December 21, 2012', preview: 'In this article, we will dicuss about ...' },
        { id: 2, title: 'Why dog is not the best pet', date: 'December 22, 2012', preview: 'Dog? more like ...' },
        { id: 3, title: 'How to start WWIII', date: 'December 23, 2012', preview: 'Read the previous 2 articles' }
    ];
    const listOfArticles = articles.map(article =>
        <Article key={article.id} title={article.title} date={article.date} preview={article.preview}>
        </Article>
    );
    return (
        <main>
            {listOfArticles}
        </main>
    )
}