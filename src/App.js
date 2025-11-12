import React, { useState } from "react";
import data from "./data/articles.json";

function Sidebar({ categories, onSelect }) {
  return (
    <div style={{width: 260, padding: 16, borderRight: "1px solid #eee", background: "#fafafa"}}>
      <h2 style={{marginTop: 0}}>Отделы</h2>
      <ul style={{paddingLeft: 0}}>
        {categories.map(cat => (
          <li key={cat} style={{listStyle: "none", margin: "6px 0"}}>
            <button style={{width: "100%", textAlign: "left", padding: "8px", borderRadius: 6, border: "none", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.03)"}} onClick={() => onSelect(cat)}>{cat}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArticleList({ articles, onOpen }) {
  if (!articles || articles.length === 0) return <p>Статей нет.</p>;
  return (
    <div>
      <h3>Статьи</h3>
      <ul style={{paddingLeft: 0}}>
        {articles.map(a => (
          <li key={a.id} style={{listStyle: "none", margin: "8px 0"}}>
            <button style={{width: "100%", textAlign: "left", padding: "10px", borderRadius: 6, border: "1px solid #eee", background: "#fff"}} onClick={() => onOpen(a)}>{a.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArticleView({ article, onBack }) {
  if (!article) return null;
  return (
    <div>
      <button onClick={onBack} style={{marginBottom: 12}}>← Назад</button>
      <h2>{article.title}</h2>
      <pre style={{whiteSpace: "pre-wrap", fontFamily: "inherit", background: "#fff", padding: 12, borderRadius: 6, border: "1px solid #eee"}}>{article.content}</pre>
    </div>
  );
}

function App() {
  const categories = Object.keys(data);
  const [category, setCategory] = useState(null);
  const [article, setArticle] = useState(null);

  const articles = category ? data[category] : [];

  return (
    <div style={{display: "flex", height: "100vh", fontFamily: "Arial, sans-serif"}}>
      <Sidebar categories={categories} onSelect={(c) => { setCategory(c); setArticle(null); }} />
      <div style={{flex: 1, padding: 20, overflow: "auto"}}>
        {!category && <h1>Выберите отдел слева</h1>}
        {category && !article && <ArticleList articles={articles} onOpen={(a) => setArticle(a)} />}
        {article && <ArticleView article={article} onBack={() => setArticle(null)} />}
      </div>
    </div>
  );
}

export default App;
