const stories = [
  {
    id: "chemical-tank",
    label: "Countywide",
    title: "OC officials face questions after chemical tank evacuations are lifted",
    summary:
      "Residents want accountability, reimbursement details, and a clearer public record after a regional emergency.",
    time: "Updated 18 min ago",
    author: "Voice of OC Staff",
    image:
      "https://i0.wp.com/voiceofoc.org/wp-content/uploads/2026/05/0A4A3648.jpg?resize=800%2C600&ssl=1",
    caption:
      "A Red Cross shelter was set up during the Orange County chemical tank emergency. Credit: Voice of OC photography.",
    body: [
      "Orange County residents are asking for a clearer public accounting of what happened, who made decisions, and what safeguards come next after evacuations tied to a chemical tank emergency were lifted.",
      "The central civic question is not only whether the immediate danger has passed. It is whether local agencies can explain the timeline, costs, warnings, public communication, and reimbursement process in a way residents can inspect.",
      "Voice of OC's mobile experience should keep that follow-up visible after the breaking-news moment fades, connecting the story to public meetings, source documents, and city-specific alerts."
    ]
  },
  {
    id: "santa-ana-budget",
    label: "Santa Ana",
    title: "Budget cuts loom for parks and after-school programs in Santa Ana",
    summary:
      "A city budget decision could affect youth programs, park repairs, and neighborhood services.",
    time: "1 hr ago",
    author: "Civic Desk",
    image:
      "https://i0.wp.com/voiceofoc.org/wp-content/uploads/2024/12/GerardoPark_santaAna_2024_nichols22.jpg?resize=800%2C600&ssl=1",
    caption:
      "Children play at Gerardo Mouet Park in Santa Ana. Credit: Voice of OC photography.",
    body: [
      "Santa Ana residents are watching budget talks that could shape park repairs, youth programming, and neighborhood services in the year ahead.",
      "A useful civic-news app should connect this story to meeting dates, budget documents, and reminders before public comment closes.",
      "Following Santa Ana in My OC would keep related updates together instead of scattering them across a general news feed."
    ]
  },
  {
    id: "infant-health",
    label: "Public Health",
    title: "Officials will not pursue renewed funding for Black infant health program",
    summary:
      "Community health advocates say the decision leaves families with fewer targeted support options.",
    time: "3 hrs ago",
    author: "Health Reporter",
    image:
      "https://i0.wp.com/voiceofoc.org/wp-content/uploads/2026/05/IMG_6463.jpg?resize=800%2C600&ssl=1",
    caption:
      "A family support moment from local public health reporting. Credit: Voice of OC photography.",
    body: [
      "A county funding decision has raised concerns among advocates who say maternal and infant health programs need consistent public support.",
      "The story belongs in a civic utility because it sits at the intersection of public health, county budgeting, and unequal outcomes.",
      "Readers should be able to follow the topic, save the story, and inspect the source documents behind the decision."
    ]
  }
];

const watchItems = [
  {
    entity: "Garden Grove and Stanton",
    action: "Special meeting follow-up",
    title: "Cities request accountability report after emergency evacuations",
    next: "Next public update expected this week"
  },
  {
    entity: "Santa Ana",
    action: "Budget hearing",
    title: "Council weighs cuts to parks and after-school programs",
    next: "Public comment window remains open"
  },
  {
    entity: "County Supervisors",
    action: "Public health funding",
    title: "Black infant health program renewal is not moving forward",
    next: "Advocates are requesting county response"
  }
];

const alerts = [
  {
    tone: "urgent",
    label: "Breaking",
    title: "Chemical tank evacuation order lifted for affected OC neighborhoods",
    time: "18 min ago"
  },
  {
    tone: "important",
    label: "Santa Ana",
    title: "Budget hearing reminder: public comment closes tonight",
    time: "2 hrs ago"
  },
  {
    tone: "important",
    label: "My OC",
    title: "New story in Public Health, a topic you follow",
    time: "3 hrs ago"
  }
];

