let _initialized = false;
let _projects = [];

function loadData() {
  fetch('../data/projects.json')
    .then((res) => res.json())
    .then((data) => (_projects = data));
}

function getProjects() {
  if (!_initialized) loadData();
  return _projects;
}

export default getProjects;
