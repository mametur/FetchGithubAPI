'use strict';
import { fetchGithubProjects } from './handler/fetchGithubProjects.js';
/*Click my projects title */

document.getElementById('show_projects').addEventListener('click', fetchGithubProjects);