const followedTopics = ["Countywide", "Santa Ana", "Public Health", "Homelessness", "Arts & Culture"];
const saved = new Set(["santa-ana-budget"]);
const appView = document.querySelector("#appView");
let currentRole = "editor";
let currentItRole = "accessAdmin";

const roleDefinitions = {
  reporter: {
    label: "Reporter",
    summary: "Can draft stories, edit own drafts, upload source notes, and submit for review.",
    permissions: ["Draft", "Edit own", "Submit"]
  },
  editor: {
    label: "Editor",
    summary: "Can edit newsroom copy, approve stories, schedule alerts, and request revisions.",
    permissions: ["Edit all", "Approve", "Schedule"]
  },
  admin: {
    label: "Admin",
    summary: "Can manage staff access, publish, change sections, and review the audit trail.",
    permissions: ["Publish", "Manage users", "Audit"]
  },
  viewer: {
    label: "Viewer",
    summary: "Can review drafts and analytics without changing editorial content.",
    permissions: ["Read only", "Comment"]
  }
};

const staffStories = [
  {
    id: "chemical-tank",
    title: "OC officials face questions after chemical tank evacuations are lifted",
    section: "Countywide",
    owner: "Civic Desk",
    status: "Needs editor review",
    updated: "10:18 AM",
    sensitivity: "Breaking follow-up",
    sourceCount: 4,
    notes: "Add reimbursement source document before publishing the follow-up alert."
  },
  {
    id: "santa-ana-budget",
    title: "Budget cuts loom for parks and after-school programs in Santa Ana",
    section: "Santa Ana",
    owner: "City Reporter",
    status: "Draft",
    updated: "9:42 AM",
    sensitivity: "Budget",
    sourceCount: 3,
    notes: "Waiting on city finance response."
  },
  {
    id: "infant-health",
    title: "Officials will not pursue renewed funding for Black infant health program",
    section: "Public Health",
    owner: "Health Reporter",
    status: "Approved",
    updated: "8:55 AM",
    sensitivity: "Public health",
    sourceCount: 5,
    notes: "Ready for homepage placement and newsletter summary."
  }
];

const auditEvents = [
  "Editor approved Public Health story for homepage review.",
  "Reporter added source document to Santa Ana budget draft.",
  "Admin updated alert permissions for breaking news channel."
];

const itRoleDefinitions = {
  helpdesk: {
    label: "Helpdesk",
    summary: "Can verify identity, reset MFA, and route access requests without changing publish permissions.",
    permissions: ["Reset MFA", "Route requests", "Suspend sessions"]
  },
  accessAdmin: {
    label: "Access Admin",
    summary: "Can assign newsroom roles, approve access requests, deactivate accounts, and enforce least privilege.",
    permissions: ["Assign roles", "Deactivate", "Approve access"]
  },
  security: {
    label: "Security Auditor",
    summary: "Can review audit logs, risky sessions, failed login patterns, and permission changes.",
    permissions: ["Audit", "Risk review", "Export logs"]
  }
};

const accessRequests = [
  {
    name: "Maya Chen",
    team: "City Desk",
    request: "Reporter access for Anaheim coverage",
    status: "Identity verified",
    risk: "Low",
    ticket: "VOC-1042"
  },
  {
    name: "Luis Ortega",
    team: "Audience",
    request: "Temporary newsletter editor access",
    status: "Needs editor sponsor",
    risk: "Medium",
    ticket: "VOC-1043"
  },
  {
    name: "Board Observer",
    team: "Governance",
    request: "Read-only viewer account",
    status: "Pending approval",
    risk: "Low",
    ticket: "VOC-1044"
  }
];

const accountHealth = [
  { name: "Civic Desk", role: "Editor", mfa: "Enabled", session: "Active", lastSeen: "8 min ago" },
  { name: "Health Reporter", role: "Reporter", mfa: "Enabled", session: "Active", lastSeen: "22 min ago" },
  { name: "Former Contributor", role: "Viewer", mfa: "Expired", session: "Suspended", lastSeen: "31 days ago" }
];

