\# QA Copilot AI Architecture



```mermaid

flowchart TD



A\[QA Engineer] --> B\[QA Copilot AI API]



B --> C\[MCP Server]



C --> D\[Failure Analyzer]

C --> E\[Report Analyzer]

C --> F\[Fix Suggestion Engine]

C --> G\[Flaky Test Detector]



D --> H\[Groq LLM API]

E --> H

F --> H

G --> H



H --> I\[Test Reports]

H --> J\[Error Logs]



I --> K\[AI Analysis Result]

J --> K



K --> L\[Root Cause Analysis]

K --> M\[Failure Classification]

K --> N\[Recommended Fix]

