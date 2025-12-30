export const blogPosts = [
  {
    id: 1,
    title: "Optimizing Salesforce for Large Data Volumes (LDV): A 2025 Architecture Guide",
    excerpt: "Mastering scalability in Salesforce requires more than just indexing. Dive deep into locking contention minimization, Skinny Tables strategy, and the new Async SOQL patterns for enterprise-grade performance.",
    content: `
      <h2>The Reality of Enterprise Scale</h2>
      <p>When an Org surpasses 20 million records, standard best practices become performance bottlenecks. As architects, we stop thinking about "how to build" and start obsessing over "how it queries." Large Data Volumes (LDV) aren't just a storage issue; they are a governance and architectural challenge that defines the stability of your entire business operation.</p>
      
      <h3>1. Beyond Standard Indexing: Skinny Tables</h3>
      <p>Most developers know about custom indexes. Fewer leverage <strong>Skinny Tables</strong>. These are custom tables in the Salesforce underlying database that contain a subset of fields from a standard or custom object. Because they avoid joins and contain fewer columns, they can improve query performance by 100x.</p>
      <pre><code>// Identify candidates for Skinny Tables
// 1. Tables with millions of rows
// 2. Reports/List Views that filter on fields from both the base table and associated separate tables
// 3. Frequent timeouts on standard SOQL queries</code></pre>
      
      <h3>2. Mitigating Record Locking Contention</h3>
      <p>Parent-child skew is the silent killer of batch jobs. When 10,000 "Contact" records all try to update the same "Account" parent simultaneously, the database locks the parent, forcing threads to wait. This leads to the dreaded <code>UNABLE_TO_LOCK_ROW</code> error.</p>
      <p><strong>The Fix:</strong> Implement a "Round Robin" assignment strategy or use Platform Events to decouple the transaction. By processing updates asynchronously, you reduce the probability of simultaneous lock requests on the same parent record.</p>

      <h3>3. Archival Strategies</h3>
      <p>Data that isn't queried shouldn't be in the operational table. Use <strong>Big Objects</strong> for historical data that needs to be compliant but not performant. Combined with Async SOQL, this allows you to keep your operational tables lean while maintaining access to terabytes of history.</p>

      <blockquote>"Performance is not a feature you add at the end. It is an architectural constraint you design for from day one."</blockquote>
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