const itAuditEvents = [
  "Access Admin approved Reporter role for City Desk after sponsor confirmation.",
  "Helpdesk reset MFA for Health Reporter after identity verification.",
  "Security Auditor flagged expired Viewer account for deactivation."
];

function can(action) {
  const permissions = {
    draft: ["reporter", "editor", "admin"],
    editOwn: ["reporter", "editor", "admin"],
    editAll: ["editor", "admin"],
    approve: ["editor", "admin"],
    publish: ["admin"],
    manageUsers: ["admin"],
    viewOnly: ["viewer", "reporter", "editor", "admin"]
  };

  return permissions[action]?.includes(currentRole);
}

function canIt(action) {
  const permissions = {
    resetMfa: ["helpdesk", "accessAdmin"],
    approveAccess: ["accessAdmin"],
    assignRoles: ["accessAdmin"],
    deactivate: ["accessAdmin"],
    audit: ["security", "accessAdmin"],
    exportLogs: ["security"],
    suspendSession: ["helpdesk", "accessAdmin", "security"]
  };

  return permissions[action]?.includes(currentItRole);
}

function imageCard(story, compact = false) {
  return `
    <article class="article-card ${compact ? "compact" : ""}">
      ${compact ? "" : `<img src="${story.image}" alt="">`}
      <div class="article-body">
        <div class="tag">${story.label}</div>
        <h3 class="article-title">${story.title}</h3>
        <div class="article-actions">
          <span class="meta">${story.time}</span>
          <button class="save-button ${saved.has(story.id) ? "saved" : ""}" type="button" data-save="${story.id}" aria-label="Save story">
            ${saved.has(story.id) ? "★" : "☆"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderHome() {
  const lead = stories[0];
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Today in Orange County</div>
          <h1 class="screen-title">What your city is doing now</h1>
        </div>
      </div>

      <article class="lead-card" data-story="${lead.id}">
        <img class="lead-image" src="${lead.image}" alt="">
        <div class="lead-body">
          <div class="tag">${lead.label}</div>
          <h2 class="lead-title">${lead.title}</h2>
          <p class="summary">${lead.summary}</p>
          <div class="button-row">
            <button class="primary-button" type="button" data-story-open="${lead.id}">Read story</button>
            <button class="secondary-button" type="button" data-view="alerts">Follow updates</button>
          </div>
        </div>
      </article>

      <div class="section-label">Civic Watch</div>
      <div class="watch-list">
        ${watchItems.map(watchItem).join("")}
      </div>

      <div class="section-label">Latest Reporting</div>
      <div class="article-list">
        ${stories.slice(1).map((story) => imageCard(story)).join("")}
      </div>

      <section class="module orange">
        <h2 class="module-title">Morning Report</h2>
        <p class="summary">A concise daily briefing on public decisions, local accountability, arts, and community life.</p>
        <form class="newsletter-form">
          <input type="email" value="" placeholder="Email address" aria-label="Email address">
          <button class="primary-button" type="submit">Sign up</button>
        </form>
      </section>
    </section>
  `;
}

function watchItem(item) {
  return `
    <article class="watch-item">
      <div class="tag">${item.entity} · ${item.action}</div>
      <h3 class="watch-title">${item.title}</h3>
      <p class="summary">${item.next}</p>
    </article>
  `;
}

