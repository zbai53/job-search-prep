# Job Search Prep — 8-Week Roadmap

> Afternoon = deep work (3-4 hrs). Evening = light review (1-2 hrs).
> One day off per week — Sunday. Non-negotiable rest.
> Status: [ ] not started · [x] done · [!] skipped

---

## Week 1 — Project Internals: Finance Tracker + LeetCode Arrays

**Goal:** Be able to explain Finance Tracker completely in English.
Know 15 array/two-pointer problems cold.

### Day 1
**Afternoon (3 hrs)**
- [ ] Open Finance Tracker codebase. Read JwtAuthenticationFilter line by line.
- [ ] Write down in your own words: what happens from HTTP request → JWT validation → controller in plain English
- [ ] Read SecurityFilterChain config. Explain why each route is permitted or protected.

**Evening (1 hr)**
- [ ] LeetCode: Two Sum (Easy) — warm up
- [ ] LeetCode: Valid Anagram (Easy)

**Understand before tomorrow:**
> "Walk me through how your JWT authentication works" — practice saying this answer out loud in English, 90 seconds max.

---

### Day 2
**Afternoon (3 hrs)**
- [ ] Read TransactionMapper.xml completely. Understand every `<if>` tag.
- [ ] Write: why did you choose MyBatis over JPA? (3 bullet points, honest answer)
- [ ] Read PageHelper setup. Explain how it intercepts SQL to add LIMIT.

**Evening (1 hr)**
- [ ] LeetCode: Best Time to Buy and Sell Stock (Easy)
- [ ] LeetCode: Contains Duplicate (Easy)

**Understand before tomorrow:**
> "What is dynamic SQL and where did you use it?" — answer out loud.

---

### Day 3
**Afternoon (3 hrs)**
- [ ] Read AiService / DeepSeek integration code
- [ ] Understand SSE flow: Spring SseEmitter → how chunks stream to React EventSource
- [ ] Write: what is SSE vs WebSocket? When would you use each? (2 mins out loud)

**Evening (1 hr)**
- [ ] LeetCode: Product of Array Except Self (Medium) — study pattern, don't just memorize
- [ ] Write down the pattern: prefix product array

---

### Day 4
**Afternoon (3 hrs)**
- [ ] Finance Tracker: read GlobalExceptionHandler
- [ ] Understand: what happens when you throw ResourceNotFoundException? Trace it to HTTP response.
- [ ] Practice: explain the full request lifecycle of POST /api/transactions in English, start to finish

**Evening (1 hr)**
- [ ] LeetCode: Maximum Subarray (Medium) — Kadane's algorithm, understand why it works
- [ ] Boss直聘: set up profile, search "大模型工程师" in Shenzhen/Shanghai, save 10 JDs

---

### Day 5
**Afternoon (3 hrs)**
- [ ] Mock interview: set a timer for 45 minutes
- [ ] Answer these out loud in English, record yourself if possible:
  - "Tell me about yourself" (90 seconds)
  - "Walk me through your Finance Tracker project"
  - "What is MyBatis and why did you choose it?"
  - "How does JWT work?"
  - "What is SSE and how did you implement it?"
- [ ] Listen back. Note where you hesitated or said "um" too much.

**Evening (1 hr)**
- [ ] LeetCode: 3Sum (Medium) — two pointer pattern
- [ ] Review week 1 concepts: JWT, MyBatis dynamic SQL, SSE

---

### Day 6
**Afternoon (3 hrs)**
- [ ] System design study: How would you design a URL shortener?
  - Clarify requirements (read/write ratio, scale)
  - Core entities: URL mapping table
  - Hashing approach: MD5 vs base62
  - Database choice and why
  - Cache layer: what to cache
- [ ] Write out your answer in bullet points

**Evening (1 hr)**
- [ ] LeetCode: Container With Most Water (Medium)
- [ ] Apply to 5 positions on Boss直聘 (AI engineer roles in China)

**Day 7 — REST. No coding, no studying.**

---

## Week 2 — Project Internals: AI Career Agent + LeetCode Sliding Window/HashMap

**Goal:** Explain LangGraph architecture and RAG pipeline completely.
Know sliding window and HashMap patterns.

