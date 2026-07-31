# 🤖 QA Copilot AI

![Architecture](docs/architecture.png)

> **An AI-powered QA Assistant that helps QA engineers analyze test failures, identify root causes, generate fixes, classify defects, detect flaky tests, and automate testing activities using MCP, TypeScript, and Large Language Models.**

---

## 🚀 Project Overview

Modern QA teams spend significant time analyzing failed automation tests, debugging errors, writing bug reports, and identifying flaky tests.

**QA Copilot AI** is an AI-assisted testing platform designed to reduce debugging effort by combining:

* Model Context Protocol (MCP)
* Large Language Models (Groq LLM)
* Playwright automation data
* REST APIs
* TypeScript backend services

The system allows QA engineers to provide test reports and receive AI-generated insights such as:

* Root cause analysis
* Failure classification
* Suggested fixes
* Test improvement recommendations
* Automated QA artifacts

---

# 🎯 Problem Statement

Automation failures often require manual investigation:

❌ Reading long stack traces
❌ Finding root causes
❌ Identifying flaky tests
❌ Writing defect reports
❌ Creating repetitive test cases

QA Copilot AI solves this by acting as an intelligent testing assistant.

---

# ✨ Features

## AI-Powered QA Analysis

✅ Failure Analysis
✅ Test Report Analysis
✅ Root Cause Identification
✅ Fix Suggestions
✅ Failure Classification
✅ Flaky Test Detection

## Test Automation Assistance

✅ API Test Generator
✅ Test Case Generator
✅ Playwright Script Generator
✅ Bug Report Generator

## Engineering Features

✅ MCP Server Implementation
✅ REST API using Express.js
✅ Modular TypeScript Architecture
✅ Environment Configuration
✅ Error Handling
✅ Logging Utilities

---

# 🏗 System Architecture

![Architecture](docs/architecture.png)

Workflow:

```
QA Engineer
     |
     |
Test Reports / Logs
     |
     v
QA Copilot API
     |
     v
MCP Server
     |
     |
-----------------------------
|      |        |            |
Failure Report  Fix     Flaky
Analyzer Analyzer Suggest Detector

     |
     v

Groq Large Language Model

     |
     v

AI Generated QA Insights
```

---

# 🛠 Tech Stack

| Category        | Technology             |
| --------------- | ---------------------- |
| Language        | TypeScript             |
| Runtime         | Node.js                |
| Backend         | Express.js             |
| AI Model        | Groq LLM               |
| Protocol        | Model Context Protocol |
| Automation      | Playwright             |
| Package Manager | npm                    |
| Configuration   | dotenv                 |

---

# 📁 Project Structure

```
QA-Copilot-AI

src/
 ├── ai/
 │    └── promptTemplates.ts
 |
 ├── api/
 |
 ├── mcp-server/
 |
 ├── tools/
 |
 ├── services/
 |
 ├── config/
 |
 └── utils/

docs/
 ├── architecture.png
 └── architecture.md

screenshots/

package.json
README.md
```

---

# ⚙ Installation

Clone repository:

```bash
git clone https://github.com/Sham-coder16/qa-copilot-ai.git
```

Navigate:

```bash
cd qa-copilot-ai
```

Install dependencies:

```bash
npm install
```

---

# 🔑 Environment Setup

Create `.env`

```env
GROQ_API_KEY=your_api_key
PORT=3000
```

---

# ▶ Running Application

## Start MCP Server

```bash
npm run mcp
```

Expected:

```
MCP SERVER STARTED
Tools Registered Successfully
```

---

## Start API Server

```bash
npm run api
```

Expected:

```
API Server running on port 3000
```

---

## Run Test Client

```bash
npx tsx src/test-client.ts
```

---

# 🔧 MCP Tools

Available tools:

| Tool                   | Purpose                   |
| ---------------------- | ------------------------- |
| Failure Analyzer       | Analyze failed tests      |
| Report Analyzer        | Analyze execution reports |
| Suggest Fix            | Generate solutions        |
| Failure Classification | Categorize failures       |
| Flaky Detector         | Detect unstable tests     |
| Test Generator         | Generate automation tests |
| Bug Generator          | Create defect reports     |

---

# 📡 REST API Example

Endpoint:

```
POST /analyze
```

Request:

```json
{
 "failure": "Login test failed due to timeout"
}
```

Response:

```json
{
 "category":"Automation Failure",
 "rootCause":"Element loading issue",
 "suggestion":"Increase explicit wait"
}
```

---

# 📸 Screenshots

Project screenshots:

```
screenshots/
```

Examples:

* MCP Server Running
* API Server Running
* AI Failure Analysis
* Generated Bug Report
* Test Generation Output

---

# 🔄 Future Enhancements

* Docker Support
* GitHub Actions CI/CD
* Jenkins Pipeline Integration
* Database Storage
* Web Dashboard
* Multiple LLM Provider Support
* Playwright HTML Report Integration

---

# 💡 Skills Demonstrated

* QA Automation
* Playwright Testing
* TypeScript Development
* Node.js Backend
* REST API Development
* AI Integration
* Prompt Engineering
* MCP Architecture
* LLM Testing Concepts
* GitHub Project Management

---

# 👩‍💻 Author

**Shamli Kadukar**

GitHub:

https://github.com/Sham-coder16

---

⭐ If this project helped you understand AI-powered QA automation, consider starring the repository.