function renderMyOC() {
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Personalized by city and topic</div>
          <h1 class="screen-title">My OC</h1>
        </div>
      </div>

      <div class="chip-row">
        ${followedTopics.map((topic) => `<button class="chip active" type="button">${topic}</button>`).join("")}
        <button class="chip" type="button">+ Irvine</button>
        <button class="chip" type="button">+ Anaheim</button>
      </div>

      <section class="module">
        <h2 class="module-title">Why this is in My OC</h2>
        <p class="summary">You follow Santa Ana and Public Health. New budget and county health stories will stay grouped here.</p>
      </section>

      <div class="section-label">For your cities</div>
      <div class="article-list">
        ${stories.slice(1).map((story) => imageCard(story)).join("")}
      </div>

      <div class="section-label">Upcoming civic dates</div>
      <div class="watch-list">${watchItems.slice(1).map(watchItem).join("")}</div>
    </section>
  `;
}

function renderLatest() {
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Chronological feed</div>
          <h1 class="screen-title">Latest</h1>
        </div>
      </div>
      <div class="filter-row">
        <button class="filter-button active" type="button">All</button>
        <button class="filter-button" type="button">News</button>
        <button class="filter-button" type="button">Opinion</button>
        <button class="filter-button" type="button">Arts</button>
      </div>
      <div class="section-label">Newest posts</div>
      <div class="article-list">
        ${stories.map((story) => imageCard(story, true)).join("")}
      </div>
    </section>
  `;
}

function renderAlerts() {
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Controlled civic notifications</div>
          <h1 class="screen-title">Alerts</h1>
        </div>
      </div>
      <div class="alert-list">
        ${alerts
          .map(
            (alert) => `
              <article class="alert-card ${alert.tone === "urgent" ? "urgent" : ""}">
                <div class="tag">${alert.label}</div>
                <h3 class="article-title">${alert.title}</h3>
                <span class="meta">${alert.time}</span>
              </article>
            `
          )
          .join("")}
      </div>
      <section class="module">
        <h2 class="module-title">Alert preferences</h2>
        <div class="chip-row">
          <button class="chip active" type="button">Breaking</button>
          <button class="chip active" type="button">Followed cities</button>
          <button class="chip" type="button">Elections</button>
          <button class="chip" type="button">Arts</button>
        </div>
      </section>
    </section>
  `;
}

function renderSaved() {
  const savedStories = stories.filter((story) => saved.has(story.id));
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Reading follow-up</div>
          <h1 class="screen-title">Saved</h1>
        </div>
      </div>
      <div class="article-list">
        ${savedStories.length ? savedStories.map((story) => imageCard(story)).join("") : `<section class="module"><h2 class="module-title">No saved stories yet</h2><p class="summary">Tap the star on any story to keep it here.</p></section>`}
      </div>
      <div class="section-label">Followed topics</div>
      <div class="chip-row">${followedTopics.map((topic) => `<button class="chip active" type="button">${topic}</button>`).join("")}</div>
    </section>
  `;
}

function renderSupport() {
  appView.innerHTML = `
    <section class="screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Support nonprofit local journalism</div>
          <h1 class="screen-title">Fund accountability reporting</h1>
        </div>
      </div>
      <section class="support-card module orange">
        <h2 class="module-title">Voice of OC is built for public-interest reporting.</h2>
        <p class="summary">Your support helps reporters keep following city budgets, county decisions, public records, arts, and community life.</p>
        <div class="amount-row" style="margin-top:12px">
          <button class="amount-button" type="button">$10</button>
          <button class="amount-button active" type="button">$25</button>
          <button class="amount-button" type="button">$50</button>
          <button class="amount-button" type="button">$100</button>
        </div>
        <div class="button-row">
          <button class="primary-button" type="button">Donate monthly</button>
          <button class="secondary-button" type="button">One time</button>
        </div>
      </section>
      <section class="module">
        <h2 class="module-title">Trust links</h2>
        <p class="summary">Mission and values, funding transparency, nonprofit status, corrections, and republishing policies should be one tap away.</p>
      </section>
    </section>
  `;
}

function roleOption([key, role]) {
  return `
    <button class="role-button ${currentRole === key ? "active" : ""}" type="button" data-role="${key}">
      <strong>${role.label}</strong>
      <span>${role.permissions.join(" · ")}</span>
    </button>
  `;
}

function permissionPill(label, enabled) {
  return `<span class="permission-pill ${enabled ? "enabled" : "locked"}">${enabled ? "Allowed" : "Locked"} · ${label}</span>`;
}