### Day 8
**Afternoon (3 hrs)**
- [ ] Open AI Career Agent codebase. Find the LangGraph graph definition file.
- [ ] Draw on paper: every node, every edge, every conditional branch
- [ ] Write: what is "state" in LangGraph? What does your StateGraph hold?

**Evening (1 hr)**
- [ ] LeetCode: Best Time to Buy and Sell Stock II (Medium)
- [ ] LeetCode: Longest Substring Without Repeating Characters (Medium) — sliding window intro

---

### Day 9
**Afternoon (3 hrs)**
- [ ] AI Career Agent: read ResumeAgent and JDAgent completely
- [ ] Understand: how does structured output work? What happens if Claude returns malformed JSON?
- [ ] Explain out loud (Chinese): "我们的简历解析Agent是怎么工作的？"

**Evening (1 hr)**
- [ ] LeetCode: Minimum Window Substring (Hard) — read solution, understand template
- [ ] Boss直聘: apply to 5 more positions

---

### Day 10
**Afternoon (3 hrs)**
- [ ] AI Career Agent: read the RAG pipeline
- [ ] Understand: how does Qdrant store and retrieve vectors?
- [ ] Explain: what is the difference between semantic search and keyword search?
- [ ] Write: when would RAG fail? What are its limitations?

**Evening (1 hr)**
- [ ] LeetCode: Group Anagrams (Medium) — HashMap pattern
- [ ] LeetCode: Top K Frequent Elements (Medium)

---

### Day 11
**Afternoon (3 hrs)**
- [ ] AI Career Agent: read MatchAgent scoring logic
- [ ] Understand the 3 scoring dimensions (skill 45%, experience 30%, keyword 25%)
- [ ] Explain: why these weights? What would happen if you changed them?
- [ ] Practice in Chinese: "你的简历匹配算法是怎么设计的？"

**Evening (1 hr)**
- [ ] LeetCode: Longest Consecutive Sequence (Medium)
- [ ] Apply to 5 more China positions

---

### Day 12
**Afternoon (3 hrs)**
- [ ] Mock interview (Chinese): AI Career Agent project
  - "介绍一下你的AI Career Agent项目"
  - "LangGraph是什么？你为什么选它？"
  - "RAG是什么？向量检索是怎么工作的？"
  - "你的Agent如果LLM返回格式错误怎么办？"
- [ ] Record yourself. Review the hesitations.

**Evening (1 hr)**
- [ ] LeetCode: Two Sum II (Medium)
- [ ] Java八股文 Day 1: Spring Boot auto-configuration — how does @SpringBootApplication work?

---

### Day 13
**Afternoon (3 hrs)**
- [ ] System design: Design a chat system (like WeChat/Slack)
  - WebSocket vs SSE vs polling — which and why?
  - Message storage: how to store 1 billion messages?
  - Read receipts: how to implement?
  - Online presence: how to track?
- [ ] Write out answer in bullet points

**Evening (1 hr)**
- [ ] LeetCode: 2 review problems from week 1-2
- [ ] Apply to 5 more China positions (target: 20 total by end of week 2)

**Day 14 — REST.**

---

## Week 3 — Java 八股文 Deep Dive + LeetCode Linked List/Stack

### Day 15
**Afternoon (3 hrs)**
- [ ] Java八股文: Spring Bean lifecycle
  - Instantiation → dependency injection → @PostConstruct → in use → @PreDestroy
  - What is BeanFactory vs ApplicationContext?
  - What is @Lazy and when would you use it?
- [ ] Write answers, then explain out loud in English (2 mins each)

**Evening (1 hr)**
- [ ] LeetCode: Reverse Linked List (Easy)
- [ ] LeetCode: Merge Two Sorted Lists (Easy)

---

### Day 16
**Afternoon (3 hrs)**
- [ ] Java八股文: Spring transaction management
  - What does @Transactional actually do?
  - What is transaction propagation? (REQUIRED vs REQUIRES_NEW)
  - What is a "rollback rule"?
  - When would @Transactional NOT work? (same-class method call)
- [ ] Find where you used @Transactional in Finance Tracker. Explain why it's there.

**Evening (1 hr)**
- [ ] LeetCode: Reorder List (Medium)
- [ ] LeetCode: Remove Nth Node From End of List (Medium)

---

