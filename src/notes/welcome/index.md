---
date: "2019-03-31T00:00:00"
title: "New Site Launched"
---

Welcome to Version 4 of my portfolio website! The design inspiration is a modern Windows 98 / DOS-like interface. 

The website is built with GatsbyJS, a free and open source framework based on React that helps developers build extremely performant static sites. I am utilizing Markdown to write my posts, which acts as a data source for the static site. To render the data on the page I am querying the content through GraphQL.

<figure class="window">
  <div class="window-title">
    <div class="content">Work section</div>
  </div>
  <div class="window-content">
  <p>The latest websites I have made are showcased in the Work section in draggable, collapsable, and resizable windows. Each portfolio detail page has a custom theme with unique colors by utilizing CSS Variables and JavaScript. The bottom of the work page has a “video demo” section which showcases the responsiveness of the websites in draggable windows.  <a href="/work/">Work &rarr;</a></p>
</div>
</figure>

<figure class="window">
  <div class="window-title">
    <div class="content">Notes section</div>
  </div>
  <div class="window-content">
  <p>The Notes section is a place where I can jot down my ideas on whatever topic interests me. <a href="/notes/">Notes &rarr;</a></p>
</div>
</figure>



Hope you enjoy and please contact me if something looks awry! 

Testing code blocks 

```javascript
class SearchResults extends React.Component {
  state = {
    data: null
  };
  componentDidMount() {
    this.fetchResults();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) { // ✅ Refetch on change
      this.fetchResults();
    }
  }
  fetchResults() {
    const url = this.getFetchUrl();
    // Do the fetching...
  }
  getFetchUrl() {
    return 'http://myapi/results?query' + this.props.query; // ✅ Updates are handled
  }
  render() {
    // ...
  }
}
```


```css
/**
 * If you already use line highlighting
 */

/* Adjust the position of the line numbers */
.gatsby-highlight pre[class*="language-"].line-numbers {
  padding-left: 2.8em;
}

/**
 * If you only want to use line numbering
 */

.gatsby-highlight {
  background-color: #2d2d2d;
  border-radius: 0.3em;
  margin: 0.5em 0;
  padding: 1em;
  overflow: auto;
}

.gatsby-highlight pre[class*="language-"].line-numbers {
  padding: 0;
  padding-left: 2.8em;
  overflow: initial;
}
```

```html
<h1 class="logo">Jeff Wolff</h1>
<h2>Jeff's new porfolio is coming&hellip; soon</h2>
<p>In the meantime please check out a selection of sites I have coded: 
// highlight-next-line
<a href="https://www.cukeragency.com/" target="_blank">Cuker Agency</a>, 

<a href="https://www.ripcurl.com/" target="_blank">Rip Curl</a>,
<a href="https://www.vans.com/history.html" target="_blank">Vans History</a>, 
<a href="https://www.amariactive.com/" target="_blank">Amari Active</a>, 
<a href="https://www.gomacro.com/" target="_blank">GoMacro</a> & 
<a href="https://www.littlegiraffe.com/" target="_blank">Little Giraffe</a>.</p>
```