function staffStoryCard(item) {
  const editable = can("editAll") || (can("editOwn") && item.owner.includes("Reporter"));
  return `
    <article class="staff-card">
      <div class="staff-card-top">
        <div>
          <div class="tag">${item.section} · ${item.sensitivity}</div>
          <h3 class="staff-title">${item.title}</h3>
        </div>
        <span class="status-badge">${item.status}</span>
      </div>
      <div class="staff-meta-grid">
        <span>Owner<br><strong>${item.owner}</strong></span>
        <span>Updated<br><strong>${item.updated}</strong></span>
        <span>Sources<br><strong>${item.sourceCount}</strong></span>
      </div>
      <p class="summary">${item.notes}</p>
      <div class="button-row">
        <button class="primary-button" type="button" data-edit-story="${item.id}" ${editable ? "" : "disabled"}>${editable ? "Edit draft" : "View only"}</button>
        <button class="secondary-button" type="button" data-workflow="approve" ${can("approve") ? "" : "disabled"}>Approve</button>
        <button class="secondary-button" type="button" data-workflow="publish" ${can("publish") ? "" : "disabled"}>Publish</button>
      </div>
    </article>
  `;
}

function renderStaff() {
  const role = roleDefinitions[currentRole];
  appView.innerHTML = `
    <section class="screen staff-screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">Editable newsroom workspace</div>
          <h1 class="screen-title">Staff Studio</h1>
        </div>
      </div>

      <section class="module orange">
        <h2 class="module-title">${role.label} access</h2>
        <p class="summary">${role.summary}</p>
        <div class="permission-grid">
          ${permissionPill("Draft content", can("draft"))}
          ${permissionPill("Edit all copy", can("editAll"))}
          ${permissionPill("Approve stories", can("approve"))}
          ${permissionPill("Publish live", can("publish"))}
          ${permissionPill("Manage users", can("manageUsers"))}
          ${permissionPill("Read workspace", can("viewOnly"))}
        </div>
      </section>

      <div class="section-label">Switch role</div>
      <div class="role-grid">
        ${Object.entries(roleDefinitions).map(roleOption).join("")}
      </div>

      <div class="section-label">Editorial queue</div>
      <div class="staff-list">
        ${staffStories.map(staffStoryCard).join("")}
      </div>

      <div class="section-label">Quick edit form</div>
      <form class="edit-form">
        <label>
          Headline
          <input name="headline" value="${staffStories[0].title}" ${can("draft") ? "" : "disabled"}>
        </label>
        <label>
          Section
          <select name="section" ${can("editAll") || can("draft") ? "" : "disabled"}>
            <option>Countywide</option>
            <option>Santa Ana</option>
            <option>Public Health</option>
            <option>Arts & Culture</option>
          </select>
        </label>
        <label>
          Editor note
          <textarea name="note" rows="4" ${can("draft") ? "" : "disabled"}>${staffStories[0].notes}</textarea>
        </label>
        <button class="primary-button" type="submit" ${can("draft") ? "" : "disabled"}>Save draft</button>
      </form>

      <div class="section-label">Access model</div>
      <section class="access-table">
        <div><strong>Reporter</strong><span>Own drafts, source notes, submit for review</span></div>
        <div><strong>Editor</strong><span>Edit all stories, approve copy, schedule alerts</span></div>
        <div><strong>Admin</strong><span>Publish, manage staff, review audit history</span></div>
        <div><strong>Viewer</strong><span>Read-only review for board, legal, or partner staff</span></div>
      </section>

      <div class="section-label">Audit trail</div>
      <section class="audit-list">
        ${auditEvents.map((event) => `<p>${event}</p>`).join("")}
      </section>
    </section>
  `;
}

function itRoleOption([key, role]) {
  return `
    <button class="role-button ${currentItRole === key ? "active" : ""}" type="button" data-it-role="${key}">
      <strong>${role.label}</strong>
      <span>${role.permissions.join(" · ")}</span>
    </button>
  `;
}

