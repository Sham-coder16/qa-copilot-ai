# 🤖 QA Copilot AI

> **An AI-powered QA Assistant built using Model Context Protocol (MCP), Express.js, TypeScript, and Groq LLM to analyze test failures, generate fixes, classify issues, detect flaky tests, and assist QA engineers.**

![Architecture](docs/architecture.png)

---

# 🚀 Project Overview

QA Copilot AI is an intelligent assistant for Software Testing teams. It exposes multiple QA capabilities through an MCP server and REST API, allowing AI clients to analyze Playwright test reports, understand failures, suggest fixes, classify issues, detect flaky tests, and generate testing artifacts.

The project demonstrates how Large Language Models can be integrated into modern QA workflows using the **Model Context Protocol (MCP)**.

---

# ✨ Features

* ✅ MCP Server implementation
* ✅ REST API using Express.js
* ✅ AI-powered Failure Analysis
* ✅ AI Report Analyzer
* ✅ Intelligent Fix Suggestions
* ✅ Failure Classification
* ✅ Flaky Test Detection
* ✅ API Test Generator
* ✅ Test Case Generator
* ✅ Playwright Script Generator
* ✅ Bug Report Generator
* ✅ Modular TypeScript Architecture
* ✅ Groq LLM Integration
* ✅ Environment-based Configuration
* ✅ Error Handling
* ✅ Logging Utilities

---

# 🏗 Architecture

```
                Playwright Test Report
                          │
                          ▼
                  QA Copilot AI API
                          │
                          ▼
                    MCP Server Layer
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
 Failure Analyzer   Report Analyzer   Fix Suggestion
        │                 │                 │
        └─────────────────┼─────────────────┘
                          ▼
                  Groq Large Language Model
                          │
                          ▼
                AI Generated Response
```

---

# 🛠 Tech Stack

| Category        | Technology                   |
| --------------- | ---------------------------- |
| Language        | TypeScript                   |
| Runtime         | Node.js                      |
| API             | Express.js                   |
| AI              | Groq LLM                     |
| Protocol        | Model Context Protocol (MCP) |
| Testing         | Playwright                   |
| Package Manager | npm                          |
| Configuration   | dotenv                       |

---

# 📁 Project Structure

```
src/
 ├── ai/
 ├── api/
 ├── config/
 ├── database/
 ├── errors/
 ├── mcp-server/
 ├── services/
 ├── tools/
 ├── types/
 └── utils/

dist/
docs/
```

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/Sham-coder16/qa-copilot-ai.git
```

Go into the project

```bash
cd qa-copilot-ai
```

Install dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file.

Example:

```env
GROQ_API_KEY=your_api_key_here
PORT=3000
```

---

# ▶ Running the Project

Start the MCP Server

```bash
npm run mcp
```

Start the REST API

```bash
npm run api
```

Run the Test Client

```bash
npx tsx src/test-client.ts
```

---

# 🔧 Available MCP Tools

* Ping
* Failure Analyzer
* Report Analyzer
* Suggest Fix
* Failure Classification
* Flaky Detector
* API Test Generator
* Test Case Generator
* Bug Report Generator
* Playwright Script Generator

---

# 📡 REST API

Example Endpoint

```
POST /analyze
```

Request

```json
{
  "report": "sample-report.json"
}
```

Response

```json
{
  "status": "success",
  "analysis": "AI-generated analysis"
}
```

---

# 📸 Screenshots

Create the following folder:

```
docs/screenshots/
```

Suggested screenshots:

* MCP Server Running
* API Running
* AI Response
* Failure Analysis
* Report Analysis
* GitHub Repository
* Architecture Diagram

---

# 🚀 Future Enhancements

* Docker Support
* Authentication
* CI/CD Pipeline
* Database Persistence
* Multiple LLM Providers
* Web Dashboard
* Playwright HTML Report Integration
* Jenkins Integration
* GitHub Actions Integration

---

# 💡 Skills Demonstrated

* TypeScript
* Node.js
* Express.js
* AI Integration
* Prompt Engineering
* MCP Server Development
* REST API Development
* Error Handling
* Modular Architecture
* QA Automation Concepts
* Playwright
* GitHub

---

# 📚 Learning Outcomes

This project demonstrates:

* Building AI-enabled QA tools
* Designing modular backend architecture
* Integrating Large Language Models
* Developing MCP-compatible tools
* Creating scalable TypeScript applications

---

# 👩‍💻 Author

**Shamli Kadukar**

GitHub:
https://github.com/Sham-coder16

Repository:
https://github.com/Sham-coder16/qa-copilot-ai

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
