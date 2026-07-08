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
