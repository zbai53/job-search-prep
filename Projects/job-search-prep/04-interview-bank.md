# Interview Question Bank

> Practice these out loud. Not in your head — out loud.
> Time yourself. Canada answers: English, 90 seconds max.
> China answers: Chinese, 2 minutes max.

---

## Behavioral (English — Canada)

**Tell me about yourself.**
> Structure: 1) degree + specialization, 2) two most relevant internships in one sentence each,
> 3) two projects and what they demonstrate, 4) what you're looking for.
> Time: 90 seconds. Practice until you can do it without "um".

**What is the hardest technical problem you've solved?**
> Use the AI Career Agent RAG pipeline debugging, or Finance Tracker SSE implementation.
> Structure: situation → what was hard → what you tried → what worked → what you learned.

**Tell me about a time you worked under pressure.**
> Use the 45-day AI Career Agent build — tight timeline, full-stack, learned LangGraph from scratch.

**Why do you want to work here?**
> Research the company before every interview. Have 2 specific reasons ready.

**Where do you see yourself in 5 years?**
> "I want to deepen my expertise in AI application engineering / backend systems,
> take on more ownership of system design decisions, and eventually mentor junior engineers."

---

## Technical — Finance Tracker (English)

**Walk me through your Finance Tracker architecture.**
> Spring Boot backend → MyBatis-Plus persistence → React frontend → Claude API for AI features.
> JWT auth, SSE streaming for AI reports, dynamic SQL filtering.
> Deployed on Railway (backend) + Vercel (frontend).

**Why MyBatis over JPA/Hibernate?**
> MyBatis gives full SQL control. For this project, the transaction filtering needed
> complex dynamic SQL with 6 optional parameters — MyBatis `<where>` and `<if>` tags
> made this clean and readable. JPA's criteria API would have been more verbose.
> Also: MyBatis is interview-heavy in this market and I wanted to understand the SQL.

**How does your JWT authentication work?**
> User logs in → server creates JWT (header.payload.signature, signed with secret key,
> 24hr expiry) → client stores in localStorage → sends as Authorization: Bearer header
> on every request → JwtAuthenticationFilter validates signature and expiry →
> sets SecurityContext → request proceeds to controller.

**What is SSE and how did you use it?**
> Server-Sent Events — one-way stream from server to client. I used Spring's SseEmitter
> on the backend. When user requests an AI report, backend opens a DeepSeek API call
> with stream:true, parses each chunk, emits via SseEmitter. Frontend uses EventSource
> to subscribe and appends each chunk to the UI — typewriter effect.
> Chose SSE over WebSocket because AI report generation is one-directional.

**What does @Transactional do and when would it fail?**
> Wraps a method in a database transaction — if anything throws, the whole method rolls back.
> It fails silently if: you call the @Transactional method from within the same class
> (Spring AOP proxy is bypassed), or if you catch the exception and don't rethrow it.

---

## Technical — AI Career Agent (Chinese)

**介绍一下你的AI Career Agent项目。**
> 这是一个多Agent系统，帮助用户优化求职流程。
> 架构是三个服务：Spring Boot负责API和用户管理，FastAPI负责AI逻辑，React做前端。
> 核心是6个Agent通过LangGraph编排：简历解析、JD解析、匹配打分、简历改写、面试模拟、RAG知识库。
> 用PostgreSQL存结构化数据，Qdrant做向量检索，Redis做缓存。

**LangGraph是什么？你为什么选它？**
> LangGraph是基于LangChain的有状态工作流框架，可以定义节点、边和条件分支。
> 我选它是因为求职流程是有状态的——每一步的输出是下一步的输入，
> 而且有些步骤是条件性的（比如匹配分数低于阈值才触发改写）。
> 普通的LangChain链没有状态管理，LangGraph的StateGraph解决了这个问题。

**RAG是什么？你的RAG pipeline是怎么工作的？**
> RAG是检索增强生成。流程是：
> 1. 文档分块（chunking）
> 2. 用embedding模型把每个chunk向量化
> 3. 存入Qdrant向量数据库
> 4. 用户查询时，把问题也向量化，在Qdrant里找最相似的chunks
> 5. 把检索到的chunks作为上下文注入LLM的prompt
> 6. LLM基于这个上下文生成回答
> 这样LLM能回答训练数据之外的问题，比如用户自己的简历内容。

**如果Claude返回的JSON格式不对怎么办？**
> 我用Pydantic做schema validation。如果解析失败，会触发retry logic——
> 最多重试2次，每次把错误信息也带进prompt让Claude修正。
> 如果3次都失败，返回一个友好的错误信息给用户，不让原始错误暴露。

**你的匹配算法是怎么设计的？**
> 三个维度：技能匹配45%，经验匹配30%，关键词匹配25%。
> 技能匹配用同义词字典处理（比如k8s=kubernetes），支持部分匹配。
> 经验匹配计算总年限和技术相关性。
> 关键词匹配用TF-IDF风格的重要性加权。
> Gap analysis部分用Claude来做，因为这需要语义理解，纯Python做不好。

---

## System Design Framework

For every system design question, use this structure:

**1. Clarify (2-3 min)**
- Who are the users? How many?
- Read-heavy or write-heavy?
- What are the most important features?
- Any specific constraints?

**2. Estimate (1-2 min)**
- Daily active users → requests per second
- Data size: how much storage needed?

**3. High-level design (5-8 min)**
- Draw the main components
- Client → Load Balancer → API Servers → Database
- Where does caching fit?

**4. Deep dive (10 min)**
- Pick the hardest 1-2 components and go deep
- Database schema
- API design
- Handling failures

**5. Tradeoffs (2-3 min)**
- What did you optimize for?
- What would you do differently with more time?

---

## Three System Designs to Know Cold

### URL Shortener
- Core: hash long URL to 6-char code (base62)
- DB: `{ code, long_url, created_at, expires_at }`
- Cache: Redis for popular URLs (80/20 rule)
- Scale: 100M URLs, 1B redirects/day → read-heavy → cache everything

### Chat System (WhatsApp/WeChat)
- Real-time: WebSocket for online users, push notification for offline
- Message storage: NoSQL (Cassandra) — write-heavy, time-series
- Presence: Redis with TTL for online status
- Media: S3 + CDN, store URL in message

### Rate Limiter
- Token bucket algorithm (or sliding window)
- Store state in Redis (fast reads, TTL support)
- Where to place: API gateway level
- Distributed: Redis ensures consistency across multiple servers