function accessRequestCard(item) {
  return `
    <article class="staff-card">
      <div class="staff-card-top">
        <div>
          <div class="tag">${item.ticket} · ${item.team}</div>
          <h3 class="staff-title">${item.name}</h3>
        </div>
        <span class="status-badge">${item.risk} risk</span>
      </div>
      <p class="summary">${item.request}</p>
      <div class="staff-meta-grid">
        <span>Status<br><strong>${item.status}</strong></span>
        <span>Requested<br><strong>Today</strong></span>
        <span>Owner<br><strong>IT</strong></span>
      </div>
      <div class="button-row">
        <button class="primary-button" type="button" data-it-action="approve" ${canIt("approveAccess") ? "" : "disabled"}>Approve access</button>
        <button class="secondary-button" type="button" data-it-action="route" ${canIt("resetMfa") || canIt("approveAccess") ? "" : "disabled"}>Route</button>
      </div>
    </article>
  `;
}

function accountHealthRow(account) {
  return `
    <div>
      <strong>${account.name}</strong>
      <span>${account.role} · MFA ${account.mfa} · ${account.session} · ${account.lastSeen}</span>
    </div>
  `;
}

function renderItPortal() {
  const role = itRoleDefinitions[currentItRole];
  appView.innerHTML = `
    <section class="screen staff-screen it-screen">
      <div class="screen-header">
        <div>
          <div class="eyebrow">IT department access control</div>
          <h1 class="screen-title">IT Access Desk</h1>
        </div>
      </div>

      <section class="module orange">
        <h2 class="module-title">${role.label}</h2>
        <p class="summary">${role.summary}</p>
        <div class="permission-grid">
          ${permissionPill("Approve access", canIt("approveAccess"))}
          ${permissionPill("Assign roles", canIt("assignRoles"))}
          ${permissionPill("Reset MFA", canIt("resetMfa"))}
          ${permissionPill("Suspend sessions", canIt("suspendSession"))}
          ${permissionPill("Deactivate accounts", canIt("deactivate"))}
          ${permissionPill("Export audit logs", canIt("exportLogs"))}
        </div>
      </section>

      <div class="section-label">IT role</div>
      <div class="role-grid">
        ${Object.entries(itRoleDefinitions).map(itRoleOption).join("")}
      </div>

      <div class="section-label">Access requests</div>
      <div class="staff-list">
        ${accessRequests.map(accessRequestCard).join("")}
      </div>

      <div class="section-label">Account health</div>
      <section class="access-table">
        ${accountHealth.map(accountHealthRow).join("")}
      </section>

      <div class="section-label">Permission assignment</div>
      <form class="edit-form it-form">
        <label>
          Staff account
          <select name="account" ${canIt("assignRoles") ? "" : "disabled"}>
            <option>Maya Chen</option>
            <option>Luis Ortega</option>
            <option>Board Observer</option>
          </select>
        </label>
        <label>
          Role
          <select name="role" ${canIt("assignRoles") ? "" : "disabled"}>
            <option>Reporter</option>
            <option>Editor</option>
            <option>Admin</option>
            <option>Viewer</option>
          </select>
        </label>
        <label>
          Access reason
          <textarea name="reason" rows="4" ${canIt("assignRoles") ? "" : "disabled"}>Sponsor verified; assign least-privilege access for current assignment.</textarea>
        </label>
        <button class="primary-button" type="submit" ${canIt("assignRoles") ? "" : "disabled"}>Update access</button>
      </form>

      <div class="section-label red">Security audit</div>
      <section class="audit-list">
        ${itAuditEvents.map((event) => `<p>${event}</p>`).join("")}
      </section>
    </section>
  `;
}

