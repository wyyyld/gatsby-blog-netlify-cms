import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProjectsPagePreview from './preview-templates/ProjectsPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('projects', ProjectsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
