export default function NewArticle() {
  return (
    <article>
      <h2 className="article_title">This is the text of my choice</h2>
      <label htmlFor="my-form"></label>
      <input type="text" id="my-form" />
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Glenea_astathiformis"
      >
        click
      </a>
    </article>
  );
}