### Day 17
**Afternoon (3 hrs)**
- [ ] Java八股文: JVM memory model
  - Heap vs Stack vs Method Area
  - What is Garbage Collection? (Mark-and-sweep, generational GC)
  - What causes OutOfMemoryError?
  - What is a memory leak in Java?
- [ ] Explain out loud: "Tell me about Java memory management"

**Evening (1 hr)**
- [ ] LeetCode: Valid Parentheses (Easy) — stack pattern
- [ ] LeetCode: Min Stack (Medium)

---

### Day 18
**Afternoon (3 hrs)**
- [ ] Java八股文: Java concurrency basics
  - What is a thread? What is a thread pool?
  - synchronized vs ReentrantLock — when to use each?
  - What is a deadlock? How do you prevent it?
  - volatile keyword — what does it guarantee?

**Evening (1 hr)**
- [ ] LeetCode: Daily Temperatures (Medium) — monotonic stack
- [ ] Apply to 5 more China positions

---

### Day 19
**Afternoon (3 hrs)**
- [ ] Java八股文: MyBatis deep dive
  - What is the MyBatis execution flow? (SqlSession → Executor → StatementHandler)
  - First-level cache vs second-level cache — what's the difference?
  - What is a MyBatis interceptor? (How does PageHelper work?)
  - N+1 problem — what is it and how does MyBatis handle it?

**Evening (1 hr)**
- [ ] LeetCode: Largest Rectangle in Histogram (Hard) — study solution
- [ ] Review this week's 八股文 topics

---

### Day 20
**Afternoon (3 hrs)**
- [ ] Full mock interview (English) — Canada style, 45 minutes:
  - "Tell me about yourself"
  - "What is the hardest technical problem you solved?"
  - "Explain your AI Career Agent architecture"
  - "What is @Transactional and when would it fail?"
  - "How does garbage collection work in Java?"
  - LeetCode: solve one Medium on the spot (set timer 20 min)

**Evening (1 hr)**
- [ ] Apply to 10 Canada positions (refresh your applications)
- [ ] Review week 3 notes

**Day 21 — REST.**

---

## Week 4 — LeetCode Trees/Graphs + System Design

### Day 22-27
**Afternoon (3 hrs each day)**
- [ ] Day 22: Binary tree traversal (inorder, preorder, postorder — all three iteratively)
- [ ] Day 23: BFS on trees — Level Order Traversal, Zigzag
- [ ] Day 24: BST problems — Validate BST, Lowest Common Ancestor
- [ ] Day 25: Graph BFS/DFS — Number of Islands, Clone Graph
- [ ] Day 26: System design — Design Netflix/YouTube (focus on video storage and CDN)
- [ ] Day 27: Full mock interview day — both English and Chinese

**Evening (1 hr each day)**
- [ ] 1-2 LeetCode review problems
- [ ] 5 applications (alternating Canada/China)

**Day 28 — REST.**

---

## Week 5 — LeetCode Dynamic Programming + AI Interview Prep

### Day 29-34
**Afternoon (3 hrs each day)**
- [ ] Day 29: DP intro — Climbing Stairs, House Robber (understand the pattern: state, transition)
- [ ] Day 30: DP 1D — Coin Change, Word Break
- [ ] Day 31: DP 2D — Longest Common Subsequence, Unique Paths
- [ ] Day 32: AI interview prep — RAG deep dive: chunking strategies, embedding models, reranking
- [ ] Day 33: AI interview prep — LLM evaluation: how do you measure if your agent is working?
- [ ] Day 34: AI mock interview (Chinese) — full 45 minutes on AI Career Agent

**Evening (1 hr each day)**
- [ ] LeetCode review / application submissions

**Day 35 — REST.**

---

## Week 6 — LeetCode Binary Search + Behavioral Interview

### Day 36-41
**Afternoon (3 hrs each day)**
- [ ] Day 36: Binary search pattern — Search in Rotated Sorted Array, Find Minimum
- [ ] Day 37: Binary search on answer — Koko Eating Bananas, Capacity to Ship
- [ ] Day 38: Behavioral interview prep — write STAR stories for:
  - "Tell me about a time you faced a technical challenge"
  - "Tell me about a time you disagreed with a teammate"
  - "Tell me about a project you're most proud of"
