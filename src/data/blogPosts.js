export const blogPosts = [
  {
    id: 1,
    title: "Optimizing Salesforce for Large Data Volumes (LDV): A 2025 Architecture Guide",
    excerpt: "Mastering scalability in Salesforce requires more than just indexing. Dive deep into locking contention minimization, Skinny Tables strategy, and the new Async SOQL patterns for enterprise-grade performance.",
    content: `
      <div class="article-intro">
        <p class="lead-text">When your Salesforce org crosses the 20 million record threshold, everything changes. Query performance degrades, reports time out, and standard best practices no longer apply. This isn't just about storage—it's about fundamentally rethinking how your data architecture supports business operations at scale.</p>
      </div>

      <h2>The Reality of Enterprise Scale</h2>
      <p>Most Salesforce implementations start with ambitious goals but conservative data volumes. Then reality hits. Your customer base grows exponentially. Historical data accumulates. Integration systems pump millions of transactions monthly. Suddenly, your once-responsive org starts showing cracks.</p>
      
      <p>Welcome to <strong>Large Data Volumes (LDV)</strong>—where technical debt accumulates faster than your development backlog, and every query needs surgical precision.</p>

      <blockquote class="highlight-quote">
        "At enterprise scale, performance isn't a feature you add later. It's an architectural constraint you design for from day one." 
      </blockquote>

      <h2>1. Beyond Standard Indexing: The Power of Skinny Tables</h2>
      
      <p>Every Salesforce admin knows about custom indexes. But when you're dealing with 50+ million records, indexes alone won't save you from timeouts. Enter <strong>Skinny Tables</strong>—Salesforce's secret weapon for LDV optimization.</p>

      <h3>What Are Skinny Tables?</h3>
      <p>Skinny Tables are custom database tables that Salesforce creates in their underlying infrastructure. Unlike standard tables that contain every field (including audit fields, system timestamps, and unused custom fields), Skinny Tables contain only the columns you specify.</p>

      <div class="code-example-wrapper">
        <pre><code>// Ideal Candidates for Skinny Tables:
// 
// 1. Objects with > 1M records
// 2. List views that filter across related objects
// 3. Reports experiencing frequent timeouts
// 4. Queries joining Account + Contact + Opportunity

// Example: Account Skinny Table
Fields: Id, Name, Industry, AnnualRevenue, OwnerId
Result: 10x-100x query performance improvement</code></pre>
      </div>

      <div class="pro-tip">
        <strong>💡 Pro Tip:</strong> Skinny Tables must be requested through Salesforce Support. Document your use case with query execution plans and specific timeout examples to expedite approval.
      </div>

      <h2>2. Conquering Record Locking Contention</h2>

      <p>The most frustrating error in Salesforce: <code class="inline-code">UNABLE_TO_LOCK_ROW</code>. It appears randomly, breaks batch jobs mid-execution, and leaves you debugging ghost issues that "work fine in sandbox."</p>

      <h3>Understanding Parent-Child Skew</h3>
      <p>When 10,000 Contact records all try to update the same parent Account simultaneously, Salesforce locks that Account record. Every thread waits. Your batch job times out. Users see errors.</p>

      <div class="diagram-box">
        <p><strong>The Problem:</strong></p>
        <pre>Batch Processing Update
   ↓
10,000 Contacts → All update Account #12345 simultaneously
   ↓
Database Row Lock on Account #12345
   ↓
9,999 transactions WAIT
   ↓
Timeout / Error Cascade</pre>
      </div>

      <h3>The Solution: Asynchronous Processing</h3>

      <div class="code-example-wrapper">
        <pre><code>// ❌ BAD: Direct parent update in trigger
trigger ContactTrigger on Contact (after update) {
    Set&lt;Id&gt; accountIds = new Set&lt;Id&gt;();
    for(Contact c : Trigger.new) {
        accountIds.add(c.AccountId);
    }
    
    List&lt;Account&gt; accounts = [SELECT Id, LastModifiedDate 
                               FROM Account WHERE Id IN :accountIds];
    for(Account a : accounts) {
        a.Last_Contact_Update__c = System.now();
    }
    update accounts; // LOCK CONTENTION!
}

// ✅ GOOD: Platform Events for async processing
trigger ContactTrigger on Contact (after update) {
    List&lt;Contact_Updated__e&gt; events = new List&lt;Contact_Updated__e&gt;();
    
    for(Contact c : Trigger.new) {
        events.add(new Contact_Updated__e(
            AccountId__c = c.AccountId,
            Timestamp__c = System.now()
        ));
    }
    
    EventBus.publish(events); // Fire and forget
}</code></pre>
      </div>

      <p>By decoupling the Account update from the Contact transaction, you eliminate simultaneous lock requests. The Platform Event subscriber can batch Account updates intelligently, reducing contention by 95%.</p>

      <h2>3. Strategic Data Archival</h2>

      <p>Not all data needs to be operational. If you haven't queried a record in 2 years, why is it slowing down today's reports?</p>

      <h3>Big Objects: Your Historical Data Warehouse</h3>

      <p>Big Objects can store billions of records with consistent performance. They're perfect for:</p>

      <ul class="styled-list">
        <li><strong>Audit Logs:</strong> Retain 10 years of field history for compliance</li>
        <li><strong>IoT Sensor Data:</strong> Millions of telemetry readings</li>
        <li><strong>Archived Orders:</strong> Completed transactions older than fiscal year</li>
        <li><strong>Email Campaign History:</strong> Every send, click, and bounce for analytics</li>
      </ul>

      <div class="code-example-wrapper">
        <pre><code>// Async SOQL Query on Big Object
// Returns up to 100k records with <5 second latency

public class BigObjectQueryExample {
    @future
    public static void queryArchivedOrders(Date startDate, Date endDate) {
        String query = 'SELECT OrderId__c, Amount__c, Status__c ' + 
                       'FROM Order_Archive__b ' +
                       'WHERE OrderDate__c >= ' + startDate.format() +
                       ' AND OrderDate__c <= ' + endDate.format() +
                       ' ORDER BY OrderDate__c DESC';
        
        // Submit async query
        Reports.ReportResults results = Reports.ReportManager.runAsyncReport(
            query, true
        );
        
        // Process results when ready...
    }
}</code></pre>
      </div>

      <h2>4. Index Strategy: The 5 Golden Rules</h2>

      <p>Custom indexes aren't magic. Poorly designed indexes can actually degrade performance. Follow these principles:</p>

      <div class="numbered-section">
        <div class="number-item">
          <span class="number">1</span>
          <div>
            <h4>Index Fields Used in WHERE Clauses</h4>
            <p>If you filter on <code>Status__c</code> in every report, index it. Don't index fields you only display.</p>
          </div>
        </div>

        <div class="number-item">
          <span class="number">2</span>
          <div>
            <h4>Avoid Indexing Low-Selectivity Fields</h4>
            <p>If 90% of records have the same value (e.g., IsActive = true), the index provides minimal benefit.</p>
          </div>
        </div>

        <div class="number-item">
          <span class="number">3</span>
          <div>
            <h4>Composite Indexes for Multi-Field Filters</h4>
            <p>When you always query <code>WHERE Country = 'US' AND Status = 'Active'</code>, request a composite index on both fields.</p>
          </div>
        </div>

        <div class="number-item">
          <span class="number">4</span>
          <div>
            <h4>Monitor Query Optimizer Decisions</h4>
            <p>Use the Query Plan tool in Developer Console to verify Salesforce is actually using your index.</p>
          </div>
        </div>

        <div class="number-item">
          <span class="number">5</span>
          <div>
            <h4>Less is More</h4>
            <p>Too many indexes slow down DML operations. Every insert/update must update every index. Aim for 5-7 strategic indexes per object maximum.</p>
          </div>
        </div>
      </div>

      <h2>5. The Governor Limits Playbook</h2>

      <p>In LDV environments, governor limits aren't theoretical—they're daily obstacles. Here's how to navigate them:</p>

      <h3>SOQL Query Limit (100 queries)</h3>
      <div class="best-practice">
        <strong>❌ Anti-Pattern:</strong> Query inside a loop<br>
        <strong>✅ Best Practice:</strong> Bulkify with Sets and Maps
      </div>

      <div class="code-example-wrapper">
        <pre><code>// Bulkified query example
Map&lt;Id, Account&gt; accountMap = new Map&lt;Id, Account&gt;(
    [SELECT Id, Name, Industry FROM Account 
     WHERE Id IN :accountIds]
);

for(Contact c : contacts) {
    Account a = accountMap.get(c.AccountId);
    // Process without additional query
}</code></pre>
      </div>

      <h3>Heap Size Limit (6MB synchronous / 12MB async)</h3>
      <div class="best-practice">
        <strong>❌ Anti-Pattern:</strong> Loading 50k records into memory<br>
        <strong>✅ Best Practice:</strong> Batch processing with Database.Stateful
      </div>

      <h2>Monitoring & Observability</h2>

      <p>You can't optimize what you can't measure. Implement these monitoring strategies:</p>

      <ul class="styled-list">
        <li><strong>Event Monitoring:</strong> Track slow queries in production with field-level detail</li>
        <li><strong>Custom Metrics Dashboard:</strong> Monitor average query time by object over time</li>
        <li><strong>Scheduled Apex Jobs:</strong> Alert when batch jobs exceed SLA thresholds</li>
        <li><strong>Debug Logs:</strong> Capture execution time for critical transactions</li>
      </ul>

      <h2>Conclusion: Performance as Culture</h2>

      <p>Optimizing Salesforce for large data volumes isn't a one-time project—it's an ongoing architectural discipline. Every new feature, every integration endpoint, every custom formula field must be evaluated through the lens of scale.</p>

      <div class="key-takeaways">
        <h3>Key Takeaways</h3>
        <ul>
          <li>Request Skinny Tables for objects with >1M records and complex reporting needs</li>
          <li>Use Platform Events to eliminate record locking contention</li>
          <li>Archive historical data to Big Objects to keep operational tables lean</li>
          <li>Design indexes strategically—more isn't always better</li>
          <li>Build monitoring into your architecture from day one</li>
        </ul>
      </div>

      <p class="closing-text">The organizations that master LDV optimization don't just have faster systems—they have competitive advantages. When your competitors' systems buckle under load, yours scales effortlessly. That's the power of thoughtful architecture.</p>
    `,
    author: "Jawad Chafai",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    tags: ["Salesforce", "Architecture", "LDV", "Performance"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The Death of Workflow Rules: Mastering Complex Flows in 2025",
    excerpt: "With Workflow Rules and Process Builder officially retired, Flow is the new king. But great power brings great complexity. Learn the 'One Record, One Flow' pattern and how to avoid CPU time limit exceptions.",
    content: `
      <h2>Flow is Code (Literally)</h2>
      <p>The biggest mistake consultancies make is treating Salesforce Flow like a simple admin tool. It is a visual programming language. It compiles to code. It consumes heap size. It hits governor limits.</p>

      <h3>The "One Record, One Flow" Pattern</h3>
      <p>To maintain order, strictly adhere to the Trigger Handler pattern within Flow:</p>
      <ul>
          <li>Create a single <strong>Record-Triggered Flow</strong> per object (e.g., "Account - After Save").</li>
          <li>Use <strong>Subflows</strong> for specific logic blocks (e.g., "Subflow - Update Renewal Date").</li>
          <li>Use the <strong>Decision Element</strong> as your dispatcher.</li>
      </ul>
      <p>This architecture allows you to control the order of execution, debug easily, and creates reusable components.</p>

      <h3>Avoiding the CPU Time Limit</h3>
      <p>Loops inside Flows are dangerous. Performing a <code>Get Records</code> or <code>Update Records</code> inside a loop is an architectural sin. It guarantees you will hit SOQL query limits (100 queries). instead:</p>
      <ol>
          <li><strong>Loop</strong> through your collection.</li>
          <li><strong>Assign</strong> changes to a separate collection variable.</li>
          <li><strong>Update</strong> the entire collection at once <em>after</em> the loop finishes.</li>
      </ol>

      <p>Modern Flow orchestration allows for powerful asynchronous processing. Use "Scheduled Paths" to move heavy processing off the main transaction thread, improving the user experience significantly.</p>
    `,
    author: "Automation Expert",
    date: "Dec 25, 2025",
    readTime: "6 min read",
    tags: ["Salesforce", "Flow", "Automation", "DevOps"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Integration Patterns: Event-Driven Architecture vs. REST API",
    excerpt: "Stop building tight coupling between systems. Learn why Platform Events and the Pub/Sub API are superior for scalability compared to traditional point-to-point REST integrations.",
    content: `
      <h2>The Tightly Coupled Trap</h2>
      <p>Traditional integrations often rely on point-to-point REST calls. System A calls System B. If System B is down, System A fails. This is fragile. In 2025, enterprise architecture demands <strong>decoupling</strong>.</p>

      <h3>Enter Platform Events (The Pub/Sub Model)</h3>
      <p>Instead of System A talking to System B, System A simply "publishes" an event to the Salesforce Event Bus. It doesn't care who is listening. It just says, "Order Created."</p>
      <p>System B, System C, and the Data Warehouse all "subscribe" to that event channel. They pick up the message when they are ready. If System B is effectively down for maintenance, it creates a replay ID and processes the missed events when it comes back online. Zero data loss. Zero dependency.</p>

      <h3>When to use REST vs. Events?</h3>
      <ul>
          <li><strong>Use REST (Synchronous):</strong> When you need an immediate answer. e.g., "Is this credit card valid?" You cannot proceed without the response.</li>
          <li><strong>Use Platform Events (Asynchronous):</strong> When you just need to notify. e.g., "Opportunity Closed Won." ERP needs to know, but the Sales User shouldn't wait for the ERP to respond before the screen refreshes.</li>
      </ul>

      <p>Mastering this distinction is what separates junior developers from enterprise architects.</p>
    `,
    author: "Integration Specialist",
    date: "Dec 22, 2025",
    readTime: "7 min read",
    tags: ["Salesforce", "Integration", "API", "Architecture"],
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2696&auto=format&fit=crop"
  }
];

export const allTags = ["All", "Salesforce", "Architecture", "Flow", "Automation", "Integration", "LDV", "Performance", "DevOps"];