function renderStory(id) {
  const story = stories.find((item) => item.id === id) || stories[0];
  appView.innerHTML = `
    <article class="story-page">
      <img class="story-hero" src="${story.image}" alt="">
      <p class="caption">${story.caption}</p>
      <div class="story-content">
        <div class="tag">${story.label}</div>
        <h1 class="story-title">${story.title}</h1>
        <p class="summary">${story.summary}</p>
        <p class="meta" style="margin-top:10px">By ${story.author} · ${story.time}</p>
        <div class="story-copy">
          ${story.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
        <section class="trust-block">
          <h3>Source documents</h3>
          <p class="summary">Agenda links, public records, agency documents, correction links, and reporting notes belong here when available.</p>
        </section>
        <section class="module orange">
          <h2 class="module-title">Support this kind of local reporting</h2>
          <p class="summary">Nonprofit civic journalism depends on readers who want public decisions to stay visible.</p>
          <div class="button-row">
            <button class="primary-button" type="button" data-view="support">Donate</button>
            <button class="secondary-button" type="button" data-save="${story.id}">Save</button>
          </div>
        </section>
      </div>
    </article>
  `;
}

const renderers = {
  home: renderHome,
  myoc: renderMyOC,
  latest: renderLatest,
  alerts: renderAlerts,
  saved: renderSaved,
  support: renderSupport,
  staff: renderStaff,
  it: renderItPortal
};

function setActiveNav(viewName) {
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
}

function navigate(viewName) {
  const renderer = renderers[viewName] || renderHome;
  renderer();
  setActiveNav(renderers[viewName] ? viewName : "home");
  appView.scrollTop = 0;
  appView.focus({ preventScroll: true });
}

document.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    navigate(viewButton.dataset.view);
    return;
  }

  const storyButton = event.target.closest("[data-story-open]");
  if (storyButton) {
    renderStory(storyButton.dataset.storyOpen);
    setActiveNav("");
    appView.scrollTop = 0;
    return;
  }

  const storyCard = event.target.closest("[data-story]");
  if (storyCard) {
    renderStory(storyCard.dataset.story);
    setActiveNav("");
    appView.scrollTop = 0;
    return;
  }

  const saveButton = event.target.closest("[data-save]");
  if (saveButton) {
    const id = saveButton.dataset.save;
    if (saved.has(id)) {
      saved.delete(id);
    } else {
      saved.add(id);
    }
    const activeView = document.querySelector(".nav-item.active")?.dataset.view;
    if (activeView === "saved") {
      renderSaved();
    } else {
      saveButton.classList.toggle("saved", saved.has(id));
      saveButton.textContent = saved.has(id) ? "★" : "☆";
    }
    return;
  }

  const roleButton = event.target.closest("[data-role]");
  if (roleButton) {
    currentRole = roleButton.dataset.role;
    renderStaff();
    return;
  }

  const workflowButton = event.target.closest("[data-workflow]");
  if (workflowButton) {
    const action = workflowButton.dataset.workflow;
    auditEvents.unshift(`${roleDefinitions[currentRole].label} attempted ${action}; prototype recorded the workflow event.`);
    renderStaff();
    return;
  }

  const itRoleButton = event.target.closest("[data-it-role]");
  if (itRoleButton) {
    currentItRole = itRoleButton.dataset.itRole;
    renderItPortal();
    return;
  }

  const itActionButton = event.target.closest("[data-it-action]");
  if (itActionButton) {
    const action = itActionButton.dataset.itAction;
    itAuditEvents.unshift(`${itRoleDefinitions[currentItRole].label} recorded ${action} action in IT Access Desk.`);
    renderItPortal();
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.matches(".newsletter-form")) {
    event.preventDefault();
    event.target.innerHTML = `<p class="summary"><strong>Signed up.</strong> This confirms the newsletter flow without sending data.</p>`;
  }

  if (event.target.matches(".it-form")) {
    event.preventDefault();
    itAuditEvents.unshift(`${itRoleDefinitions[currentItRole].label} updated staff access assignment.`);
    event.target.insertAdjacentHTML("beforeend", `<p class="form-confirmation">Access update recorded in prototype workspace.</p>`);
    return;
  }

  if (event.target.matches(".edit-form")) {
    event.preventDefault();
    auditEvents.unshift(`${roleDefinitions[currentRole].label} saved a draft from Staff Studio.`);
    event.target.insertAdjacentHTML("beforeend", `<p class="form-confirmation">Draft saved in prototype workspace.</p>`);
  }
});

navigate("home");
