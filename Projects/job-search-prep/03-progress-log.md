# Job Search Prep — Progress Log

> Newest entries at the top.
> Add an entry every day at EOD.
> Re-upload this file to Project Knowledge every Sunday.

---

## How to use this log

**Start of session:** type "checkin" → Claude tells you exactly what to do today.
**End of session:** type "EOD" → Claude generates today's log entry for you to paste here.
**Every Sunday:** re-upload this file to Claude Project Knowledge.

---

## Entry template

```
## YYYY-MM-DD · Day N · One-line summary

**LeetCode:** [problem name] — [solved/struggled/studied solution]
**Study topic:** [what you covered]
**Applications sent:** Canada X · China X
**Mock interview:** [yes/no — topic]

### Done
- specific thing 1
- specific thing 2

### Struggled with
- what was hard and why

### Tomorrow
- first thing to start with
```

---

## 2026-07-15 · Day 8 · AI Career Agent architecture + Stock II & Longest Substring

**LeetCode:** Best Time to Buy and Sell Stock II — solved; Longest Substring Without Repeating Characters (sliding window) — solved
**Study topic:** AI Career Agent LangGraph workflow + state
**Applications sent:** Canada 0 · China 0
**Mock interview:** No

### Done
- Read workflow.py: understood 6 agents, node flow, conditional routing (score < 70 → rewrite, >= 70 → interview)
- Read state.py: understood shared state dictionary (inputs, agent results, flow control, monitoring)
- Understood key design decisions: conditional routing, rewrite cap of 2, error handler after every node, retry wrapper
- Practiced "Walk me through your AI Career Agent architecture" in Chinese and English
- Stock II: understood greedy approach — add every positive daily difference
- Longest Substring: learned sliding window pattern — move left pointer on duplicate, don't clear map

### Struggled with
- Stock II: confused about whether selling early could miss bigger profits (resolved — daily differences sum to same result)
- Longest Substring: initially cleared map on duplicate, learned to move left pointer instead
- Off-by-one: >= vs > for left boundary check

### Tomorrow
- Day 9: Read ResumeAgent and JDAgent completely
- Understand structured output and malformed JSON handling
- Explain in Chinese: "我们的简历解析Agent是怎么工作的？"
- LeetCode: Minimum Window Substring (Hard)
- Boss直聘: apply to 5 more positions

## 2026-07-12 · Day 6 · URL Shortener System Design + Container With Most Water

**LeetCode:** Container With Most Water (two pointer) — solved
**Study topic:** URL Shortener system design
**Applications sent:** Canada 0 · China 5
**Mock interview:** No

### Done
- URL Shortener system design: requirements → API → base62 encoding → MySQL schema → Redis cache → read/write flow
- Understood Redis as in-memory cache vs MySQL as persistent storage
- Understood HTTP 301 redirect mechanism
- Understood cache hit/miss flow
- Container With Most Water: two pointer, fixed ordering bug (calculate before compare)

### Struggled with
- Why system design is tested (separate interview track, not project-related)
- Redis vs 301 confusion (cache vs redirect — two different things)
- Container With Most Water: curArea/maxArea ordering

### Tomorrow
- Day 7 — REST. No coding, no studying. Non-negotiable.
## 2026-07-11 · Day 5 · Mock interview + 3Sum

**LeetCode:** 3Sum (two pointer + dedup) — solved
**Study topic:** Mock interview — 5 questions out loud in English
**Applications sent:** Canada 0 · China 0
**Mock interview:** Yes — Tell me about yourself, Finance Tracker walkthrough, MyBatis choice, JWT flow, SSE implementation

### Done
- Practiced all 5 mock interview questions out loud in English
- Identified key weaknesses: filler words (um, uh, like), pronunciation (SSE Emitter, typewriter), mixing up JPA/GPA
- Know all answers content-wise, English delivery needs daily practice
- 3Sum: sorted array + fixed i + two pointer + dedup on i/left/right
- Boss直聘 profile set up, 10 JDs saved

### Struggled with
- English fluency — too many filler words, key terms unclear
- 3Sum dedup logic — understood after breaking into "3 places duplicates can happen"

### Tomorrow
- Day 6: System design — URL shortener
- Clarify requirements, core entities, hashing, database choice, cache layer
- LeetCode: Container With Most Water (Medium)
- Apply to 5 positions on Boss直聘


## 2026-07-10 · Day 4 · GlobalExceptionHandler + POST lifecycle + Kadane's algorithm

