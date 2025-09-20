
-- Sample data for portfolio_db

-- Users
INSERT INTO users (username, password_hash, email) VALUES
('admin', '$2y$10$abcdefghijklmnopqrstuv', 'admin@truyens.pro'),
('jane', '$2y$10$abcdefghijklmnopqrstuv', 'jane@example.com');

-- Skills
INSERT INTO skills (name, category) VALUES
('PHP', 'backend'),
('JavaScript', 'frontend'),
('Node.js', 'backend'),
('MySQL', 'database'),
('Nginx', 'other');

-- Projects
INSERT INTO projects (title, description, image_url, live_url, repo_url, created_at) VALUES
('Portfolio Website', 'A personal portfolio site built with PHP and Node.js.', 'portfolio.png', 'https://truyens.pro/', 'https://github.com/bokk3/portfolio', NOW()),
('Blog Engine', 'A simple blog engine for sharing articles.', 'blog.png', 'https://truyens.pro/blog', 'https://github.com/bokk3/blog-engine', NOW());

-- Project Skills
INSERT INTO project_skills (project_id, skill_id) VALUES
(1, 1), -- Portfolio Website uses PHP
(1, 4), -- Portfolio Website uses MySQL
(1, 5), -- Portfolio Website uses Nginx
(2, 2), -- Blog Engine uses JavaScript
(2, 3); -- Blog Engine uses Node.js

-- Settings
INSERT INTO settings (site_title, site_description, theme_color) VALUES
('Truyens Portfolio', 'A showcase of my web development projects.', '#3498db');

-- Contact Messages
INSERT INTO contact_messages (name, email, message) VALUES
('Visitor', 'visitor@example.com', 'Hello, I love your portfolio!');
