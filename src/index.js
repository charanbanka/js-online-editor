import Header from "./components/header.js";
import Dashboard from "./pages/dashboard.js";
import CodePage from "./pages/code-page.js";

const header = new Header("#header");

header.render();

const codePage = new CodePage("#root");

const routes = {
  "/": function () {
    const view = new Dashboard("#root");
    view.render();
  },
  "/new": function () {
    codePage.render();
  },
  "/code/:id": function (id) {
    // codePage.render();
    // const file = api.loadCodeFile(id);
    // codePage.loadFile(file);
  },
};

// Helper methods
const parseRequestUrl = (url) => {
  const request = url.split("/");
  return {
    resource: request[1],
    id: request[2],
  };
};
// But put this in its own routing module
window.onNavigate = (pathname, addToHistory = false) => {
  const request = parseRequestUrl(pathname);

  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? `/:id` : "");

  if (addToHistory) {
    window.history.pushState({}, pathname, window.location.origin + pathname);
  }
  // Get view to be rendered
  let view = routes[parseUrl];
  if (view !== undefined) view(request.id);
};

window.onpopstate = () => {
  onNavigate(window.location.pathname, false);
};

const router = (e) => {
  document.querySelector("body").addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-route")) {
      e.preventDefault();
      let hash = e.target.hash.substr(1);
      onNavigate(hash, true);
    }
  });
  console.log("on")
  onNavigate(window.location.pathname);
};

window.addEventListener("DOMContentLoaded", router);