**LeetCode:** Maximum Subarray (Kadane's) — solved
**Study topic:** GlobalExceptionHandler, full request lifecycle of POST /api/transactions
**Applications sent:** Canada 0 · China 0
**Mock interview:** No

### Done
- Read GlobalExceptionHandler: understood 3 handlers (validation, runtime, catch-all)
- Traced ResourceNotFoundException → handleRuntimeException → 400 response
- Explained full POST /api/transactions lifecycle: Frontend → JwtFilter → SecurityConfig → Controller → Service → Mapper → DB → JSON response
- Understood every request goes through JwtFilter + SecurityConfig, not just login
- Maximum Subarray: learned Kadane's algorithm (current = max(current + nums[i], nums[i]))

### Struggled with
- Initially overcomplicated Maximum Subarray with nested loops
- Confused request lifecycle order (thought SecurityConfig runs before JwtFilter)

### Tomorrow
- Day 5: Mock interview day — practice 5 questions out loud, record yourself
- LeetCode: 3Sum (Medium) — two pointer pattern
- Boss直聘: set up profile if not done, save 10 JDs

## 2026-07-10 · Day 3 · AiService SSE streaming + Product of Array Except Self

**LeetCode:** Product of Array Except Self (prefix/suffix) — solved with help, understood pattern
**Study topic:** AiService code, SSE streaming, SSE vs WebSocket
**Applications sent:** Canada 0 · China 0
**Mock interview:** No

### Done
- Read AiService: understood categorizeTransaction, doStream (SSE), extractText, withRetry
- Understood SSE streaming flow: Claude API streaming → extract text deltas → SseEmitter.send() → frontend EventSource → typewriter effect
- Can explain SSE vs WebSocket choice in English (one-directional = SSE, bidirectional = WebSocket)
- Practiced "How did you implement streaming?" answer in English
- Product of Array Except Self: learned prefix/suffix pattern, understood left×right approach, coded in Python and Java

### Struggled with
- Prefix/suffix product logic took multiple passes (left*=nums[i] vs nums[i-1] difference between Python and Java)
- Python range(n-1, -1, -1) syntax needed explanation

### Tomorrow
- Day 4: Read GlobalExceptionHandler
- Trace what happens when ResourceNotFoundException is thrown
- Practice full request lifecycle of POST /api/transactions in English
- LeetCode: Maximum Subarray (Kadane's algorithm)
- Boss直聘: set up profile, save 10 JDs

## 2026-07-09 · Day 2 · Dynamic SQL deep-dive + Buy/Sell Stock & Contains Duplicate

**LeetCode:** Best Time to Buy and Sell Stock (two pointer) — solved; Contains Duplicate (HashMap) — solved
**Study topic:** TransactionMapper.xml, MyBatis vs JPA, PageHelper
**Applications sent:** Canada 0 · China 0
**Mock interview:** No

### Done
- Read TransactionMapper.xml: understood all 4 queries (selectByFilter, selectByDateRange, selectCategoryStatistics, selectMonthlySummary)
- Understood dynamic SQL: <where> + <if> tags, one query handles all filter combinations
- Wrote 3 reasons for MyBatis over JPA: SQL control, cleaner dynamic SQL, interview relevance
- Learned PageHelper concept: MyBatis interceptor, auto-appends LIMIT/OFFSET
- Practiced "What is dynamic SQL?" answer in English
- Best Time to Buy and Sell Stock: two pointer, understood why left jumps to right
- Contains Duplicate: HashMap approach, learned simpler HashSet alternative

### Struggled with
- Couldn't find PageHelper in codebase (learned concept only)
- getOrDefault syntax error (needs two params: key + default)

### Tomorrow
- Day 3: Read AiService / DeepSeek integration code
- Understand SSE flow: SseEmitter → React EventSource
- Write: SSE vs WebSocket comparison
- LeetCode: Product of Array Except Self (Medium)

## 2026-07-08 · Day 1 · JWT security deep-dive + Two Sum & Valid Anagram

**LeetCode:** Two Sum (HashMap) — solved; Valid Anagram (HashMap) — solved
**Study topic:** JwtAuthenticationFilter + SecurityFilterChain
**Applications sent:** Canada 0 · China 0
**Mock interview:** No

### Done
- Read JwtAuthenticationFilter line by line, understood full flow: extract token → validate → set SecurityContext
- Understood why SSE needs query param fallback (EventSource can't set headers)
- Read SecurityFilterChain: CSRF disabled, stateless session, route rules, addFilterBefore
- Understood relationship: SecurityConfig registers JwtFilter at startup, Spring auto-executes per request
- Practiced "Walk me through JWT auth" answer in English
- Two Sum: learned HashMap pattern (查complement，存num)
- Valid Anagram: HashMap frequency count, Java + Python

### Struggled with
- Understanding how SecurityConfig and JwtFilter relate at runtime (resolved)
- Two Sum HashMap logic needed multiple walkthroughs before clicking

### Tomorrow
- Day 2: Read TransactionMapper.xml, understand dynamic SQL and every <if> tag
- Write why MyBatis over JPA (3 bullet points)
- Read PageHelper setup, explain SQL interception
- LeetCode: Best Time to Buy and Sell Stock + Contains Duplicate

## Day 0 — Setup complete

**Status:** Plan created. Project Knowledge uploaded. Ready to start Day 1.

**Tomorrow:** Day 1 — Read JwtAuthenticationFilter line by line, explain JWT flow in English.
