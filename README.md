# 💬 Discussion App Portal

A lightweight **Discussion Portal** built with pure **HTML**, **CSS**, and **Vanilla JavaScript** — no frameworks, no backend. Users can post queries, respond to them, and delete either — all in the browser.

---

## 🌍 Live Demo

🚀 **[discussionappportal.netlify.app](https://discussionappportal.netlify.app)**

---

## 🚀 Features

- 📝 **Post Queries** — Add a new discussion question to the portal
- 💬 **Add Responses** — Reply to any query with a response
- 🗑️ **Delete Queries** — Remove a query along with all its responses
- 📋 **Dynamic Rendering** — All content renders instantly via DOM manipulation
- 💾 **localStorage Persistence** — Queries and responses saved in browser, survive page refresh
- 📱 **Responsive UI** — Works across mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | localStorage |

> Zero dependencies. No npm. No build step. Just open and use.

---

## ▶️ Getting Started

No install needed. Clone and open.

```bash
git clone https://github.com/your-username/discussion-app-portal.git
cd discussion-app-portal
```

Open `index.html` in your browser — done.

---

## 🧠 How It Works

### Posting a Query
- User types a question and submits
- Query gets a unique ID, saved to **localStorage**
- Rendered as a card on the page instantly

### Adding a Response
- Each query card has a response input
- On submit → response saved under that query's ID in localStorage
- Displayed below the query in threaded style

### Deleting a Query
- Resolve button on query card removes it from localStorage
- All associated responses are also wiped

