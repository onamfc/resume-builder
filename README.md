# ResumeBuilder <sup>(wip)</sub>

A dynamic, schema-driven resume builder built with Next.js, React, and Tailwind CSS. This app allows users to input resume data, select from customizable templates, and host their resume on a unique public page.

## 🎯 Why This Project?
This project is a work in progress, born from a personal need during my own job search. I wanted a simple, elegant way to host the most up-to-date version of my resume, offering something I could share easily with prospective employers and update quickly without needing to send new PDFs or Word docs.

So, I decided to build one from scratch - and open source it!

The long-term goal is to create a flexible platform that allows anyone to:

Create a professional online resume with minimal effort

Choose from beautiful, responsive templates

Update resume content anytime with live previews

Host it on a personal URL or subdomain

Whether you're actively job-hunting or just want a professional digital presence, this app aims to make resume sharing seamless and modern.
## ✨ Features
🔧 JSON-schema powered resume creation system

🧩 Drag-and-drop template selection with deep linking (/preview/[template])

📄 Real-time resume previews with components like JobBlock, BulletBlock, EducationBlock, etc.

🎨 Tailwind CSS-based responsive design

🗂️ Dynamic left-sidebar filtering system to match templates based on resume data

🔐 User authentication (supports Firebase Auth integration)

📤 Self-hosted deployment with Docker on AWS EC2

⚙️ CI/CD with GitHub Actions and NGINX + Let's Encrypt for HTTPS

🌍 Public resume hosting via unique URL slug


## 🛠️ Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Rendering Engine: Schema-driven component mapping (ResumeRenderer)
- Backend/API: Laravel (planned or integrated depending on auth/data persistence)
- Deployment: Docker, NGINX, GitHub Actions, AWS EC2
- Auth: Firebase Authentication (optional)