- [ ] Day 39: Practice behavioral answers out loud (English) — 2 minutes each, record yourself
- [ ] Day 40: System design — Design a rate limiter
- [ ] Day 41: Full mock interview day

**Day 42 — REST.**

---

## Week 7 — LeetCode Heap/Greedy + Final Canada Push

### Day 43-48
**Afternoon (3 hrs each day)**
- [ ] Day 43: Heap problems — Top K Frequent, Find Median from Data Stream
- [ ] Day 44: Greedy — Jump Game, Gas Station
- [ ] Day 45: Canada applications blitz — apply to 20 positions in one afternoon
- [ ] Day 46: Review all 八股文 topics — write a one-paragraph summary of each
- [ ] Day 47: Mock interview — hardest version, no hints
- [ ] Day 48: Review weak spots from mock interview

**Day 49 — REST.**

---

## Week 8 — Final Polish + China Interviews

### Day 50-55
**Afternoon (3 hrs each day)**
- [ ] Day 50: Review all LeetCode patterns — one problem per pattern, timed
- [ ] Day 51: China interview prep — practice answers in Chinese for all major topics
- [ ] Day 52: Update resume with any new talking points learned during prep
- [ ] Day 53: Final system design review — URL shortener + chat system + rate limiter
- [ ] Day 54: Full mock interview (Chinese) — AI engineer focus
- [ ] Day 55: Rest and prepare for actual interviews

**Day 56 — REST. You're ready.**

---

## LeetCode Master List (NeetCode 150 priority order)

### Must do first (Weeks 1-3)
Arrays: Two Sum, Best Time to Buy Stock, Contains Duplicate, Product of Array Except Self, Maximum Subarray, 3Sum, Container With Most Water
Sliding Window: Longest Substring Without Repeating, Minimum Window Substring
HashMap: Group Anagrams, Top K Frequent, Longest Consecutive Sequence
Linked List: Reverse, Merge Two Sorted, Reorder List
Stack: Valid Parentheses, Min Stack, Daily Temperatures

### Do after (Weeks 4-6)
Trees: all traversals, BST problems, LCA
Graphs: Number of Islands, Clone Graph, Course Schedule
DP: Climbing Stairs, Coin Change, Longest Common Subsequence
Binary Search: Search Rotated, Find Minimum, Koko Eating Bananas

### If time permits (Weeks 7-8)
Heap: Top K Frequent, Find Median
Greedy: Jump Game, Gas Station
Backtracking: Subsets, Combination Sum

---

## Java 八股文 Master List

### Spring Boot
- Auto-configuration mechanism (@SpringBootApplication, spring.factories)
- Bean lifecycle (instantiation → DI → PostConstruct → use → PreDestroy)
- @Transactional: how it works, propagation types, when it fails
- Spring Security filter chain order
- Difference between @Component, @Service, @Repository, @Controller

### MyBatis
- Execution flow: SqlSession → Executor → StatementHandler → ResultSetHandler
- First-level vs second-level cache
- Dynamic SQL: `<where>`, `<if>`, `<foreach>` — when to use each
- How PageHelper intercepts SQL (MyBatis interceptor pattern)
- ResultMap vs @Results: when to use XML

### JVM
- Memory areas: Heap, Stack, Method Area, PC Register
- Garbage collection: mark-and-sweep, generational GC, G1
- Common GC causes: memory leak, large objects, thread explosion
- volatile: visibility guarantee, not atomicity

### Concurrency
- Thread pool: core size, max size, queue, rejection policy
- synchronized vs ReentrantLock
- Deadlock: conditions and prevention
- Common concurrent collections: ConcurrentHashMap, BlockingQueue

---

## AI Engineer Interview Topics (China)

### Must know cold
- What is RAG? Full pipeline: chunking → embedding → storing → retrieving → prompting
- What is LangGraph? State, nodes, edges, conditional branching
- What is an Agent? Planning, tool use, memory, reflection
- How do you evaluate LLM output quality?
- What is prompt engineering? Few-shot, chain-of-thought, structured output

### Project-specific
- AI Career Agent: explain every agent's role and how they communicate
- Why LangGraph over LangChain? (stateful workflows, conditional branching)
- Why Qdrant? (vector similarity search, filtering, performance)
- How does your RAG handle irrelevant retrieved documents?
- What happens when Claude returns malformed JSON? (retry logic, schema validation)
